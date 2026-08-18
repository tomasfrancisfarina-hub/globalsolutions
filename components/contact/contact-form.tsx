"use client";

import { useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ContactContent, Locale } from "@/types";

interface ContactFormProps {
  content: ContactContent["form"];
  locale: Locale;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME = 120;
const MAX_EMAIL = 254;
const MAX_COMPANY = 160;
const MAX_MESSAGE = 5000;

/**
 * In-page contact form — submits only via POST /api/contact.
 * Never uses mailto, window.open, or navigation.
 */
export function ContactForm({ content, locale }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  /** Synchronous lock — React state alone cannot stop a double-click race. */
  const submissionLockRef = useRef(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();

    if (submissionLockRef.current || isSubmitting) return;

    submissionLockRef.current = true;
    setIsSubmitting(true);
    setStatus("loading");

    const form = e.currentTarget;
    let succeeded = false;

    try {
      const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
      const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
      const company = (
        form.elements.namedItem("company") as HTMLInputElement
      ).value.trim();
      const message = (
        form.elements.namedItem("message") as HTMLTextAreaElement
      ).value.trim();

      if (
        !name ||
        !email ||
        !message ||
        !EMAIL_RE.test(email) ||
        name.length > MAX_NAME ||
        email.length > MAX_EMAIL ||
        company.length > MAX_COMPANY ||
        message.length > MAX_MESSAGE
      ) {
        setStatus("error");
        return;
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, message, locale }),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      form.reset();
      succeeded = true;
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
      // Keep lock after success so a late second click cannot fire another POST.
      if (!succeeded) {
        submissionLockRef.current = false;
      }
    }
  }

  const inputClass =
    "w-full border-b border-border bg-transparent py-3 text-base outline-none transition-colors focus:border-foreground";

  if (status === "success") {
    return <p className="text-lg text-muted">{content.successMessage}</p>;
  }

  const busy = isSubmitting || status === "loading";

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-0 space-y-8 md:mt-0"
      noValidate
    >
      <div>
        <label htmlFor="name" className="text-xs font-medium uppercase tracking-widest text-subtle">
          {content.nameLabel}
        </label>
        <input
          id="name"
          name="name"
          required
          maxLength={MAX_NAME}
          disabled={busy}
          autoComplete="name"
          className={cn(inputClass, "mt-2")}
        />
      </div>
      <div>
        <label htmlFor="email" className="text-xs font-medium uppercase tracking-widest text-subtle">
          {content.emailLabel}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={MAX_EMAIL}
          disabled={busy}
          autoComplete="email"
          className={cn(inputClass, "mt-2")}
        />
      </div>
      <div>
        <label
          htmlFor="company"
          className="text-xs font-medium uppercase tracking-widest text-subtle"
        >
          {content.companyLabel}
        </label>
        <input
          id="company"
          name="company"
          maxLength={MAX_COMPANY}
          disabled={busy}
          autoComplete="organization"
          className={cn(inputClass, "mt-2")}
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="text-xs font-medium uppercase tracking-widest text-subtle"
        >
          {content.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={MAX_MESSAGE}
          disabled={busy}
          className={cn(inputClass, "mt-2 resize-none")}
        />
      </div>
      <Button type="submit" size="lg" disabled={busy} className="w-full sm:w-auto">
        {busy ? content.submittingLabel : content.submitLabel}
      </Button>
      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          {content.errorMessage}
        </p>
      )}
    </form>
  );
}

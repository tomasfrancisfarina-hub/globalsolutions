"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ContactContent } from "@/types";

interface ContactFormProps {
  content: ContactContent["form"];
}

export function ContactForm({ content }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full border-b border-border bg-transparent py-3 text-base outline-none transition-colors focus:border-foreground";

  if (status === "success") {
    return (
      <p className="text-lg text-muted">{content.successMessage}</p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-12 space-y-8">
      <div>
        <label htmlFor="name" className="text-xs font-medium uppercase tracking-widest text-subtle">
          {content.nameLabel}
        </label>
        <input id="name" name="name" required className={cn(inputClass, "mt-2")} />
      </div>
      <div>
        <label htmlFor="email" className="text-xs font-medium uppercase tracking-widest text-subtle">
          {content.emailLabel}
        </label>
        <input id="email" name="email" type="email" required className={cn(inputClass, "mt-2")} />
      </div>
      <div>
        <label htmlFor="company" className="text-xs font-medium uppercase tracking-widest text-subtle">
          {content.companyLabel}
        </label>
        <input id="company" name="company" className={cn(inputClass, "mt-2")} />
      </div>
      <div>
        <label htmlFor="message" className="text-xs font-medium uppercase tracking-widest text-subtle">
          {content.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={cn(inputClass, "mt-2 resize-none")}
        />
      </div>
      <Button type="submit" size="lg" disabled={status === "loading"}>
        {status === "loading" ? "..." : content.submitLabel}
      </Button>
      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          {content.errorMessage}
        </p>
      )}
    </form>
  );
}

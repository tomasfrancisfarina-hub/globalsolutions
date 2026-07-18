import type { ContentStatus } from "@/types";

/** Placeholder content must not be indexed */
export function isIndexableContent(status?: ContentStatus): boolean {
  return status !== "placeholder";
}

/** Robots directive from content status + explicit override */
export function getContentRobots(status?: ContentStatus, noIndex?: boolean) {
  const block = noIndex === true || status === "placeholder";
  return {
    index: !block,
    follow: !block,
  };
}

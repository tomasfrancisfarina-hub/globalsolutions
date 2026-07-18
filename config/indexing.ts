/** Global indexing control — set to false on staging/preview */
export function isIndexingAllowed(): boolean {
  return process.env.NEXT_PUBLIC_ALLOW_INDEXING !== "false";
}

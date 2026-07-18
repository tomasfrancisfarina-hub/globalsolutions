/** Content publication status — swap placeholder → published without layout changes */
export type ContentStatus = "placeholder" | "published";

export interface ContentMeta {
  status: ContentStatus;
}

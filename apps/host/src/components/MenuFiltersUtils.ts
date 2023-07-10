export const categories = ["nature", "technology", "abstract"];

export function reorderPhotos() {
  const event = new CustomEvent("reorderPhotos", {});
  window.dispatchEvent(event);
}

// Responsive srcset for remote product images (Unsplash-style ?w= URLs), so
// phones download a ~480px image instead of the 800px one. Returns '' for
// images that don't support width resizing.
export const PRODUCT_IMAGE_SIZES = '(min-width: 1024px) 50vw, 100vw';

export function productImageSrcSet(src: string): string {
  if (!/[?&]w=\d+/.test(src)) return '';
  return [480, 800, 1200].map((w) => `${src.replace(/([?&]w=)\d+/, `$1${w}`)} ${w}w`).join(', ');
}

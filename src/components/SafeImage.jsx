import { useState } from "react";
import { Coffee } from "lucide-react";

/**
 * Image with a graceful fallback so the layout never shows a broken image,
 * even if the remote image host is unreachable.
 */
export default function SafeImage({ src, alt, className = "", eager = false }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`img-fallback ${className}`} role="img" aria-label={alt}>
        <Coffee size={40} strokeWidth={1.5} />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

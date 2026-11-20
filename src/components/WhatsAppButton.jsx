import { MessageCircle } from "lucide-react";
import { BUSINESS } from "../data.js";

export default function WhatsAppButton() {
  const href = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Chat with The Urban Brew on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="wa-float__label">Chat with us</span>
    </a>
  );
}

import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phoneNumber = "919876543210";
  const message = encodeURIComponent("Hello! I'm interested in learning more about Inspire Academy & Library.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-secondary rounded-full animate-ping opacity-25"></div>
        
        {/* Button */}
        <div className="relative w-14 h-14 bg-secondary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 hover-glow-green">
          <MessageCircle className="w-7 h-7 text-secondary-foreground" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat with us
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-foreground"></div>
        </div>
      </div>
    </a>
  );
};

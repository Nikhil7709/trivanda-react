import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/919225101364" 
      className="whatsapp-float" 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label="Chat on WhatsApp" 
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
};

export default WhatsAppButton; 
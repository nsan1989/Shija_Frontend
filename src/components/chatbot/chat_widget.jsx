import { useState } from "react";
import ChatWindow from "./chat_window";
import "./chatbot_style.css";

export default function ChatWidget () {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <div 
        className="chatbot-button"
        onClick={() => setOpen(!open)}
      >
        💬
      </div>

      {/* Chat Window */}
      {open && <ChatWindow onClose={() => setOpen(false)} />}
    </>
  );
};


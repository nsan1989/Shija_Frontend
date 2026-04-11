import { useState, useEffect, useRef } from "react";
import ChatBubble from "./chat_bubble";

export default function ChatWindow({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const CHATBOT_API = "https://chatbot-worker.developer-dev.workers.dev";

  // Auto scroll to bottom when new message arrives
  const scrollToBottom = () => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Load old chat if available
  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem("chat_messages"));

    if (savedMessages?.length) {
      setMessages(savedMessages);
    } else {
      setMessages([
        {
          sender: "bot",
          text: "Hi, I'm SHRI Assist, your personal support for all medical needs. How can I help you?",
          type: "welcome",
        },
      ]);
    }
  }, []);

  // Store messages locally
  useEffect(() => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  }, [messages]);

  // Store conversation ID locally
  useEffect(() => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  }, [messages]);

  // Handle sending via input box
  const sendToBot = async (userMessage) => {
    if (!userMessage.trim() || isTyping) return;

    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);

    setIsTyping(true);

    try {
      const res = await fetch(CHATBOT_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text:
            data.reply || "Sorry, I couldn't process your request right now.",
        },
      ]);
    } catch (error) {
      console.error("Chatbot Error:", error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Something went wrong. Please try again later.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const sendMessage = async () => {
    const userMessage = input;
    setInput("");

    await sendToBot(userMessage);
  };

  // QUICK ACTIONS — used only for welcome message

  const sendQuick = async (text) => {
    await sendToBot(text);
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <span>SHRI Assist</span>
        <button 
          onClick={onClose}
          style={{
            width: "1.5rem",
            height: "1.5rem",
            border: "none",
            borderRadius: "50%",
          }}
        >
          ✖
        </button>
      </div>

      <div className="chat-body">
        {messages.map((msg, index) => (
          <div key={index}>
            <ChatBubble sender={msg.sender} text={msg.text} />

            {msg.type === "welcome" && (
              <div className="quick-buttons">
                <button onClick={() => sendQuick("Help me find a doctor")}>
                  Help me find a doctor
                </button>

                <button onClick={() => sendQuick("I want to book appointment")}>
                  I want to book appointment
                </button>

                <button onClick={() => sendQuick("I have an emergency")}>
                  I have an emergency
                </button>
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="typing-bubble">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          disabled={isTyping}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <button onClick={sendMessage} disabled={isTyping}>
          Send
        </button>
      </div>
    </div>
  );
}

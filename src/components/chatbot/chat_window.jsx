import { useState, useEffect, useRef } from "react";
import ChatBubble from "./chat_bubble";

export default function ChatWindow({ onClose }) {
  const [conversationId, setConversationId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

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
    const savedConversation = localStorage.getItem("chat_conversation_id");

    setMessages([
      {
        sender: "bot",
        text:
          "Hi, I'm SHRI Assist, your personal support for all medical needs. How can I help you?",
        type: "welcome",
      },
    ]);

    if (savedConversation) setConversationId(savedConversation);
  }, []);

  // Store messages locally
  useEffect(() => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  }, [messages]);

  // Store conversation ID locally
  useEffect(() => {
    if (conversationId)
      localStorage.setItem("chat_conversation_id", conversationId);
  }, [conversationId]);

  // Handle sending via input box
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);

    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/chat/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          conversation_id: conversationId
        })
      });

      const data = await res.json();

      setConversationId(data.conversation_id);

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.reply },
      ]);

    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsTyping(false);
    }
  };

  // QUICK ACTIONS — used only for welcome message
  const sendQuick = (text) => {
    setMessages((prev) => [...prev, { sender: "user", text }]);
    setIsTyping(true);
    sendQuickToBackend(text);
  };

  const sendQuickToBackend = async (text) => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/chat/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          conversation_id: conversationId,
        }),
      });

      const data = await res.json();
      setConversationId(data.conversation_id);

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.reply },
      ]);

    } catch (err) {
      console.error(err);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <span>SHRI Assist</span>
        <button onClick={onClose}>✖</button>
      </div>

      <div className="chat-body">
        {messages.map((msg, index) => (
          <div key={index}>
            <ChatBubble sender={msg.sender} text={msg.text} />

            {/* Show quick buttons only for welcome message */}
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
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};


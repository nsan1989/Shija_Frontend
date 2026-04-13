import { useState, useEffect, useRef } from "react";
import ChatBubble from "./chat_bubble";

export default function ChatWindow({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const chatEndRef = useRef(null);

  const CHATBOT_API = "http://localhost:8000/api/chatbot/";

  useEffect(() => {
    let existingSession = localStorage.getItem("chat_session_id");

    if (!existingSession) {
      existingSession = crypto.randomUUID();
      localStorage.setItem("chat_session_id", existingSession);
    }
  }, []);

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

  // Text to Speech
  const speakText = (text) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
  };

  // Speech to Text
  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.continuous = false;
    recognition.maxAlternatives = 1;

    setIsListening(true);

    recognition.onresult = async (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join(" ")
        .trim();

      setIsListening(false);

      if (transcript > 1) {
        await sendToBot(transcript, true);
      }
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  // Handle sending via input box
  const sendToBot = async (userMessage, shouldSpeak = false) => {
    if (!userMessage.trim() || isTyping) return;

    const sessionId = localStorage.getItem("chat_session_id");

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
          session_id: sessionId,
        }),
      });

      const data = await res.json();

      const botReply =
        data.reply || "Sorry, I couldn't process your request right now.";

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: botReply,
          image: data.image || null,
          source: data.source || null,
          type: data.type || null,
          options: data.options || [],
        },
      ]);
      if (shouldSpeak) {
        speakText(botReply);
      }
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

  const sendStructuredAction = async (action, selectedId) => {
    const sessionId = localStorage.getItem("chat_session_id");

    setIsTyping(true);

    try {
      const res = await fetch(CHATBOT_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action,
          selected_id: selectedId,
          session_id: sessionId,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: data.reply,
          type: data.type || null,
          options: data.options || [],
        },
      ]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsTyping(false);
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = input;
    setInput("");

    await sendToBot(userMessage, false);
  };

  // QUICK ACTIONS — used only for welcome message

  const sendQuick = async (text) => {
    await sendToBot(text, false);
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
            <ChatBubble sender={msg.sender} text={msg.text} image={msg.image} />

            {msg.type === "department_selection" && (
              <div className="structured-options">
                {msg.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() =>
                      sendStructuredAction("select_department", option.id)
                    }
                  >
                    {option.name}
                  </button>
                ))}
              </div>
            )}

            {msg.type === "doctor_selection" && (
              <div className="structured-options">
                {msg.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() =>
                      sendStructuredAction("select_doctor", option.id)
                    }
                  >
                    {option.name}
                  </button>
                ))}
              </div>
            )}

            {msg.type === "slot_selection" && (
              <div className="slot-grid">
                {msg.options.map((slot) => (
                  <button
                    key={slot.id}
                    disabled={!slot.available}
                    onClick={() => sendStructuredAction("select_slot", slot.id)}
                    style={{
                      backgroundColor: slot.available ? "green" : "red",
                      color: "white",
                      opacity: slot.available ? 1 : 0.7,
                    }}
                  >
                    {slot.label}
                  </button>
                ))}
              </div>
            )}

            {msg.type === "welcome" && (
              <div className="quick-buttons">
                <button onClick={() => sendQuick("OPD Schedule")}>
                  OPD Schedule
                </button>

                <button onClick={() => sendStructuredAction("start_booking")}>
                  I want to book appointment
                </button>

                <button onClick={() => sendQuick("Home Care")}>
                  Is home care service available
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
        <button
          onClick={startListening}
          disabled={isTyping || isListening}
          title="Speak"
        >
          {isListening ? "🎙️..." : "🎤"}
        </button>

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

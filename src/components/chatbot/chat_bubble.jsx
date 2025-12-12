export default function ChatBubble ({ sender, text }) {
  return (
    <div className={`chat-bubble ${sender}`}>
      {text}
    </div>
  );
};


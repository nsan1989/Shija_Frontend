export default function ChatBubble ({ sender, text, link }) {
  return (
    <div className={`chat-bubble ${sender}`}>
      {text}
      {link && (
        <>
          {" "}
          <a href={link} target="_blank" rel="noopener noreferrer">
            {link}
          </a>
        </>
      )}
    </div>
  );
};

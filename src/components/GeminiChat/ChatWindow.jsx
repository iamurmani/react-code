import React from 'react';

const ChatWindow = ({ messages }) => {
  return (
    <div className="chat-window">
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.isYou ? 'you' : 'gemini'}`}>
          {message.text}
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;

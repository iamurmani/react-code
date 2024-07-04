import React, { useState, useEffect } from 'react';
import ChatWindow from './ChatWindow';
import InputBox from './InputBox';
import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'AIzaSyBdHRvGWVJJ0D6vivxuUNl8p38yGrhGU4k';

function GeminiChat() {
    const [messages, setMessages] = useState([]);
    const [genAI, setGenAI] = useState(null);
  
    useEffect(() => {
      const ai = new GoogleGenerativeAI(API_KEY);
      setGenAI(ai);
    }, []);
  
    const sendMessage = async (message) => {
      if (!genAI) return;
  
      setMessages((prevMessages) => [...prevMessages, { text: message, isYou: true }]);

      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      const result = await model.generateContent(message);
      const response = await result.response;
      const text = response.text();
  
      setMessages((prevMessages) => [...prevMessages, { text }]);
    };
  
    return (
      <div className="chat-app">
        <ChatWindow messages={messages} />
        <InputBox onSendMessage={sendMessage} />
      </div>
    );
}

export default GeminiChat
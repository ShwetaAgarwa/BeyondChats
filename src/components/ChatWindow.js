import React, { useState } from 'react';
import styles from '../styles/ChatWIndow.module.css';

function ChatWindow() {
  const [messages, setMessages] = useState([
  { id: 1, sender: 'admin', text: 'Hi, how can I help you today?' },
  { id: 2, sender: 'user', text: 'I need help with billing.' },
  { id: 3, sender: 'admin', text: 'Sure, I can assist you with that. What seems to be the issue?' },
  { id: 4, sender: 'user', text: 'I was charged twice for my last invoice.' },
  { id: 5, sender: 'admin', text: 'I see. Let me check your account details for that.' },
  { id: 6, sender: 'admin', text: 'Can you please confirm your account email?' },
  { id: 7, sender: 'user', text: 'It’s user@example.com' },
  { id: 8, sender: 'admin', text: 'Thank you. I have processed a refund for the duplicate charge.' },
  { id: 9, sender: 'user', text: 'Great, thanks for the quick help!' },
  { id: 10, sender: 'admin', text: 'You’re welcome! Anything else I can help with?' },
]);

  const [newMsg, setNewMsg] = useState('');

  const sendMessage = () => {
    if (!newMsg.trim()) return;
    setMessages([...messages, { id: Date.now(), sender: 'admin', text: newMsg }]);
    setNewMsg('');
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatBox}>
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`${styles.message} ${msg.sender === 'admin' ? styles.admin : styles.user}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className={styles.inputBox}>
        <input
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatWindow;

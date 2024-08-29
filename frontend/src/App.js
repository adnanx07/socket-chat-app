import React, { useEffect, useState } from "react";
import "./App.css";
import { socket } from "./util/socket";

function stringToColor(string) {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = "#";
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
}

function App() {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.connect();
    socket.on("receiveMessage", (data) => {
      setChat((prev) => [...prev, data]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (message && username) {
      socket.emit("sendMessage", { sender: username, message });
      setMessage("");
    }
  };

  return (
    <div className="App">
      <h2>Chat App</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={({ target: { value }}) => setUsername(value)}
      />
      <div className="chat-window">
        {chat.length === 0 ? (
          <p className="no-messages">No messages yet, Start chatting :)</p>
        ) : (
          chat.map((chatMessage, index) => {
            const avatarColor = stringToColor(chatMessage.sender); // Ganerate rendom color for avtaar
            return (
              <div key={index} className="chat-message">
                <div
                  className="avatar"
                  style={{ backgroundColor: avatarColor }} // Apply customized avtar color
                >
                  {chatMessage.sender.charAt(0).toUpperCase()}
                </div>
                <div className="message-content">
                  <p className="sender-name">{chatMessage.sender}</p>
                  <p className="message-text">{chatMessage.message}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={({ target: { value }}) => setMessage(value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;

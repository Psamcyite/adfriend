'use client'
import { useState } from "react";

// Declare the chrome object
declare const chrome: any;

export default function Popup() {
  const [message, setMessage] = useState("");

  const saveMessage = () => {
    chrome.storage.sync.set({ message }, () => {
      alert("Message saved!");
    });
  };

  return (
    <div className="p-4 w-60">
      <h2 className="text-lg font-bold">AdFriend Settings</h2>
      <input
        type="text"
        className="w-full p-2 mt-2 border"
        placeholder="Custom message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={saveMessage}
        className="w-full p-2 mt-2 text-white bg-blue-500"
      >
        Save
      </button>
    </div>
  );
}

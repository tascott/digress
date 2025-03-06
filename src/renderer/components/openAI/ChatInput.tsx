import React, { useState } from 'react'

export function ChatInput() {
  const [message, setMessage] = useState('')
  const [messageNumber, setMessageNumber] = useState(0)
  const [chatHistory, setChatHistory] = useState<{role: string, content: string}[]>([{role: 'assistant', content: 'Hello, how can I help you today?'}])

  const handleSubmit = async () => {
    try {
      const newChatHistory = [...chatHistory, {role: 'user', content: message}]
      setChatHistory(newChatHistory)
      setMessageNumber(messageNumber + 1)
      const response = await window.App.chat.send(message)
      console.log('Response from OpenAI:', response)
      setMessage('')
      setChatHistory([...newChatHistory, {role: 'assistant', content: response.content}])
    } catch (error) {
      console.error('Error sending message:', error)
    }
  }

  return (
    <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <input
        type="text"
        className="flex-1 bg-gray-800 text-white"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        onClick={handleSubmit}
      >
        Send
      </button>
    </div>
    <div className="flex-1 bg-gray-800 text-white">
        {chatHistory.map((response, index) => (
          <p key={index}>{response.role}: {response.content}</p>
        ))}
      </div>
    </div>
  )
}

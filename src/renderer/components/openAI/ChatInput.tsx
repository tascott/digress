import React, { useState } from 'react'

export function ChatInput() {
  const [message, setMessage] = useState('')

  const handleSubmit = async () => {
    if (!message.trim()) return
    try {
      const response = await window.App.chat.send(message)
      console.log('Response from OpenAI:', response)
      setMessage('')
    } catch (error) {
      console.error('Error sending message:', error)
    }
  }

  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        className="flex-1"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') handleSubmit()
        }}
      />
      <button
        type="submit"
        onClick={handleSubmit}
      >
        Send!!
      </button>
    </div>
  )
}

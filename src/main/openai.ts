import { ipcMain } from 'electron'
import OpenAI from 'openai'

let openai: OpenAI | null = null

export function setupOpenAIHandlers() {
  // Initialize OpenAI client when setting up handlers
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    console.error('OPENAI_API_KEY is not set in environment variables')
    return
  }

  openai = new OpenAI({
    apiKey: apiKey
  })

  ipcMain.handle('chat:send', async (_, message: string) => {
    if (!openai) {
      throw new Error('OpenAI client not initialized')
    }

    console.log('Sending message to OpenAI:', message)

    try {
      const completion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: message }],
        model: 'gpt-3.5-turbo',
      })

      return completion.choices[0].message
    } catch (error) {
      console.error('OpenAI API Error:', error)
      throw error
    }
  })
}
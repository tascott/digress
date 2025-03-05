import * as dotenv from 'dotenv'
import path from 'path'

// Load .env file before any other imports
dotenv.config({ path: path.join(process.cwd(), '.env') })

import { app } from 'electron'
import { makeAppWithSingleInstanceLock } from 'lib/electron-app/factories/app/instance'
import { makeAppSetup } from 'lib/electron-app/factories/app/setup'
import { MainWindow } from './windows/main'
import { setupOpenAIHandlers } from './openai'

makeAppWithSingleInstanceLock(async () => {
  await app.whenReady()
  await makeAppSetup(MainWindow)
  setupOpenAIHandlers()
})

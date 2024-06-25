// imports
import express from 'express'
import posts from './routes/posts.js'
import path from 'path'
import { fileURLToPath } from 'url'
import logger from './middleware/logger.js'
import {errorHandler, notFound} from './middleware/error.js'
const port = process.env.PORT || 8000

// Get directory name
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Logger middleware
app.use(logger)

// Setup static folder
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/api/posts', posts)
app.use(notFound)
// error handler
app.use(errorHandler)

app.listen(port, () => console.log(`Server running on port ${port}`))
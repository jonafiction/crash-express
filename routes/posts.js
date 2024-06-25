import express from 'express'
const router = express.Router()
import {getPosts, getPost, createPost, updatePost, deletePost} from '../controllers/postControllers.js'


// Get all posts
router.get('/', getPosts)

// Get a single post
router.get('/:id', getPost)

// create new post
router.post('/', createPost)

// Update/edit post
router.put('/:id', updatePost)

// delete post
router.put('/:id', deletePost)

export default router
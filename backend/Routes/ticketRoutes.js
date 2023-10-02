const express = require('express')
const router = express.Router()

const {getTickets, getTicket, createTicket, deleteTicket, updateTicket} = require('../Controllers/ticketController')

const {protect} = require('../Middleware/authMiddleware')
router.route('/').get(protect, getTickets).post(protect, createTicket)
router.route('/:id').get(protect, getTicket).delete(protect, deleteTicket).put(protect, updateTicket)

module.exports = router 

const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const stripe = require('stripe')(process.env.STRIPE_SECRET)

const app = express()

app.use(cors({ origin: true }))
app.use(express.json())

app.get('/', (req, res) => res.status(200).send('hello world'))

exports.api = functions.https.onRequest(app)
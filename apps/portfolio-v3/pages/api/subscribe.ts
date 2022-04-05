import type { NextApiRequest, NextApiResponse } from 'next'

const Subscribe = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }
  try {
    const API_KEY = process.env.BUTTONDOWN_API_KEY
    const response = await fetch(
      `https://api.buttondown.email/v1/subscribers`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${API_KEY}`
        },
        body: JSON.stringify({ email })
      }
    )

    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error subscribing to the newsletter.`
      })
    }

    return res.status(201).json({ error: '' })
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() })
  }
}

export default Subscribe

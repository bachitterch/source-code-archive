import type { NextApiRequest, NextApiResponse } from 'next'
import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER
})

const Subscribe = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }
  try {
    await mailchimp.lists.addListMember(process.env.MCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: 'Subscribed'
    })

    return res.status(201).json({ error: '' })
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() })
  }
}

export default Subscribe

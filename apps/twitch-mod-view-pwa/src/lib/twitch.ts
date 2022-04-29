export const twitchClient = async () => {
  const params = {
    client_id: process.env.TWITCH_CLIENT_ID,
    client_secret: process.env.TWITCH_CLIENT_SECRET,
    respone_type: 'token id_token',
    scope:
      'openid chat:read chat:edit channel:moderate whispers:read whispers:edit user_block_edit clips:edit user:edit:follows user:edit:broadcast channel:edit:commercial user_subscriptions user:read:follows moderator:manage:automod'
  }
}

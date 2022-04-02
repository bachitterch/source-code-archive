import { Client } from '@notionhq/client'

const client = new Client({ auth: process.env.NOTION_ACCESS_TOKEN })

export const getItemList = async databaseId => {
  const response = await client.databases.query({
    database_id: databaseId
  })
  return response.results
}

export const getItem = async (data, slug) => {
  const response = data.find(result => {
    if (result.properties.status.select.name === 'published') {
      const resultSlug = result.properties.slug.rich_text[0].plain_text
      return resultSlug === slug
    }
    return false
  })
  return response
}

export const getBlocks = async blockId => {
  const response = await client.blocks.children.list({
    block_id: blockId
  })
  return response.results
}

export const getPageData = async pageId => {
  const response = await client.blocks.children.list({
    block_id: pageId
  })
  return response.results
}

export const convertItemsToList = tableData => {
  const items = tableData.map(item => {
    return {
      slug: item.properties.slug.rich_text[0].plain_text
    }
  })
  return { items }
}

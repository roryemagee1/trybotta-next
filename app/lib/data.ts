import { createClient } from 'contentful';

const space: string = process.env.CONTENTFUL_SPACE_ID || "";
const accessToken: string = process.env.CONTENTFUL_ACCESS_TOKEN || "";

const client = createClient({
  space,
  accessToken,
})

export async function fetchContentfulEntries() {
  try {
    const entries = await client.getEntries({
      // content_type: "testBlogPost"
    })
    console.log(entries);

    if (entries.items) {
      return {
        items: entries.items
      }
    }
  } catch(error) {
    console.log(error);
    return {
      message: "Failed to retrieve entries."
    }
  }
}


import { createClient } from 'contentful';

const space: string = process.env.CONTENTFUL_SPACE_ID || "";
const accessToken: string = process.env.CONTENTFUL_ACCESS_TOKEN || "";

const client = createClient({
  space,
  accessToken,
})

export async function fetchContentfulEntries() {
  try {
    const entries = await client.getEntries()
    const sortedItems = sortByOrder(entries.items);
    return sortedItems
  } catch(error) {
    console.log(error);
    return {
      message: "Failed to retrieve entries."
    }
  }
}

function sortByOrder(items: any) {
  const sortedItems = items.sort((a: any, b: any) => a.fields.order - b.fields.order);
  return sortedItems;
}


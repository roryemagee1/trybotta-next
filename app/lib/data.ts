import { createClient } from 'contentful';

import Header from '@/app/components/header';
import Photo from '@/app/components/photo';
import Textbox from '@/app/components/textbox';
import Btn from '@/app/components/btn';
import Slide from '@/app/components/slide';
import Icons from '@/app/components/icons';
import Footer from '@/app/components/footer';

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

function sortByOrder(items) {
  const sortedItems = items.sort((a, b) => a.fields.order - b.fields.order);
  return sortedItems;
}


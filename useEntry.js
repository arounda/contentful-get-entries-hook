import { createClient } from "contentful";

const getEntry = async (entry, order) => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const response = await client.getEntries({
    content_type: entry,
    order: order === "descending" ? "-sys.createdAt" : "sys.createdAt",
  });

  return response;
};

export default getEntry;

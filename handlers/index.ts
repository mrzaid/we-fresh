import Paths from "../config/path";
export const fetchContent = async (query: string) => {
  try {
    const res = await fetch(
      "https://graphql.contentful.com/content/v1/spaces/fr6kcovl026y/",
      {
        method: "POST",
        body: JSON.stringify({ query: query }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer iNlQ1MMJfxj99iiuwVMO9Rz1Uoies5hKeTPFI5rHLQY`,
        },
      }
    );

    const fetchedContent = await res.json();

    return fetchedContent;
  } catch (error) {
    // add a descriptive error message first,
    // so we know which GraphQL query caused the issue

    console.error(error);
  }
};

import { FetchQuery } from "@airstack/node/dist/types/types";
import { fetchQueryWithPagination, init } from "@airstack/node";

init(process.env.AIRSTACK_API_KEY!);

export const fetchAllPagesQuery = async <T>(query: string): Promise<T[]> => {
  
  const allData: T[] = [];

  // Fetch the first page of data
  let response: FetchQuery | undefined | null = await fetchQueryWithPagination(query);

  // Handle error for the first page
  if (response.error) {
    console.error(response.error);
    return fetchAllPagesQuery(query);
  }

  // Store the data from the first page
  allData.push(response.data);

  // Determine whether to fetch the next page
  let shouldFetchNextPage = response.hasNextPage;

  // Counter to track the number of API calls
  // let numCalls = 1;

  // Fetch subsequent pages until there are no more pages
  while (shouldFetchNextPage) {
    // Fetch the next page of data
    // eslint-disable-next-line no-await-in-loop
    response = await response?.getNextPage();

    // Break the loop if there's an error fetching the next page
    if (response?.error) {
      break;
    }

    // Update the flag to determine whether to continue fetching
    shouldFetchNextPage = response?.hasNextPage || false;

    // Store the data from the current page
    allData.push(response?.data);
  }

  return allData;
}

export default fetchAllPagesQuery
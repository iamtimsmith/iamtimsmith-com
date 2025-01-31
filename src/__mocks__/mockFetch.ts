/**
 * A mock fetch function that returns a promise that resolves to an object
 * @argument status - The status code of the response
 * @argument data - The data to be returned in the response
 */
export const mockFetch = (status = 200, data = {}) =>
  jest.fn().mockResolvedValue({
    status,
    json: async () => data,
  });

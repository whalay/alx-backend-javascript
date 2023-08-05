// Create a new instance of WeakMap
export const weakMap = new WeakMap();

// Define the queryAPI function
export function queryAPI(endpoint) {
  // Initialize query count to 0 if not already set
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  // Increment the query count
  const queryCount = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, queryCount);

  // Check if query count is >= 5 and throw an error if so
  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }

  // Simulate API query and return response
  return `Response from ${endpoint.protocol}://${endpoint.name}`;
}

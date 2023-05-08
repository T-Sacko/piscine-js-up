async function getJSON(path, params = {}) {
    // Construct the URL with the path and query parameters
    const url = new URL(path);
    url.search = new URLSearchParams(params).toString();
  
    // Fetch the data from the URL
    const response = await fetch(url);
  
    // Check if the response is OK, otherwise throw an error with the status text
    if (!response.ok) {
      throw new Error(response.statusText);
    }
  
    // Read and parse the JSON response body
    const jsonResponse = await response.json();
  
    // Check if the parsed object contains the 'data' or 'error' property
    if (jsonResponse.hasOwnProperty('data')) {
      return jsonResponse.data;
    } else if (jsonResponse.hasOwnProperty('error')) {
      throw new Error(jsonResponse.error);
    } else {
      throw new Error('Invalid response format');
    }
  }
  
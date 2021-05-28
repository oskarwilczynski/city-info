const fetchData = async (url, handleError) => {
  try {
    const result = await fetch(url);

    if (!result.ok) {
      throw Error(response.statusText);
    }

    return result.json();
  } catch(error) {
    handleError(error);
  }
}

export default fetchData;
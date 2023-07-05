export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "dddbc80fe1mshad106fa9be6819ap1d8f30jsn1e0962abb815",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "dddbc80fe1mshad106fa9be6819ap1d8f30jsn1e0962abb815",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

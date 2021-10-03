const baseUrl = 'http://localhost:4000/api';

export const fetcher = async (query: any, _callback?: Function) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(query()),
  });

  const data = await response.json();

  return data;
};

export const GetPopularFilm = async (
  resource: string,
  query: string,
  page: any
) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}&${page}&api_key=107fb95a173fbb9eacbb4fb1d70b1302`
  );
  const popularFilm = await res.json();

  return popularFilm;
};

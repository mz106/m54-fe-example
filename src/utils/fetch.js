export const addBook = async (title, author, genre) => {
  const response = await fetch("http://localhost:5002/books/addBook", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      author: author,
      genre: genre,
    }),
  });

  const data = await response.json();
  console.log("data in addBook fetch: ", data);

  return data;
};

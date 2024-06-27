export const getPosts = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const options = {
    method: "GET",
  };

  const response = await fetch(url, options);

  return response.json();
};

export default getPosts;

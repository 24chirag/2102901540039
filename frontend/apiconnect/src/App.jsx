import { getPosts } from "./api";
import { useState, useEffect } from "react";
import PostCard from "./components/Postcard";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  }, []);
  return (
    <>
      <h1>connect api to test api and rendered on screen</h1>
      <h2>this api consist of title and body only</h2>
      {data ? (
        data.map((post) => <PostCard title={post.title} body={post.body} />)
      ) : (
        <h1>no data</h1>
      )}
    </>
  );
}

export default App;

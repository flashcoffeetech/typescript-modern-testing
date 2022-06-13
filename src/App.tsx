import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

interface Post {
  id: number;
  title: string;
  body: string;
}

function App() {
  const [posts, setPosts] = useState<Array<Post>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const fetchPosts = async () => {
    setLoading(true);
    setErrorMessage("");
    setPosts([]);
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log("SAMPLE MSW DATA 2", response);
    if (response.ok) {
      const json = await response.json();
      console.log("SAMPLE MSW DATA", json);
      setPosts(json);
      setLoading(false);
      setErrorMessage("");
    } else {
      setErrorMessage(response.statusText);
      setLoading(false);
    }
  };

  const clearPosts = () => {
    setPosts([]);
  };

  return (
    <div className="App">
      <Header title="Modern React Testing" />
      <main className="App-content">
        <section className="App-buttons">
          <button onClick={fetchPosts} type="button">
            Fetch Posts
          </button>
          <button onClick={clearPosts} type="button">
            Clear Posts
          </button>
        </section>
        {loading && <p aria-label="loading">Loading</p>}
        {errorMessage && <p>{errorMessage}</p>}
        {posts.map((post) => (
          <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </article>
        ))}
      </main>
    </div>
  );
}

export default App;

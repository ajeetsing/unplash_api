import './App.css';
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search";
import Axios from "axios";
import ImageGallary from "./components/ImageGallary";

export default function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        // making a axios request
        const { data } = await Axios.get(
          "https://api.unsplash.com/search/photos",
          {
            params: { query },
            headers: {
              Authorization: `Client-ID l2nltLSyMNOCGYij3TkpNJfxW4M-cN8QB9xlGhYNqmM`
            }
          }
        );
        setItems(data.results);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, [query]);

  return (
    <div className="App">
      <Search getQuery={(query) => setQuery(query)} />
      <ImageGallary loading={loading} items={items} />
    </div>
  );
}

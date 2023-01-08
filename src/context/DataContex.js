import { createContext, useState, useEffect } from "react";
//Custom Hooks
import useAxiosFetch from "../hooks/useAxiosFetch";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  // || STATES || \\
  const [posts, setPosts] = useState([]);

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const { data, fetchError, isLoading } = useAxiosFetch(
    "http://localhost:3500/posts"
  );

  // || EFFECTS || \\

  useEffect(() => {
    setPosts(data);
  }, [data]);

  //Filter Search
  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  // || EVENT HANDLERS || \\

  return (
    <DataContext.Provider
      value={{
        search,
        setSearch,
        isLoading,
        fetchError,
        posts,
        setPosts,
        searchResults,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;

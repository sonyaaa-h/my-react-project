import { useEffect, useState } from "react";
import { fetchArticlesWithTopic } from "../articles-api.js";
import ArticleList from "./ArticleList/ArticleList";
import { SearchForm } from "./SearchForm/SearchForm.jsx";

const App = () => {
  // 1. Оголошуємо стан
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   async function fetchArticles() {
  //     try {
  //       // 1. Встановлюємо індикатор в true перед запитом
  //       setLoading(true);
  //       const data = await fetchArticlesWithTopic("react");
  //       setArticles(data);
  //     } catch (error) {
  //       // Тут будемо обробляти помилку
  //       setError(true);
  //     } finally {
  //       // 2. Встановлюємо індикатор в false після запиту
  //       setLoading(false);
  //     }
  //   }

  //   fetchArticles();
  // }, []);

  const handleSearch = async (topic) => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {/* {loading && <Loader />}
      {error && <Error />} */}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
};

export default App;

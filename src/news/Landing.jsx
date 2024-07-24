import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ArticleList from "./ArticleList";
import Footer from "./Footer";

const Landing = () => {
  const [articles, setArticles] = useState([]);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const [source, setSource] = useState("");
  const [loadingLoadMore, setLoadingLoadMore] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSearch(params.get("search") || "");
    setSource(params.get("source") || "all");
    setLimit(10); // Reset limit when search/source changes

    const fetchArticles = async () => {
      const res = await axios.get(
        `https://api.spaceflightnewsapi.net/v4/articles?limit=${limit}&search=${search}&news_site=${source}`
      );
      setArticles(res.data.results);
    };

    fetchArticles();
  }, [location.search, limit]);

  const loadMore = () => {
    setLimit(limit + 10);
    setLoadingLoadMore(true);
    setLoadingLoadMore(false);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (source) params.set("source", source);

    navigate(`/?${params.toString()}`);
    setLimit(10); // Reset limit
  };

  return (
    <>
      <Navbar />
      <HeroSection
        search={search}
        setSearch={setSearch}
        source={source}
        setSource={setSource}
        handleSearch={handleSearch}
      />
      <ArticleList articles={articles} />
      <div className="load-more d-flex justify-content-center">
        <button
          onClick={loadMore}
          className={`btn btn-outline-primary rounded my-4 ${
            loadingLoadMore ? "disabled" : ""
          }`}
        >
          Load More
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Landing;

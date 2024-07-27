import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSection from "./HeroSection";
import ArticleList from "./ArticleList";
import Footer from "../components/Footer";
import Pagination from "./Pagination"; // Impor Pagination
import api from "../helpers/api";
import Layout from "../components/Layout";
import { useLoading } from "../contex/LoadingContext.js";
import useDocument from "../helpers/useDocument.js";

const Landing = () => {
  const [articles, setArticles] = useState([]);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const [source, setSource] = useState("");
  const [sites, setSites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const { showLoading, hideLoading } = useLoading();
  useDocument("Home - MultiNews");
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSearch(params.get("search") || "");
    setSource(params.get("source") || "");
    setCurrentPage(parseInt(params.get("page")) || 1);

    const fetchArticles = async () => {
      showLoading(true);
      const offset = currentPage * limit - limit;
      const res = await api.get(
        `/articles?limit=${limit}&search=${search}&news_site=${source}&offset=${offset}`
      );
      const res2 = await api.get(`/info`);
      setSites(res2.data.news_sites);
      setArticles(res.data.results);
      setTotalPages(Math.ceil(parseInt(res.data.count) / limit) || 1);
      hideLoading(false);
    };

    fetchArticles();
  }, [location.search, limit, currentPage]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (source) params.set("source", source);
    params.set("page", 1);

    navigate(`/?${params.toString()}`);
    setLimit(10);
    setCurrentPage(1);
  };
  const params = new URLSearchParams(location.search);

  return (
    <Layout navLight bgLight>
      <HeroSection
        search={search}
        setSearch={setSearch}
        source={source}
        setSource={setSource}
        handleSearch={handleSearch}
        searchKey={params.get("search")}
        sites={sites}
      />
      <ArticleList articles={articles} />
      {totalPages > 0 && (
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      )}
    </Layout>
  );
};

export default Landing;

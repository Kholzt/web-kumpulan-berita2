import { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../helpers/api";
import Layout from "../../components/Layout";
import { useLoading } from "../../contex/LoadingContext";
export default function Detail() {
  const { slug } = useParams();
  const [article, setArticle] = useState({});
  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchArticle = async () => {
      showLoading();
      const res = await api.get(`/articles/${slug}`);
      setArticle(res.data);
      hideLoading();
    };
    fetchArticle();
  }, []);
  const date = article.published_at
    ? new Date(article.published_at)
    : new Date();
  const formattedDate = date.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  useEffect(() => {
    if (article.title) {
      document.title = `${article.title} - MultiNews`;
    }
  }, [article]);
  return (
    <Layout>
      <div className="pt-5 mt-5">
        <div className="container">
          <div className="bg-white px-md-5 pt-md-2 rounded">
            <h1>{article.title}</h1>
            <div className="d-flex mb-3 justify-content-between flex-column">
              <span>
                {" "}
                {article.news_site} on {formattedDate}{" "}
              </span>
              {/* <span>
                <i className="fa fa-globe"></i> Source : {article.news_site}
              </span>
              <span>
                <i className="fa-regular fa-clock"></i> Date : {formattedDate}
              </span> */}
            </div>
            <figure>
              <img
                className="aspect-lanscape rounded"
                src={article.image_url}
                alt=""
              />
            </figure>
            <p>{article.summary}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

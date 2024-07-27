import React from "react";
import { Link } from "react-router-dom";

const ArticleList = ({ articles }) => (
  <section className="news-section">
    <div className="container">
      <div className="bg-white rounded position-relative articles">
        <div className="p-4 gy-4 row">
          {articles.length ? (
            articles.map((article, index) => {
              const date = article.published_at
                ? new Date(article.published_at)
                : new Date();
              const formattedDate = date.toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });
              return (
                <div className="col-md-4 col-sm-6 col-12 mb-2" key={index}>
                  <article className="bg-white rounded overflow-hidden">
                    <Link to={`/article/${article.id}`}>
                      <figure>
                        <img
                          src={article.image_url}
                          className="rounded"
                          alt="news"
                        />
                      </figure>
                    </Link>
                    <div className="content p-2">
                      <Link
                        className="text-black text-decoration-none"
                        to={`/article/${article.id}`}
                      >
                        <h6>{article.title}</h6>
                      </Link>
                      <p className="text-truncate-3-lines">{article.summary}</p>
                    </div>
                    <footer className="d-flex px-2 justify-content-between">
                      <div>
                        <i className="fa-solid fa-globe"></i>{" "}
                        <small>{article.news_site}</small>
                      </div>
                      <div>
                        <i className="fa-regular fa-clock"></i>{" "}
                        <small>{formattedDate}</small>
                      </div>
                    </footer>
                  </article>
                </div>
              );
            })
          ) : (
            <div className="col-12">
              <article className="bg-dark text-white rounded overflow-hidden">
                <figure></figure>
                <div className="content p-2 text-center mb-2 text-capitalize">
                  news not found
                </div>
              </article>
            </div>
          )}
        </div>
      </div>
    </div>
  </section>
);

export default ArticleList;

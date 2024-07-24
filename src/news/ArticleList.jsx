import React from "react";

const ArticleList = ({ articles }) => (
  <section className="news-section">
    <div className="container">
      <div className="bg-white rounded position-relative articles">
        <div className="p-4 gy-4 row">
          {articles.map((article, index) => {
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
                  <figure>
                    <img
                      src={article.image_url}
                      className="rounded"
                      alt="news"
                    />
                  </figure>
                  <div className="content p-2">
                    <h6>{article.title}</h6>
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
          })}
        </div>
      </div>
    </div>
  </section>
);

export default ArticleList;

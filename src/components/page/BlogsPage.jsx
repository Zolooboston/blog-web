import Link from "next/link";
import { useEffect, useState } from "react";
import { ArticleCard } from "../blog-post/ArticleCard";

export const BlogsPage = () => {
  const [articles, setArticles] = useState([]);

  const fetchData = () => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(articles);

  return (
    <div className="flex flex-col items-center w-full">
      {/* <Header /> */}
      <div className="container flex flex-wrap justify-between gap-5 max-w-[1280px]">
        {articles.map((article) => {
          return (
            <Link href={`/blogs/${article.id}`}>
              {" "}
              <ArticleCard article={article} />
            </Link>
          );
        })}
      </div>

      {/* <Footer /> */}
    </div>
  );
};

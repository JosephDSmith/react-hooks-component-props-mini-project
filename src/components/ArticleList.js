import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          minutes={post.minutes}
          date={post.date}
          title={post.title}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;

import articleStyle from "../styles/Article.module.css"

export default function ArticleList({articles}) {
  return (
    <div className={articleStyle.grid}>
        {articles.map((article) => (
            <h3 key={article.id}>{article.title}</h3>
        ))}
    </div>
  )
}

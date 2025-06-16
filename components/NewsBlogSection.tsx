import Image from 'next/image'
import Link from 'next/link'

const newsArticles = [
  {
    image: '/assets/news-1.jpg',
    title: 'Conservación de Especies Nativas',
    description: 'Nuevos proyectos para proteger la flora endémica de Chile.'
  },
  {
    image: '/assets/news-2.jpg',
    title: 'Iniciativas Sustentables',
    description: 'Comunidades locales implementan proyectos verdes.'
  }
]

const blogArticles = [
  {
    image: '/assets/blog-1.png',
    title: 'Guía de Compostaje',
    description: 'Aprende a crear tu propio compost en casa.'
  },
  {
    image: '/assets/blog-2.jpg',
    title: 'Biodiversidad Urbana',
    description: 'Cómo crear espacios verdes en la ciudad.'
  }
]

export default function NewsBlogSection() {
  return (
    <section className="news-blog-section">
      <div className="container">
        <h2>Últimas Noticias y Artículos</h2>
        <div className="content-grid">
          <div className="news-container">
            {newsArticles.map((article, index) => (
              <article key={index} className="content-card">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={200}
                />
                <div className="card-content">
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <Link href="#" className="read-more">Leer más</Link>
                </div>
              </article>
            ))}
          </div>

          <div className="blog-container">
            {blogArticles.map((article, index) => (
              <article key={index} className="content-card">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={200}
                />
                <div className="card-content">
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <Link href="#" className="read-more">Leer más</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
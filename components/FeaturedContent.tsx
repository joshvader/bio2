import Image from 'next/image'
import Link from 'next/link'

export default function FeaturedContent() {
  return (
    <section className="featured-content">
      <div className="container">
        <span className="featured-label">Contenido destacado</span>
        <div className="featured-card">
          <div className="featured-image">
            <Image
              src="/assets/featured/chakana.jpg"
              alt="Chakana o Cruz Andina"
              width={624}
              height={400}
            />
          </div>
          <div className="featured-info">
            <div className="category-tag">Arte, Cultura y Patrimonio</div>
            <h2>Chakana o Cruz Andina, el símbolo que recuerda volver a los equilibrios en tiempos de polarización</h2>
            <p>En las sociedades andinas, la Chakana, o Cruz Andina, es un símbolo muy importante, representante de la unión entre lo bajo y lo alto, la tierra y el sol, y la conexión del ser humano con lo superior junto a su equilibrio ancestral. Durante el paso de los años, ha pasado por muchos cambios y desafíos, causando un cambio exponencial en su significado.</p>
            <Link href="#" className="read-more">Leer artículo</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
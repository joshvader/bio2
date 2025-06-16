import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    image: 'https://images.unsplash.com/photo-1584267388853-64a40ec6743e?auto=format&fit=crop&w=400&q=80',
    title: 'Kit de Jardinería',
    price: '$12.000 CLP'
  },
  {
    image: 'https://images.unsplash.com/photo-1622234056455-9f1d4510fc38?auto=format&fit=crop&w=400&q=80',
    title: 'Shampoo Natural',
    price: '$6.500 CLP'
  },
  {
    image: 'https://images.unsplash.com/photo-1582462852231-2f46c07a798f?auto=format&fit=crop&w=400&q=80',
    title: 'Compostera Doméstica',
    price: '$25.000 CLP'
  }
]

export default function Marketplace() {
  return (
    <>
      <Navbar />
      <main>
        <section className="text-center py-16 px-8">
          <i className="fas fa-store text-6xl text-primary mb-4"></i>
          <h2 className="text-4xl font-bold mb-4 text-white">Marketplace Verde</h2>
          <p className="text-xl text-white mb-8">Explora productos y servicios amigables con el medio ambiente.</p>
          <div className="flex justify-center gap-4">
            <Link href="#" className="btn btn-primary">
              <i className="fas fa-filter mr-2"></i> Categoría
            </Link>
            <Link href="#" className="btn btn-secondary">
              <i className="fas fa-map-marker-alt mr-2"></i> Región
            </Link>
          </div>
        </section>

        <section className="product-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h4 className="text-lg font-semibold mb-2">{product.title}</h4>
              <p className="text-gray-600 mb-4">{product.price}</p>
              <Link href="#" className="btn btn-primary">Ver más</Link>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  )
}
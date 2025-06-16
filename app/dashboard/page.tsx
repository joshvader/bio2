import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const dashboardCards = [
  {
    href: '/mis-productos',
    icon: 'fas fa-box',
    title: 'Mis Productos',
    description: 'Administra tus publicaciones en el Marketplace.'
  },
  {
    href: '/perfil',
    icon: 'fas fa-user-cog',
    title: 'Perfil',
    description: 'Edita tu información y preferencias de cuenta.'
  },
  {
    href: '/campanias',
    icon: 'fas fa-leaf',
    title: 'Mis Campañas',
    description: 'Visualiza y gestiona tus iniciativas verdes.'
  },
  {
    href: '/suscripcion',
    icon: 'fas fa-star',
    title: 'Suscripción',
    description: 'Revisa y actualiza tu membresía actual.'
  }
]

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <main>
        <div className="dashboard">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">Bienvenido/a a tu Panel</h2>
          <div className="dashboard-cards">
            {dashboardCards.map((card, index) => (
              <Link key={index} href={card.href} className="dash-card group">
                <i className={`${card.icon} text-4xl text-primary mb-4 group-hover:scale-110 transition-transform duration-200`}></i>
                <h4 className="text-lg font-semibold mb-2">{card.title}</h4>
                <p className="text-gray-600">{card.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
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
          <h2>Bienvenido/a a tu Panel</h2>
          <div className="dashboard-cards">
            {dashboardCards.map((card, index) => (
              <Link key={index} href={card.href} className="dash-card">
                <i className={card.icon}></i>
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      
      <style jsx>{`
        .dashboard {
          max-width: 1000px;
          margin: 3rem auto;
          padding: 2rem;
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.08);
        }
        .dashboard h2 {
          text-align: center;
          margin-bottom: 2rem;
        }
        .dashboard-cards {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          justify-content: center;
        }
        .dash-card {
          background: #f9f9f9;
          padding: 1.5rem;
          border-radius: 15px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.06);
          text-align: center;
          width: 250px;
          transition: transform 0.2s ease;
          color: inherit;
          text-decoration: none;
          display: block;
        }
        .dash-card:hover {
          transform: translateY(-4px);
        }
        .dash-card i {
          font-size: 2rem;
          color: var(--primary, #4caf50);
          margin-bottom: 0.5rem;
        }
        .dash-card h4 {
          margin-top: 0.5rem;
        }
      `}</style>
    </>
  )
}
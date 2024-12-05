import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function RootPage() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    <Footer />
    </>
  )
}

export default RootPage

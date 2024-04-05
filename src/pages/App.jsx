import './styles.css'
import Header from '../components/Header'
import CTACard from '../components/CallToActionCard'
import Features from '../components/Features'
import ProductiveCard from '../components/ProductiveCard'
import Team from '../components/Team'
import EarlyAccess from '../components/EarlyAccess'
import Footer from '../components/Footer'

/* If you are looking my app, it's done all componentized just for studyes purpose, don't need to do like that */
const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <CTACard />
      <Features />
      <ProductiveCard />
      <Team />
      <EarlyAccess />
      <Footer />
    </div>
  )
}

export default App

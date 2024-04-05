import './styles.css';
import Illustration from './../../images/illustration-intro.png'

const CTACard = () => {
  return (
    <div className='cta-card-wrapper'>
      <img
        src={Illustration}
        className='illustration-intro'
        alt=''
      />
      <h2 className="cta-title">
        All your files in one secure location, acessible anywhere.
      </h2>
      <p className="description cta-description">
      Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.
      </p>
      <button className="gradient cta-btn" >Get Started</button>
    </div>
  )
}

export default CTACard

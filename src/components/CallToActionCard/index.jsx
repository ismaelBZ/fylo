import './styles.css';
import Illustration from './../../images/illustration-intro.png'
import BackgroundImage from '../../images/bg-curvy-desktop.svg'

const CTACard = () => {
  return (
    <div className='cta-card-wrapper'>
      <div className="clearfix">
        <img
          src={Illustration}
          className='cta-illustration'
          alt=''
        />
        <div className="cta-text-wrapper">
          <h2 className="cta-title">
            All your files in one secure location, acessible anywhere.
          </h2>
          <p className="description cta-description">
          Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.
          </p>
          <button className="gradient cta-btn" >Get Started</button>
        </div>
      </div>
      <div className="background-image-wrapper">
        <img className="background-image" src={BackgroundImage} alt=" "></img>
        <div className="background-dark-color"></div>
      </div>
    </div>
  )
}

export default CTACard

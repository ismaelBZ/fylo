import './styles.css'
import Logo from './../../images/logo.svg'
import Location from '../../images/icon-location.svg'
import Phone from '../../images/icon-phone.svg'
import Email from '../../images/icon-email.svg'
import Facebook from '../../images/Facebook.svg'
import Twitter from '../../images/Twitter.svg'
import Instagram from '../../images/Instagram.svg'


const Footer = () => {
  return (
    <footer>
      <img
        src={Logo}
        className='footer-logo'
        alt='FyLo'
      />
      <div className='f-flex footer-location'>
        <img
          src={Location}
          alt='Location'
          className='footer-location-icon'
        />
        <p className="footer-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua
        </p>
      </div>
      <div>
        <div className='f-flex '>
          <img
            src={Phone}
            alt='Phone'
          />
          <p>+1-543-123-4567</p>
        </div>
        <div className='f-flex'>
          <img
            src={Email}
            alt='Email'
          />
          <p>example@fylo.com</p>
        </div>
      </div>
      <div>
        <h2 className="footer-title">About Us</h2>
        <ul>
          <li>
            <a href=' ' className="footer-link">Jobs</a>
          </li>
          <li>
            <a href=' ' className="footer-link">Press</a>
          </li>
          <li>
            <a href=' ' className="footer-link">Blog</a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="footer-title">Contact Us</h2>
        <ul>
          <li>
            <a href=' ' className="footer-link">Terms</a>
          </li>
          <li>
            <a href=' ' className="footer-link">Privacy</a>
          </li>
        </ul>
      </div>
      <div className='footer-social-media'>
        <ul className="footer-sm-links-wrapper">
          <li>
            <a href=' '>
              <img
                src={Facebook}
                alt='Facebook'
              />
            </a>
          </li>
          <li>
            <a href=' '>
              <img
                src={Twitter}
                alt='Twitter'
              />
            </a>
          </li>
          <li>
            <a href=' '>
              <img
                src={Instagram}
                alt='Instagram'
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer

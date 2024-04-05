import Logo from './../../images/logo.svg'
import './styles.css'

const Header = () => {
  return (
    <header>
      <h1>
        <img
          src={Logo}
          className='header-logo'
          alt='Fylo'
        />
      </h1>
      <nav>
        <ul className='nav-items'>
          <li>
            <a
              className='nav-link'
              href=' '
            >
              Features
            </a>
          </li>
          <li>
            <a
              className='nav-link'
              href=' '
            >
              Team
            </a>
          </li>
          <li>
            <a
              className='nav-link'
              href=' '
            >
              Sign In
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

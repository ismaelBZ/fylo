import './styles.css'

const Feature = ({ imgSrc, title, description }) => {
  return (
    <div className="feature">
      <img
        src={imgSrc}
        alt=''
        className='feature-image'
      />
      <h2 className='component-title feature-title'>{title}</h2>
      <p className='description feature-description'>{description}</p>
    </div>
  )
}

export { Feature }

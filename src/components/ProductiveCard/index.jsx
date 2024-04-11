import './styles.css';
import Arrow from './../../images/icon-arrow.svg';
import TeamImage from './../../images/illustration-stay-productive.png'

const ProductiveCard = () => {
  return (
    <div className="productive-wrapper">
      <div>
        <img className="productive-team-img"src={TeamImage} alt="" srcset="" />
      </div>
      <div className="productive-text-wrapper">
        <h2 className="productive-title">Stay productive, wherever you are</h2>
        <p className="description productive-text">Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
        <p className="description productive-text">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
        <a className="productive-link" href=" ">See how Fylo works <span><img src={Arrow} alt=""/></span></a>
      </div>
    </div>
  )
}

export default ProductiveCard;
import './styles.css';

const MemberCard = ({ comment, imgSrc, name, role }) => {
  return (
    <div className='member-card-wrapper'>
      <p className='description member-comment'>{comment}</p>
      <div className="member-info-wrapper">
        <img
          src={imgSrc}
          className="member-img"
          alt=''
        />
        <div className="member-info">
          <h2 className="member-name">{name}</h2>
          <p className="member-role">{role}</p>
        </div>
      </div>
    </div>
  )
}

export { MemberCard }

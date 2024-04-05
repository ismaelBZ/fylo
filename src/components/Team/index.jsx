import './styles.css';
import {MemberCard} from './MemberCard';
import ProfileA from '../../images/profile-1.jpg';
import ProfileC from '../../images/profile-3.jpg';
import ProfileB from '../../images/profile-2.jpg';
import Quotes from '../../images/bg-quotes.png'

const Team = () => {
  return (
    <div className="team-wrapper">
      <img src={Quotes} className='quotes' alt=' ' />
      <MemberCard 
        comment="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        imgSrc={ProfileA}
        name="Satish Patel"
        role="Founder & CEO, Huddle"
      />
      <MemberCard 
        comment="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        imgSrc={ProfileB}
        name="Bruce McKenzie"
        role="Founder & CEO, Huddle"
      />
      <MemberCard 
        comment="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        imgSrc={ProfileC}
        name="Iva Boyd"
        role="Founder & CEO, Huddle"
      />
    </div>
  )
}

export default Team
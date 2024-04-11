import './styles.css'

const EarlyAccess = () => {
  return(
    <div className="early-access-wrapper">
      <h2 className="component-title early-access-title">Get early access today</h2>
      <p className="description early-text">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
      <form className="early-access-form">
        <input type="email" placeholder="email@example.com" />
        <button type="submit">Get Startet For Free</button>
      </form>
    </div>
  )
}

export default EarlyAccess;
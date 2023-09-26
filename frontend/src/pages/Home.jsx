import { Link } from "react-router-dom"
import {FaQuestionCircle, FaTicketAlt} from 'react-icons/fa'

function Home() {
  return (
    <>
      <section className="heading">
        <h1>What do you need help with?</h1>
        <p>Choose an option below</p>
      </section>

      <Link to='/new-ticket' className="btn btn-reverse btn-block">
        <FaQuestionCircle /> New Ticket
      </Link>

      <Link to='/tickets' className="btn btn-block">
        <FaTicketAlt /> My Ticket
      </Link>
    </>
  )
}

export default Home
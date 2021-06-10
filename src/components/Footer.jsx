import { withRouter } from 'react-router-dom'

const Footer = ({ location }) => (
    <div>WE ARE ON {location.pathname}</div>
)

export default withRouter(Footer)
// withRouter enriches any component with the router props
// history, location and match
// even outside of a Route component
// but you still have to be inside a Router
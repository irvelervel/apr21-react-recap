const Detail = ({ title, history }) => (
    <h3 onClick={() => history.goBack()}> {title}</h3 >
)

export default Detail
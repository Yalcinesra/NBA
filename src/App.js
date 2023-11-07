
import CardContainer from "./components/CardContainer"
import Header from "./components/Header"
import Container from "react-bootstrap/Container"
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <Container className="text-center mt-4">
      <Header/>
      <CardContainer/>
    </Container>
  )
}

export default App

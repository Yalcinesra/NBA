import CardContainer from "./components/CardContainer"
import Header from "./components/Header"
import "bootstrap/dist/css/bootstrap.min.css";
import {data} from "./helper/data"
import "./components/css/cardContainer.css"



const App = () => {
  return (
    <div className="bg-danger arka">
    <Header/>
      <CardContainer data={data}/>
    </div>
  )
}

export default App

//In this project we're using spoonacular API
import { useEffect, useState } from "react";
import Search from "./Components/Search"
import FoodList from "./Components/FoodList";
import Nav from "./Components/Nav";
import './App.css';
import Container from "./Components/Container";
import InnerContainer from "./Components/InnerContainer";
import FoodDetails from './Components/FoodDetails';
//(contains images and receipe details of plenty of food items)
function App() {

  const [foodData, setFoodData] = useState([])
  const [foodId, setFoodId] = useState("663136")

  return (
    <div className="App">
      <Nav />
      <Search foodData = {foodData} setFoodData = {setFoodData}/>
      <Container>
        <InnerContainer>
          <FoodList setFoodId={setFoodId} foodData={foodData}/>
        </InnerContainer>
        <InnerContainer>
            <FoodDetails foodId={foodId}/>
        </InnerContainer>
      </Container>
      
    </div>
  );
}

export default App

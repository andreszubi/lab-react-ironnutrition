import React from 'react';
import {v4 as uuidv4} from 'uuid';
import { useState } from 'react';

import foodsJSON from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import './App.css';

import { Row, Divider, Button } from 'antd';

function App() {
  const [foodList, setFoodList] = useState(
    foodsJSON.map((currentFood) => ({ ...currentFood, tempId: uuidv4() }))
  );

  const deleteItem = (tempId) => {
    setFoodList(foodList.filter((food) => food.tempId !== tempId));
  };


  
  return (
    <div className="App">
      
      <AddFoodForm foodList={foodList} setFoodList={setFoodList} />
    

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row gutter={[8, 8]}>
        {/* Render the list of Food Box components here */}

        {foodList.map((food) => (
        <FoodBox key={food.tempId} food={food} deleteItem={deleteItem} /> 
        ))}
      </Row>
    </div>
  );
}


export default App;




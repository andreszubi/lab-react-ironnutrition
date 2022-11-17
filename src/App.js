import React from 'react';
import {v4 as uuidv4} from 'uuid';
import { useState } from 'react';

import foodsJSON from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import './App.css';
import Search from './components/Search';

import { Row, Divider, Button } from 'antd';

function App() {
  const [foodList, setFoodList] = useState(
    foodsJSON.map((currentFood) => ({ ...currentFood, tempId: uuidv4() }))
  );

  const deleteItem = (tempId) => {
    setFoodList(foodList.filter((food) => food.tempId !== tempId));
  };

const [query, setQuery] = useState('');

// hide add food form
const [showForm, setShowForm] = useState(false);

  
  return (
    <div className="App">
      
      <AddFoodForm foodList={foodList} setFoodList={setFoodList} />
    

      <Button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide' : 'Show'} Form
      </Button>


      {/* Display Search component here */}
      <Search query={query} setQuery={setQuery} />


      <Divider>Food List</Divider>

      <Row gutter={[8, 8]}>
        
      {foodList
          .filter((food) =>
            food.name.toLowerCase().includes(query.toLowerCase())
          )
          .map((food) => (
            <FoodBox key={food.tempId} food={food} deleteItem={deleteItem} />
          ))}
      </Row>
    </div>
  );
}


export default App;




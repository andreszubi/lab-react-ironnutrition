import React from 'react';
import {v4 as uuidv4} from 'uuid';
import { useState } from 'react';

import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import './App.css';

import { Row, Divider, Button } from 'antd';

function App() {
  const [foodList, setFoodList] = useState(foods);
  
  return (
    <div className="App">
      {/* Display Add Food component here */}
      <AddFoodForm foodList={foodList} setFoodList={setFoodList} />
    

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}

        {foodList.map((food) => (
          <div key={uuidv4()}>
            <FoodBox food={food} />
          </div>
        ))}
      </Row>
    </div>
  );
}


export default App;




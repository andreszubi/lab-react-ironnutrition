import { useState } from 'react';
import { Divider, Input } from 'antd';
import {v4 as uuidv4} from 'uuid';

//Create a new food form input entry and add it to the list of existing foods array


const AddFoodForm = ({ foodList, setFoodList }) => {
  const [newName, setNewName] = useState('');
  const [newImage, setNewImage] = useState('');
  const [newCalories, setNewCalories] = useState(0);
  const [newServings, setNewServings] = useState(0);

    const handleSubmit = (event) => {
      event.preventDefault();
      setFoodList([
        ...foodList,
        {
            name: newName,
            image: newImage,
            calories: newCalories,
            servings: newServings,
            tempId: uuidv4(),
          },
        ]);
        setNewName('');
        setNewImage('');
        setNewCalories(0);
        setNewServings(0);
      };

    return (
        <form onSubmit={handleSubmit}  style={{ width: 230,height: 300, margin: 10 }}>
          <Divider>Add Food Entry</Divider>
      <label>Name</label>
      <Input
        value={newName}
        type="text"
        onChange={(event) => setNewName(event.target.value)}
      />
      <label>Image</label>
      <Input
        value={newImage}
        type="text"
        onChange={(event) => setNewImage(event.target.value)}
      />
      <label>Calories</label>
      <Input
        value={newCalories}
        type="number"
        onChange={(event) => setNewCalories(parseInt(event.target.value))}
      />
      <label>Servings</label>
      <Input
        value={newServings}
        type="number"
        onChange={(event) => setNewServings(parseInt(event.target.value))}
      />
      <br></br>
        <br></br>
      <button type="submit">Create</button>
    </form>
  );
};
export default AddFoodForm;
import { useState } from 'react';
import { Divider, Input } from 'antd';

//Create a new food form input entry and add it to the list of existing foods array


const AddFoodForm = ({ addFood }) => {
    const [name, setName] = useState('');
    const [calories, setCalories] = useState(0);
    const [image, setImage] = useState('');
    const [servings, setServings] = useState(0);

    const handleSubmit = event => {
        event.preventDefault();
        addFood({ name, calories, image, servings });
        setName('');
        setCalories(0);
        setImage('');
        setServings(0);
    };

    return (
        <form onSubmit={handleSubmit}  style={{ width: 350,height: 300, margin: 10 }}>
            <Divider orientation="center">Add a new food</Divider>
            <label>Name</label>
            <Input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <label>Image</label>
            <Input
                type="text"
                name="image"
                placeholder="Image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
            <label>Calories</label>
            <Input
                type="number"
                name="calories"
                placeholder="Calories"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
            />

            <label>Servings</label>
            <Input
                type="number"
                name="servings"
                placeholder="Servings"
                value={servings}
                onChange={(e) => setServings(e.target.value)}
            />
            
            <Divider />
            <button type="submit">Add food</button>
        </form>
    );
};







export default AddFoodForm;
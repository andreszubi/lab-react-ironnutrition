import { Card,Col, Button } from "antd";



function FoodBox({food, deleteItem}) {
    return (
        <Col>
            <Card
                title={food.name}
                style={{ width: 230,height: 300, margin: 10 }} >
                <img src={food.image} alt="example"  height={60} />
            
                <p>Calories: {food.calories}</p>
                <p>Servings: {food.servings}</p>
                <p>Total Calories: {food.servings * food.calories}</p>

                <Button onClick={() => deleteItem(food.tempId)} type="primary">Delete</Button>

            </Card>
        </Col>
    );
}

export default FoodBox;
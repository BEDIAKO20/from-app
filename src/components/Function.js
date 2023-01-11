import React from 'react'
import { useState } from 'react'
import { Card,Button } from 'react-bootstrap';

function Function() {
    const[count,setCount] = useState(0);

    const handleIncreaseCount = () => {
        setCount(count+1);
    }
    const handleDecreaseCount =() => {
        setCount(count-1);
    }
  return (
    <div>
        <Card>
        <Card.Body>
        <h1>Counter :{count}</h1>
        <Button  variant='info' onClick={handleIncreaseCount}>Increase</Button>{' '}
        <Button variant='warning' onClick={handleDecreaseCount}>Decrease</Button>
        </Card.Body>
        </Card>
    </div>
  )
}

export default Function
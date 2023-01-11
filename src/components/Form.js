import React, { Component } from 'react'
import { Card,Button } from 'react-bootstrap';

export default class Form extends Component {

constructor(props){
    super(props);

    this.state ={
        count: 0
        
    }
    // this.handleIncreaseCount =this.handleIncreaseCount.bind(this)
}

handleIncreaseCount=(e)=>{
e.preventDefault();
this.setState({count:this.state.count+1});

}
handleDecreaseCount=(e)=>{
  e.preventDefault();
  this.setState({count:this.state.count-1});
}

  render() {
    return (
      <div>
        <Card >
          <Card.Body>
          <h1>Counter :{this.state.count}</h1>
        <Button variant='danger' onClick={this.handleIncreaseCount}>Increase</Button>{' '}
        <Button variant='success' onClick={this.handleDecreaseCount}>Decrease</Button>{''}
          </Card.Body>
       
        </Card>
      </div>
      
      
    )
  }
}

import React from 'react'
import {Pie} from 'react-chartjs-2';

class ChartDemo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      labels: ['Bike', 'Car', 'Scooter'],
      datasets: [{
        data: [2000, 4000, 2637],
        backgroundColor: ['red', 'blue', 'green']
      }]
    }
    
  }

 

  render() {

 function handleClick(e) {
   e.preventDefault();
   console.log("click");
 }

    return (
      <div>
        <Pie
         data = {{
           labels: this.state.labels,
           datasets: this.state.datasets
         }}
         height = '90%'
         />
         <br />
      </div>
    )
  }
}

export default ChartDemo;
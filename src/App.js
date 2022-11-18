import './App.css';
import Details from './Details';

function App() {
  let data=[
    {
      name:"Durai",
      email:"durai4@gmail.com",
      mobile:"9876543210"
    },
    {
      name:"rajesh",
      email:"rajesh@gmail.com",
      mobile:"8976543210"
    },
    {
      name:"suresh",
      email:"suresh@gmail.com",
      mobile:"7244321409"
    }
  ]
  return <>
    <Details data={data}/>
  </>
 
}

export default App;

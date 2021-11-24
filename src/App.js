import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import CustomForm from './components/CustomForm';
import AddInput from './components/AddInput';
import mockData from './mockData.json';
import './App.css'

function App() {
  const [data, setData] = useState(mockData);

  const addDynamicInput = () => {
    setData([...data, {
      "name": "family name",
      "lable": "family name",
      "type": "string"
    }]);
  }
  
  return (
    <>
    <Container>
      <Row><h1>Custom  dynamic Form</h1></Row>
      <CustomForm data={data}/>
      <AddInput setData={addDynamicInput}/>
    </Container>
    </>
  );
}

export default App;

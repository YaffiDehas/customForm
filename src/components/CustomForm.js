import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Row, Col, Container } from 'react-bootstrap';
import {renderTextField, radioButton, renderSelectField, renderCheckbox} from './Inputs';

const CustomForm = props => {
  const { data } = props
  return (
    <Container>
    <form>
      <Row>
      {data && data.map((item, index) => {
          switch(item.type) {
            case 'string':
                return <Col key={index}><Field key={index} name={item.name} component={renderTextField} label={item.lable}/></Col>;
            case 'radio':
              return <Col key={index}><Field key={index} name={item.name} component={radioButton} label={item.lable}/></Col>;
            case 'select':
                return <Col key={index}><Field key={index} name={item.name} component={renderSelectField} label={item.lable}/></Col>;
            case 'checkbox':
                return <Col key={index}><Field key={index} name={item.name} component={renderCheckbox} label={item.lable}/></Col>;
            default:
              return <Col key={index}><Field key={index} name={item.name} component={renderTextField} label={item.lable} /></Col>;
          }
        }) }
        </Row>
    </form>
    </Container>
  )
}

export default reduxForm({
  form: 'CustomForm'
})(CustomForm)
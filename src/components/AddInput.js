import React from 'react';
import Button from 'react-bootstrap/Button';

const AddInput =props => {
    return (
        <Button variant="primary" onClick={() => props.setData()}>Add dynmic Input Text</Button>
    )
}
export default AddInput;

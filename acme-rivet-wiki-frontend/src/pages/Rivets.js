import React, { Component } from 'react';
import {
  Col,
  ListGroupItem,
  ListGroup,
  Row
} from 'react-bootstrap'
import App from '../App.js';

class Rivets extends Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
        <ListGroup>
            {this.props.rivets.map((rivet, index) =>{
              return (
                <ListGroupItem
                  key={index}
                  header={
                    <h4>
                      <span className='rivet-name'>
                        {rivet.name}
                      </span>
                       <small className='rivet-size'>{rivet.size} years old</small>
                    </h4>
                  }>
                  <span className='rivet-material'>
                    {rivet.material}
                  </span>
                </ListGroupItem>
              )
            })}
          </ListGroup>

        </Col>
      </Row>
    );
  }
}

export default Rivets;

import React, { Component } from 'react';
import {
    Alert,
    Button,
    Col,
    ControlLabel,
    FormGroup,
    FormControl,
    HelpBlock,
    Row
} from 'react-bootstrap'



class NewRivet extends Component {
    constructor(props){
        super(props)
        this.state = {
            form: {
                name: '',
                size: '',
                material:'',
                capacity: '',
                description: ''
            }
        }
    }



  handleChange(event){
      const formState = Object.assign({}, this.state.form)
      formState[event.target.name] = event.target.value
      this.setState({form: formState})
  }

  handleSubmit(){

  }

  errorsFor(attribute){
      var errorString = ""
      if(this.props.errors){
        const errors = this.props.errors.filter(error => error.param === attribute )
        if(errors){
          errorString = errors.map(error => error.msg ).join(", ")
        }
      }
      return errorString === "" ? null : errorString
    }






    render() {
    return (
        <form>
              <Row>
                <Col xs={6}>
                    {this.props.errors &&
                        <Alert bsStyle="danger">
                        Please check the form and try again.
                        </Alert>
                    }
                    </Col>
              </Row>
            <Row>
              <Col xs={6}>
                    <FormGroup
                        id="name-form-group"
                        validationState={this.errorsFor('name') && 'error'}>
                          <ControlLabel id="name">Name</ControlLabel>
                       <FormControl
                          type="text"
                          name="name"
                          onChange={this.handleChange.bind(this)} value={this.state.form.name} / >
                      {this.errorsFor('name') &&
                        <HelpBlock id="name-help-block">{this.errorsFor('name')}</HelpBlock>
                      }

                    </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col xs={6}>
                <FormGroup
                    id="size-form-group"
                    validationState={this.errorsFor('size') && 'error'}>
                    <ControlLabel id="size">Size</ControlLabel>
                  <FormControl
                  type="text"
                  name="size"
                  onChange={this.handleChange.bind(this)} value={this.state.form.size} />
                  {this.errorsFor('size') &&
                    <HelpBlock id="size-help-block">{this.errorsFor('size')}</HelpBlock>
                  }
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col xs={6}>
                <FormGroup
                      id="material-form-group"
                      validationState={this.errorsFor('material') && 'error'}>
                      <ControlLabel id="material">Material</ControlLabel>
                  <FormControl
                      type='text'
                      name="material" onChange={this.handleChange.bind(this)} value={this.state.form.material}/>
                      {this.errorsFor('material') &&
                    <HelpBlock id="material-help-block">{this.errorsFor('material')}</HelpBlock>
                  }

                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col xs={6}>
                <FormGroup
                      id="capacity-form-group"
                      validationState={this.errorsFor('capacity') && 'error'}>
                      <ControlLabel id="capacity">Capacity</ControlLabel>
                  <FormControl
                      type='text'
                      name="capacity" onChange={this.handleChange.bind(this)} value={this.state.form.capacity}/>
                      {this.errorsFor('capacity') &&
                    <HelpBlock id="capacity-help-block">{this.errorsFor('capacity')}</HelpBlock>
                  }

                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col xs={6}>
                <FormGroup
                     id="description-form-group"
                     validationState={this.errorsFor('description') && 'error'}>
                      <ControlLabel id="description">Description</ControlLabel>
                  <FormControl
                      componentClass='textarea'
                      name="description" onChange={this.handleChange.bind(this)} value={this.state.form.description}/>
                      {this.errorsFor('description') &&
                    <HelpBlock id="description-help-block">{this.errorsFor('description')}</HelpBlock>
                  }

                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col xs={6}>
              <Button
                id="submit"
                onClick={this.handleSubmit.bind(this)}
                >Create a Rivet Page</Button>
              </Col>
            </Row>
        </form>
       )
    }
}

export default NewRivet

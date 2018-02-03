import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {
  Grid,
  PageHeader,
  Col,
  Row
} from 'react-bootstrap'
import Rivets from './pages/Rivets'
import NewRivet from './pages/NewRivet'
const api = "http://127.0.0.1:3000"

class App extends Component {
    constructor(props){
   super(props)
       this.state = {
         rivets: [],
         newRivetSuccess: false,
         errors: null
       }
     }


    componentWillMount(){
          fetch(`${api}/rivets`)
          .then((rawResponse) =>{
            return rawResponse.json()
          })
          .then((parsedResponse)=>{
            this.setState({rivets: parsedResponse.rivets})
          })
        }

        handleNewRivet(params){
        fetch(`${api}/rivets`,
          {
            body: JSON.stringify(params),  // <- we need to stringify the json for fetch
            headers: {  // <- We specify that we're sending JSON, and expect JSON back
              'Content-Type': 'application/json'
            },
            method: "POST"  // <- Here's our verb, so the correct endpoint is invoked on the server
          }
        )
        .then((rawResponse)=>{
          return rawResponse.json()
        })
        .then((parsedResponse) =>{
          if(parsedResponse.errors){ // <- Check for any server side errors
            this.setState({errors: parsedResponse.errors})
          }else{
            const rivets = Object.assign([], this.state.rivets)
            rivets.push(parsedResponse.rivet) // <- Add the new cat to our list of cats
            this.setState({
              rivets: rivets,  // <- Update cats in state
              errors: null // <- Clear out any errors if they exist
            })
          }
        })
      }

    newRivetSubmit(){
         console.log('Getting this Far!');
     }

    render() {
        return (
          <Router>
            <div>
              <Route exact path="/" render={props => (
                <Grid>
                  <PageHeader>
                    <Row>
                      <Col xs={8}>
                          Rivets
                          <small className='subtitle'>
                              <Link to='/newrivet' id='newrivets-Link'>Add a Rivet
                              </Link>
                        </small>
                      </Col>
                      <Col xs={4}>
                        <small>
                          <Link to='/rivets' id='rivets-link'>
                            Show me the Rivets
                          </Link>
                        <Rivets rivets={this.state.rivets} />
                      </small>
                      </Col>
                    </Row>
                  </PageHeader>
                </Grid>
              )} />


              <Route exact path="/newrivet" render={props => (
                <Grid>
                  <PageHeader>
                    <Row>
                      <Col xs={8}>
                        Rivets
                        <small className='subtitle'>
                        <Link to='/rivets' id='Rivets-link'>
                          All the Rivets
                        </Link>
                        </small>
                      </Col>
                      <Col xs={4}>
                        <small>
                          <Link to='/' id='NewRivet-link'>Home</Link>
                        </small>
                      </Col>
                    </Row>
                  </PageHeader>

                   <NewRivet submitHandler={this.newRivetSubmit.bind(this)} />
                </Grid>
              )} />
              <Route exact path="/rivets" render={props => (
                <Grid>
                  <PageHeader>
                    <Row>
                      <Col xs={8}>
                          Rivets
                          <small className='subtitle'>
                              <Link to='/newrivet' id='NewRivets-Link'>Add a Rivet
                              </Link>
                        </small>
                      </Col>
                      <Col xs={4}>
                        <small>
                          <Link to='/' id='Rivets-link'>
                            Home
                          </Link>
                        <Rivets rivets = {this.state.rivets} />
                      </small>
                      </Col>
                    </Row>
                  </PageHeader>
                </Grid>
              )} />
            </div>
          </Router>
              );
            }
          }

          export default App;

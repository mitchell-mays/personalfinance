import React, {Component} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class Budget extends Component {
    constructor(props) {
      super(props)
      this.state = {
        name: '',
        id: this.props.id,
        isCreated: this.props.isCreated,
        showForm: false
      };
      this.handleChange = this.handleChange.bind(this);
      this.createBudget = this.createBudget.bind(this);
    };
 
    handleChange(e) {
      if (e.target.id === 'name') {
          this.setState({ name: e.target.value });
      }
    }

    createBudget(e){
      e.preventDefault();
      const api = process.env.REACT_APP_API_URL + 'budgets';
      console.log("here");
      axios
        .post(api, this.state)
        .then((response) => {
          console.log(response);
          this.setState({ isCreated: true });
        })
        .catch((error) => {
          console.log(error);
        });
    }

    showCreateForm(){
      return(
        <Card>
          <Card.Header>Create New Budget</Card.Header>
          <Card.Body>
            <Form onSubmit={this.createBudget}>
              <Form.Group controlId="name">
                <Form.Label>Budget</Form.Label>
                <Form.Control onChange={this.handleChange} placeholder="Budget Name" />
                <Form.Text className="text-muted">
                  Personal name for your budget
                </Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit">
                Create
              </Button>
            </Form>
          </Card.Body>
        </Card>
      );
    }

    showContent(){
      const api = process.env.REACT_APP_API_URL + 'budget/' + this.state.id;
      console.log("getting value");
      axios
        .get(api)
        .then((response) => {
          const getResponse = JSON.parse(response.request.response);
          this.setState({ name: getResponse.message.Item.name });
        })
        .catch((error) => {
          console.log(error);
      });

      return(
      <Card>
      <Card.Header>{this.state.name}</Card.Header>
      <Card.Body>
        <Form.Text className="text-muted">
          Test
        </Form.Text>
      </Card.Body>
      </Card>
      );
    }
    
    render() {
        return (
          <div>
            {this.state.isCreated ? this.showContent() : this.showCreateForm()}
          </div>
        )
    }
}
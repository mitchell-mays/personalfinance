import React, {Component} from 'react';

export default class Budget extends Component {
    constructor(props) {
        super(props);
        this.state = {
          income: 100000,
          name: ''
        }
    }

    updateBudget(e){
        console.log(e.target.value);
        console.log(this);
        switch(e.target.name) {
            case 'budgetName':
              console.log("Here")
              this.setState({name: e.target.value});
              break;
            default:
              // code block
          }
    };

    render() {
        return (
        <div className="page">
            <h2>{this.state.name}</h2>
            <input name="budgetName" value={this.state.name} onChange={(e) => {this.updateBudget(e)}} />
        </div>
        )
    }
}
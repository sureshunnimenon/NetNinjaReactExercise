import React, {Component} from 'react';

class AddCoder extends Component{

    state= {
        name: null,
        age: null,
        belt: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.addCoder(this.state)
    }

    render(){
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label htmlFor="Name"> Name:    </label>
                    <input type="text" id="name" onChange={this.handleChange} />

                    <label htmlFor="Age"> Age:    </label>
                    <input type="text" id="age" onChange={this.handleChange} />

                    <label htmlFor="Belt"> Belt:    </label>
                    <input type="text" id="belt" onChange={this.handleChange} />

                    <button> Submit </button>
                </form>
            </div>
        )
    }
}

export default AddCoder;
import React, { Component } from 'react';

class TodoForm extends Component {
  constructor () {
    super();
      this.state = {
        title: '',
        responsible: '',
        description: '',
        priority: 'low'
      };
      this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    })
  }


  render() {
    return (
      <div className="card">
        <form className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              value={this.state.title}
              onChange={this.handleInputChange}
              placeholder="Title"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              value={this.state.title}
              onChange={this.handleInputChange}
              placeholder="Responsible"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              value={this.state.title}
              onChange={this.handleInputChange}
              placeholder="Description"
              />
          </div>
          <div className="form-group">
            <select
              name="priority"
              className="form-control"
              value={this.state.priority}
              onChange={this.handleInputChange}
              >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            save
          </button>
        </form>
      </div>
    )
  }
}

export default TodoForm;

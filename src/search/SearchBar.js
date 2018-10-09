import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ value: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.value);
  }

  render() {
    return (
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col align-middle">
              <div className="align-middle">
                <form onSubmit={this.onSubmit}>
                  <div className="input-group mb-3">
                    <input className="form-control form-control-lg align-middle" type="text"
                           placeholder="Enter Search Term"
                           onChange={this.onChange}/>
                    <div className="input-group-append">
                      <button type="submit" className="btn btn-primary">Search</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;

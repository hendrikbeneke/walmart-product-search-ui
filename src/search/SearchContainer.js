import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ResultsList from './ResultsList';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
    this.keywordSubmitted = this.keywordSubmitted.bind(this);
  }

  keywordSubmitted(keyword) {
    this.loadData(keyword);
  }

  loadData(keyword) {
    fetch(`http://localhost:3001/products/search?keyword=${keyword}`, {
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      redirect: "follow",
      referrer: "no-referrer"
    })
      .then(res => {
        if(res.status !== 200){
          return Promise.reject(new Error(`Status Code ${res.status}`));
        }
        return res.json();
      })
      .then(data => {
        this.setState({ products: data.results });
      })
      .catch(err => {
        alert(`Error searching products: ${err.message}`);
      })
  }

  render() {
    return (
      <main role="main">
        <SearchBar onSubmit={this.keywordSubmitted}/>
        <ResultsList products={this.state.products}/>
      </main>
    );
  }
}

export default SearchContainer;

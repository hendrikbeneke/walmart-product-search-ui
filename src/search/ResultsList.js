import React, { Component } from 'react';
import ResultItem from './ResultItem'

class ResultsList extends Component {
  render() {
    const resultItems = this.props.products.map((product) =>
      <ResultItem key={product.itemId}
                  imageUrl={product.largeImage}
                  name={product.name}
                  productUrl={product.productUrl}
                  price={product.salePrice}
                  ratingUrl={product.customerRatingImage}/>
    );
    return (
      <div className="py-5 bg-light">
        <div className="container">
          <div className="row">
            {resultItems}
          </div>
        </div>
      </div>
    );
  }
}

export default ResultsList;

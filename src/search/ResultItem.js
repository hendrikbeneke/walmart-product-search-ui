import React, { Component } from 'react';

class ResultItem extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
          <img className="card-img-top" alt={this.props.name} src={this.props.imageUrl}/>
          <div className="card-body">
            <p className="card-text text-truncate">{this.props.name}</p>
            <div className="d-flex justify-content-between align-items-center">
              <a
                href={this.props.productUrl}
                target="_blank" className="btn btn-sm btn-outline-secondary"
                rel="noreferrer noopener">Buy Now</a>
              <small className="text-muted text-right">
                ${this.props.price}<br/>
                <img src={this.props.ratingUrl} alt="rating"/>
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResultItem;

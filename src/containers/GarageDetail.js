import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import garageImg from '../garage.jpg';

class GarageDetail extends Component {

  render() {
    return (
      <div className="ui card">
        <div className="image">
          <img src={garageImg} alt="garage" />
        </div>
        <div className="content">
          <p className="header">{this.props.garage}</p>
          <div className="description">
            Our garage is the best. Reasonable prices, always on time, we are the best
            (and fictional)
          </div>
        </div>
        <div className="extra content button-container">
          <Link className="ui black basic button" to="/cars/new">
            Add a Car
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { garage: state.garage };
}

export default connect(mapStateToProps)(GarageDetail);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import carImg from '../car.jpg';
import { fetchCars } from '../actions';

class CarsIndex extends Component {

  componentDidMount() {
    this.props.fetchCars(this.props.garage);
  }

  renderCars = () => {
    return this.props.cars.map(car => {
      if (!car) return null;
      const { id, brand, model, owner } = car;
      return (
        <Link className="card" key={id} to={`/cars/${id}`}>
          <div className="image">
            <img src={carImg} alt={brand + ' ' + model} />
          </div>
          <div className="content">
            <div className="header">{brand} - {model}</div>
            <div className="description"><b>Owner:</b> {owner}</div>
          </div>
        </Link>
      );
    });
  };

  render() {
    return <div className="ui link cards">{this.renderCars()}</div>;
  }
}

const mapStateToProps = state => {
  return { cars: state.cars, garage: state.garage };
};

export default connect(mapStateToProps, { fetchCars })(CarsIndex);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCars } from '../actions';
import { destroyCar } from '../actions';
import carImg from '../car2.jpg';

class CarsShow extends Component {

  componentDidMount() {
    if (!this.props.car) {
      this.props.fetchCars(this.props.garage);
    }
  }

  destroyCar = () => {
    this.props.destroyCar(this.props.car.id, () => {
      this.props.history.push('/');
    });
  };
  
  render() {
    if (!this.props.car) return null;

    const { id, brand, model, owner, plate } = this.props.car;

    return (
      <div>
        <div className="ui card" key={id} to={`/cars/${id}`}>
          <div className="image">
            <img src={carImg} alt={brand + ' ' + model} />
          </div>
          <div className="content">
            <div className="header">{brand} - {model}</div>
            <div className="description"><b>Owner:</b> {owner}</div>
            <div className="description"><b>Plate:</b> {plate.toUpperCase()}</div>
          </div>
          <div className="extra content button-container">
          <div className="ui red basic button" onClick={this.destroyCar}>
            Delete Car
          </div>
        </div>
        </div>       
        <div>
          <Link to="/">Back</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const car = state.cars.find(car => car.id === idFromUrl);
  return { car, garage: state.garage };
};

export default connect(mapStateToProps, { fetchCars, destroyCar })(CarsShow);
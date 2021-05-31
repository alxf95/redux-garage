import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions';

class CarsNew extends Component {

  constructor() {
    super();

    this.required = value => value ? undefined : 'Required';
  }

  renderField = ({ input, label, type, meta: { touched, error, warning } }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <div>
          <input {...input} placeholder={label} type={type}/>
          {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
      </div>
    )
  };

  onSubmit = values => {
    this.props.createCar(values, this.props.garage, car => {
      this.props.history.push('/');
      return car;
    });
  };

  render() {
    console.log(this.props.sub)
    return (
      <div className="cars-new">
        <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            name="brand"
            type="text"
            label="brand"
            validate={this.required}
            component={this.renderField}
          />
          <Field
            name="model"
            type="text"
            label="model"
            validate={this.required}
            component={this.renderField}
          />
          <Field
            name="plate"
            type="text"
            label="plate"
            validate={this.required}
            component={this.renderField}
          />
          <Field
            name="owner"
            type="text"
            label="owner"
            validate={this.required}
            component={this.renderField}
          />
          <button 
            className="ui button"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { garage: state.garage };
};

export default reduxForm({ form: 'newCarForm' })(
  connect(mapStateToProps, { createCar })(CarsNew)
);
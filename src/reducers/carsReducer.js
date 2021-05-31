import { FETCH_CARS, CREATE_CAR, DESTROY_CAR } from '../actions';

// eslint-disable-next-line
export default (state = [], action) => {
  switch (action.type) {
    case FETCH_CARS:
      return action.payload;
    case CREATE_CAR:
      return [...state, action.payload];
    case DESTROY_CAR:
      return state.filter(car => car !== action.payload);
    default:
      return state;
  }
}
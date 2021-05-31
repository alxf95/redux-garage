export const FETCH_CARS = 'FETCH_CARS';
export const CREATE_CAR = 'CREATE_CAR';
export const DESTROY_CAR = 'DESTROY_CAR';

export const fetchCars = garage => {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`)
    .then(response => response.json());
  
  return { type: FETCH_CARS, payload: promise }
};

export const createCar = (body, garage, callback) => {
  const car = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json()).then(callback);
  
  return { type: CREATE_CAR, payload: car };
};

export const destroyCar = (id, callback) => {
  const car = fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`, {
    method: 'DELETE'
  }).then(r => r.json()).then(callback);

  return { type: CREATE_CAR, payload: car };
};
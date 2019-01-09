import { combineReducers } from 'redux';

const initialState = {
  movieList: [
    {
      "id": 1,
      "title": "A very nice movie",
      "year": 2666,
      "director": "David Lynch",
      "poster": "https://welcometotwinpeaks.com/wp-content/uploads/crisvector-twin-peaks-part-4-e1499377190629-781x1024.jpg",
       "rate" : 100
    },
    {
      "id": 2,
      "title": "A very nice movie",
      "year": 2666,
      "director": "David Lynch",
      "poster": "https://welcometotwinpeaks.com/wp-content/uploads/crisvector-twin-peaks-part-4-e1499377190629-781x1024.jpg",
      "rate" : 100
    },
    {
      "id": 3,
      "title": "A very nice movie",
      "year": 2666,
      "director": "David Lynch",
      "poster": "https://welcometotwinpeaks.com/wp-content/uploads/crisvector-twin-peaks-part-4-e1499377190629-781x1024.jpg",
      "rate" : 100
    },
    {
      "id": 4,
      "title": "A very nice movie",
      "year": 2666,
      "director": "David Lynch",
      "poster": "https://welcometotwinpeaks.com/wp-content/uploads/crisvector-twin-peaks-part-4-e1499377190629-781x1024.jpg",
      "rate" : 100
    }
  ]
};

function movies(state = initialState, action) {
  return state;
}

const rootReducer = combineReducers({
  movies,
});

export default rootReducer;
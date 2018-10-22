import { GET_USERS, ADD_USER, DELETE_USER } from '../actions/types'

const initialState = {
  users: [
    { 
      username: 'Ashortpenguin',
      userpic: 'FairyPenguin.jpg',
      posts: [],
      email: 'jodaman19@live.com',
      password: 'Sn4zzyK0rr4',
      dob: {
        $date: '1995-05-17T06:00:00.000Z'
      }
    },
    { 
      username: 'ZeFunkyPenguin',
      userpic: 'FairyPenguin.jpg',
      posts: [],
      email: 'jfunk@ymail.com',
      password: 'pass',
      dob: {
        $date: '1995-06-01T06:00:00.000Z'
      }
    }
  ]
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_USERS:
      return {
        ...state
      };

    default:
      return {
        ...state
      };
  }
};
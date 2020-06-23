import createDataContext from './createDataContext';
import trackerApi from '../api/tracker'
import { navigate } from '../navigationRef';

const trackReducer = (state, action) => {
  switch(action.type){
      case 'fetch_tracks':
          return action.payload;
      case 'signin':
          return {errorMessage: '', token: action.payload}
      case 'clear_err_message':
         return {...state, errorMessage: ''}
      case 'signout':
        return {token:null, errorMessage:''}
      default:
        return state;
  }
};

const fetchTracks = dispatch => async () => {
  const response = await trackerApi.get('/tracks')
  dispatch({ type: 'fetch_tracks', payload: response.data })
}

const createTrack = dispatch => async (name,locations) => {
   await trackerApi.post('/tracks', {name,locations})
}
    
export const { Provider, Context } = createDataContext(
    trackReducer,
    { fetchTracks, createTrack },
    []
);
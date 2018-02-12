import axios from 'axios';
import _ from 'lodash';

export const LOAD_DATA_REQUESTED = 'data/LOAD_DATA_REQUESTED'
export const DATA_LOADED = 'data/DATA_LOADED'
export const SORT_DATA = 'data/SORT_DATA'

const initialState = {
  isLoading: false,
  sortIndex: 0,
  data: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA_REQUESTED:
      return {
        ...state,
        isLoading: true
      }

    case DATA_LOADED:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    
    case SORT_DATA:
      return {
        ...state,
        sortIndex: action.payload,
        data: _.sortBy(state.data, {
          0: 'event_description',
          1: 'event_id',
          2: 'event_name',
          3: 'event_time',
          4: 'event_type',
        }[action.payload])
      }
    
    default:
      return state
  }
}

export const loadData = () => {
  return dispatch => {
    dispatch({
      type: LOAD_DATA_REQUESTED
    })

    return axios.post('http://localhost:3001/api/events').then(res => {
      dispatch({
        type: DATA_LOADED,
        payload: res.data
      })
    })
  }
}

export const sortData = (payload) => {
  return dispatch => {
    dispatch({
      type: SORT_DATA,
      payload
    })
  }
}

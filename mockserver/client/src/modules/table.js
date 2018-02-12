export const SET_FILTER = 'table/SET_FILTER'

const initialState = {
  filter: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload
      }

    default:
      return state
  }
}

export const setFilter = (payload) => {
  return dispatch => {
    dispatch({
      type: SET_FILTER,
      payload
    })
  }
}

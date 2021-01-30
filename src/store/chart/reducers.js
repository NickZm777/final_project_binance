import { GET_TEST } from './action'
  
  const ACTION_HANDLERS = {
    [GET_TEST]: (state, action) => {
      return { ...state, test: action.payload }
    }
  }
  
  const initialState = {
    test: 0,
  }
  
  export default (state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type]
  
    return handler ? handler(state, action) : state
  }
// Note that this is no longer being used (other than to set initial state). Filters are now
// handled by url params with React Router. This was used before that. Keeping around as reference.

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
}

export default visibilityFilter;

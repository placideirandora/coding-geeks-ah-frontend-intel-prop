const initState = {
  profile: []
};

const ProfileReducer = (state = initState, action) => {
  switch (action.type) {
    case 'RETRIEVE_PROFILE_SUCCESS':
      // console.log(action.response.data.data);
      return {
        ...state,
        profile: action.response.data.data
      };
    case 'RETRIEVE_PROFILE_ERROR':
      // console.log(action.error.request.response);
      return state;
    default:
      return state;
  }
};

export default ProfileReducer;

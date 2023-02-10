import axios from 'axios';

const serverUrl = 'https://grumpy-calf-stole.cyclic.app/api';

// export const register = formData => async dispatch => {
//   try {
//     dispatch({type: 'registerRequest'});

//     const {data} = await axios.post(`${serverUrl}/register`, formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     dispatch({type: 'registerSuccess', payload: data});
//   } catch (error) {
//     dispatch({
//       type: 'registerFailure',
//       payload: error.response.data.message,
//     });
//   }
// };
const signUpUser = formData => async dispatch => {
  try {
    dispatch({type: 'signupRequest'});
    console.log('signupRequest');
    const {data} = await axios.post(`${serverUrl}/signup`, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('Before signupSuccess');
    dispatch({type: 'signupSuccess', payload: data});
    console.log('signupSuccess');
  } catch (error) {
    console.log('error==============>', error);
    dispatch({type: 'signupFailure', message: dispatch.response});
  }
};

export {signUpUser};

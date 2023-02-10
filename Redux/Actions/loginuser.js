import axios from 'axios';

const serverUrl = 'https://grumpy-calf-stole.cyclic.app/api';

const loginUser = (email, password) => async dispatch => {
  try {
    console.log('loginRequest');
    dispatch({type: 'loginRequest'});
    const {data} = axios.post(
      `${serverUrl}/login`,
      {email, password},
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    console.log("data-===========>",data)
    console.log('loginSuccess');
    dispatch({type: 'loginSuccess', payload: data});
  } catch (error) {
    console.log('errof loginFailure========>', error);
    dispatch({type: 'loginFailure', message: dispatch.response.data.message});
  }
};

const logoutUser = () => async dispatch => {
  try {
    dispatch({type: 'logoutRequest'});
    const {data} = axios.get(`${serverUrl}/logout`);
    dispatch({type: 'logoutSuccess', payload: data});
  } catch (error) {
    dispatch({type: 'logoutFailure', message: dispatch.response.data.message});
  }
};

export {loginUser, logoutUser};

import { post } from '../../../apiHandler';
const loginSuccess = (data) => {
    return {
        type: 'LOGIN_DATA',
        payload: data
    };
};
export const otpVerificationSuccess = (data) => {
  return {
    type: 'OTP',
    payload: data
};
}
export const register = (params, authToken = '') => {
    console.log("params=",params);
    return (dispatch) => {
        return post('registration', params, authToken)
        .then(
          (result) => {
            dispatch(loginSuccess(result));
            return result;
          },
          (error) => {
            console.log("Error=",error)
            return error;
          }
        );
    };
};
export const continueUserSession = (userData) => {
  return (dispatch) => {
        dispatch(otpVerificationSuccess(true));
        dispatch(loginSuccess(userData));
  };
};
export const verifyOtp = (params, authToken = '') => {
  return (dispatch) => {
      return post('verifyOTP', params, authToken)
      .then(
        (result) => {
          if(result.status) {
            dispatch(otpVerificationSuccess(true));
            return result;
          } else {
            dispatch(otpVerificationSuccess(false));
            return result;
          }
        },
        (error) => {
          console.log("Error=",error)
        }
      );
  };
};



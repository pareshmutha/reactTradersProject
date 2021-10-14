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
export const login = (params) => {
    return (dispatch) => {
        return post('login', params)
        .then(
          (result) => {
            if(result.status === 1) {
              dispatch(loginSuccess(result));
            } else{
              alert(result.message);
            }
            return result;
          },
          (error) => {
            console.log("Error=",error)
            alert(error);
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
export const verifyOtp = (params) => {
  return (dispatch) => {
      return post('verifyOTP', params)
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

export const logout = () => {
  return (dispatch) => {
    dispatch(loginSuccess({}));
    dispatch(otpVerificationSuccess(false));
  };
};


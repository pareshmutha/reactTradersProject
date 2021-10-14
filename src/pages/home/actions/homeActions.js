import { get, post } from '../../../apiHandler';

const allCustomersSuccess = (data) => {
    return {
        type: 'All_CUSTOMERS',
        payload: data
    };
};
export const fetchAllCustomers = (params) => {
    return (dispatch) => {
        return get("getAllCustomer")
        .then(
          (result) => {
            dispatch(allCustomersSuccess(result));
          },
          (error) => {
            console.log("Error=",error)
          }
        );
    };
};

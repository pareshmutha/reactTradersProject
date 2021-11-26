const allCustomersSuccess = (data) => {
    return {
        type: 'All_CUSTOMERS',
        payload: data
    };
};
export const fetchAllCustomers = (params) => {
    return (dispatch) => {
        return fetch("https://truetraders24.com/api/getAllCustomer")
        .then(res => res.json())
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

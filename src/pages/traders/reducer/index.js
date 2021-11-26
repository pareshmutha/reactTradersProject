const allCustomers = (state = {}, action) => {
    switch (action.type) {
        case 'All_CUSTOMERS':
            return action.payload;
        default:
            return state;
    }
};


export default allCustomers;
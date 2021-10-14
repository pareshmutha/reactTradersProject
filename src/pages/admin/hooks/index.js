import useActionsHook from '../../../hooks/useActions';
import * as actions from '../actions';


export function useActions() {
    const [
        getAllUnVerifiedReviews,
        approveReview,
        getAllUnVerifiedTraders,
        approveTrader,
        deleteUser,
        getAllCustomers
    ] = useActionsHook([
        actions.getAllUnVerifiedReviews,
        actions.approveReview,
        actions.getAllUnVerifiedTraders,
        actions.approveTrader,
        actions.deleteUser,
        actions.getAllCustomers
    ]);
    return {
        getAllUnVerifiedReviews,
        approveReview,
        getAllUnVerifiedTraders,
        approveTrader,
        deleteUser,
        getAllCustomers
    };
}
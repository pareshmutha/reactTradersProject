import { useSelector } from 'react-redux';
import useActionsHook from '../../../hooks/useActions';
import * as actions from '../actions';
import useSelectorHook from '../../../hooks/useSelectors';


export function useSelectors() {
    const loginData = useSelector(useSelectorHook('loginData'));
    const userRole = useSelector(useSelectorHook('loginData.usersData.userData.userrole')) || 1;

    
    return {
        loginData,
        userRole
    }
}

export function useActions() {
    const [
        login,
        verifyOtp,
        userLogout,
        continueUserSession,
    ] = useActionsHook([
        actions.login,
        actions.verifyOtp,
        actions.logout,
        actions.continueUserSession
    ]);
    return {
        login,
        verifyOtp,
        userLogout,
        continueUserSession
    };
}
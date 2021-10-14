import { useSelector } from 'react-redux';
import useActionsHook from '../../../hooks/useActions';
import * as actions from '../actions';
import useSelectorHook from '../../../hooks/useSelectors';


export function useSelectors() {
    const loginData = useSelector(useSelectorHook('loginData'));
    
    return {
        loginData
    }
}

export function useActions() {
    const [
        register,
        verifyOtp,
    ] = useActionsHook([
        actions.register,
        actions.verifyOtp,
    ]);
    return {
        register,
        verifyOtp,
    };
}
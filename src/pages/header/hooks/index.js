import { useSelector } from 'react-redux';
import useSelectorHook from '../../../hooks/useSelectors';


export function useSelectors() {
    const loginData = useSelector(useSelectorHook('loginData'));
    const userRole = useSelector(useSelectorHook('loginData.usersData.userData.userrole')) || 1;
    
    return {
        loginData,
        userRole
    }
}

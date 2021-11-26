import { useSelector } from 'react-redux';
import useActionsHook from '../../../hooks/useActions';
import * as actions from '../actions/homeActions';
import useSelectorHook from '../../../hooks/useSelectors';


export function useSelectors() {
    const allCustomers = useSelector(useSelectorHook('allCustomers'));
    
    return {
        allCustomers
    }
}

export function useActions() {
    const [
        fetchAllCustomers,
    ] = useActionsHook([
        actions.fetchAllCustomers,
      
    ]);
    return {
        fetchAllCustomers,
    };
}
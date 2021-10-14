import { useSelector } from 'react-redux';
import useActionsHook from '../../../hooks/useActions';
import * as actions from '../actions';
import useSelectorHook from '../../../hooks/useSelectors';

export function useSelectors() {
    const allTraders = useSelector(useSelectorHook('traders.allTraders'));
    const usersData = useSelector(useSelectorHook('loginData.usersData.userData'));
    
    return {
        allTraders,
        usersData
    }
}

export function useActions() {
    const [
        getAllTraders,
        getTraderById,
        submitReview,
        imageUpload,
        updateTrader,
    ] = useActionsHook([
        actions.getAllTraders,
        actions.getTraderById,
        actions.submitReview,
        actions.imageUpload,
        actions.updateTrader
    ]);
    return {
        getAllTraders,
        getTraderById,
        submitReview,
        imageUpload,
        updateTrader,
    };
}
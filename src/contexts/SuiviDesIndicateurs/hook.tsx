import { useContext } from 'react';
import { Context } from './context';

export default () => {
    const contextInstance = useContext(Context);
    if (contextInstance === undefined) {
        throw new Error('useSuiviDesIndicateurs must be used within an SuiviDesIndicateursProvider');
    }
    return contextInstance;
};
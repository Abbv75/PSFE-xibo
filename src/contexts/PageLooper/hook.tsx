import { useContext } from 'react';
import { Context } from './context';

export default () => {
    const contextInstance = useContext(Context);
    if (contextInstance === undefined) {
        throw new Error('usePageLooper must be used within an PageLooperProvider');
    }
    return contextInstance;
};
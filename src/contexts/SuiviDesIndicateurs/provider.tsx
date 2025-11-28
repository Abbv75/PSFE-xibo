import SuiviDesIndicateurs from '../../pages/SuiviDesIndicateurs';
import { Context } from './context';
import contextType from './contextType';

export default () => {

    // --- Context value
    const value: contextType = {
    }

    return (
        <Context.Provider value={value}>
            <SuiviDesIndicateurs />
        </Context.Provider>
    )
}
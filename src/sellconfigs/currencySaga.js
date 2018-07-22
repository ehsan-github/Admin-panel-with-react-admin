import { all, takeEvery } from 'redux-saga/effects';
import { SELLABLE_APPROVE_FAILURE, SELLABLE_REJECT_FAILURE } from './currencyActions';

export default function* currencySaga() {
    yield all([
        takeEvery(SELLABLE_APPROVE_FAILURE, function*({ error }) {
            console.error(error);
            yield all([]);
        }),
        takeEvery(SELLABLE_REJECT_FAILURE, function*({ error }) {
            console.error(error);
            yield all([]);
        }),
    ]);
}

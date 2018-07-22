import { all, takeEvery } from 'redux-saga/effects';
import { BUYABLE_APPROVE_FAILURE, BUYABLE_REJECT_FAILURE } from './currencyActions';

export default function* currencySaga() {
    yield all([
        takeEvery(BUYABLE_APPROVE_FAILURE, function*({ error }) {
            console.error(error);
            yield all([]);
        }),
        takeEvery(BUYABLE_REJECT_FAILURE, function*({ error }) {
            console.error(error);
            yield all([]);
        }),
    ]);
}

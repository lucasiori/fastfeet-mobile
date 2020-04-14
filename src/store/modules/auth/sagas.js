import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import { signInSuccess, signFailure } from './actions';

import api from '~/services/api';

export function* signIn({ payload }) {
  try {
    // const { id } = payload;

    // const response = yield call(api.post, 'sessions/mobile', { id });

    // const { user } = response.data;

    const user = {
      name: 'Lucas Fernando Iori',
      address: 'rua Recife',
      address_number: '10',
      city: 'Itajobi',
      state: 'São Paulo',
      zip_code: '15840-000',
    };

    yield put(signInSuccess(user));
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      err.response
        ? err.response.data.error
        : 'Houve um erro no login, verifique seus dados'
    );
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);

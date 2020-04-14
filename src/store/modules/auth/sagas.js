import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects'; // eslint-disable-line

import { signInSuccess, signFailure } from './actions';

// import api from '~/services/api';

export function* signIn({ payload }) { // eslint-disable-line
  try {
    // const { id } = payload;

    // const response = yield call(api.post, 'sessions/mobile', { id });

    // const { user } = response.data;

    const user = {
      name: 'Lucas Fernando Iori',
      email: 'lucasferiori@gmail.com',
      created_at: '2020-04-11T19:51:48.528Z',
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

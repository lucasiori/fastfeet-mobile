import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { signOut } from '~/store/modules/auth/actions';

import DefaultAvatar from '~/components/DefaultAvatar';
import DeliveryBox from '~/components/DeliveryBox';

import {
  Wrapper,
  Header,
  UserInfo,
  Welcome,
  UserName,
  LogoutButton,
  Container,
  ContainerHeader,
  Title,
  Filters,
  Filter,
  FilterText,
  DeliveriesList,
} from './styles';

export default function Dashboard({ navigation }) {
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  const [statusFilter, setStatusFilter] = useState('pending');

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Wrapper>
      <Header>
        <DefaultAvatar size="small" />

        <UserInfo>
          <Welcome>Bem vindo de volta,</Welcome>
          <UserName>{profile.name}</UserName>
        </UserInfo>

        <LogoutButton onPress={handleSignOut}>
          <Icon name="exit-to-app" color="#E74040" size={22} />
        </LogoutButton>
      </Header>

      <Container>
        <ContainerHeader>
          <Title>Entregas</Title>

          <Filters>
            <Filter onPress={() => setStatusFilter('pending')}>
              <FilterText active={statusFilter === 'pending'}>
                Pendentes
              </FilterText>
            </Filter>

            <Filter onPress={() => setStatusFilter('finalized')}>
              <FilterText active={statusFilter === 'finalized'}>
                Entregues
              </FilterText>
            </Filter>
          </Filters>
        </ContainerHeader>

        <DeliveriesList
          data={[1, 2, 3, 4, 5]}
          keyExtractor={(item) => String(item)}
          renderItem={({ item, index }) => (
            <DeliveryBox
              index={index + 1}
              onDetails={() =>
                navigation.navigate('DeliveryDetails', { delivery: item })
              }
            />
          )}
        />
      </Container>
    </Wrapper>
  );
}

Dashboard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

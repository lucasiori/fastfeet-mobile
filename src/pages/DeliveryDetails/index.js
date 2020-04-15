import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import {
  Container,
  Box,
  Header,
  Title,
  Label,
  ValueText,
  ViewGroup,
  ButtonGroup,
  Button,
  ButtonText,
} from './styles';

const styles = StyleSheet.create({
  boxShadow: {
    elevation: 1.5,
    shadowRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
  },
});

export default function DeliveryDetails({ navigation }) {
  return (
    <Background>
      <Container>
        <Box style={styles.boxShadow}>
          <Header>
            <Icon name="local-shipping" color="#7d40e7" size={24} />
            <Title>Informações da entrega</Title>
          </Header>

          <View>
            <Label>DESTINATÁRIO</Label>
            <ValueText>Ludwig van Beethoven</ValueText>
          </View>

          <View>
            <Label>ENDEREÇO DE ENTREGA</Label>
            <ValueText>rua Beethoven, 1729, Diadema - SP, 09960-580</ValueText>
          </View>

          <View>
            <Label>PRODUTO</Label>
            <ValueText>Yamaha SX7</ValueText>
          </View>
        </Box>

        <Box style={styles.boxShadow}>
          <Header>
            <Icon name="event" color="#7d40e7" size={24} />
            <Title>Situação da entrega</Title>
          </Header>

          <View>
            <Label>STATUS</Label>
            <ValueText>Pendente</ValueText>
          </View>

          <ViewGroup>
            <View>
              <Label>DATA DE RETIRADA</Label>
              <ValueText>14 / 01 / 2020</ValueText>
            </View>

            <View>
              <Label>DATA DE ENTREGA</Label>
              <ValueText>--/--/--</ValueText>
            </View>
          </ViewGroup>
        </Box>

        <ButtonGroup>
          <Button
            style={styles.boxShadow}
            onPress={() => navigation.navigate('NewProblem')}
          >
            <Icon name="highlight-off" color="#e74040" size={24} />
            <ButtonText>Informar Problema</ButtonText>
          </Button>

          <Button
            style={styles.boxShadow}
            onPress={() => navigation.navigate('DeliveryProblems')}
          >
            <Icon name="info-outline" color="#e7ba40" size={24} />
            <ButtonText>Visualizar Problemas</ButtonText>
          </Button>

          <Button style={styles.boxShadow}>
            <Icon name="alarm-on" color="#7d40e7" size={24} />
            <ButtonText>Confirmar Entrega</ButtonText>
          </Button>
        </ButtonGroup>
      </Container>
    </Background>
  );
}

DeliveryDetails.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

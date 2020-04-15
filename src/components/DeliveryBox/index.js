import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Steps from 'react-native-steps';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Content,
  ContentHeader,
  Title,
  Footer,
  Label,
  ValueText,
  DetailsText,
} from './styles';

export default function DeliveryBox({ index, onDetails }) {
  const stepsConfigs = {
    stepIndicatorSize: 15,
    currentStepIndicatorSize: 15,
    stepStrokeWidth: 2,
    currentStepStrokeWidth: 2,
    separatorStrokeUnfinishedWidth: 2,
    separatorStrokeFinishedWidth: 2,
    stepStrokeCurrentColor: '#7d40e7',
    separatorFinishedColor: '#7d40e7',
    separatorUnFinishedColor: '#7d40e7',
    stepStrokeUnFinishedColor: '#7d40e7',
    stepStrokeFinishedColor: '#7d40e7',
    stepIndicatorFinishedColor: '#7d40e7',
    stepIndicatorUnFinishedColor: '#fff',
    labelColor: '#999',
    currentStepLabelColor: '#999',
    labelSize: 11,
  };

  return (
    <Container
      style={{
        elevation: 1.5,
        shadowRadius: 4,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
      }}
    >
      <Content>
        <ContentHeader>
          <Icon name="local-shipping" color="#7d40e7" size={24} />
          <Title>Encomenda {index.toString().padStart(2, '0')}</Title>
        </ContentHeader>

        <Steps
          configs={stepsConfigs}
          current={1}
          count={3}
          renderStepIndicator={() => {}}
          labels={['Aguardando retirada', 'Retirada', 'Entregue']}
        />
      </Content>

      <Footer>
        <View>
          <Label>Data</Label>
          <ValueText>14/01/2020</ValueText>
        </View>

        <View>
          <Label>Cidade</Label>
          <ValueText>Diadema</ValueText>
        </View>

        <View>
          <TouchableOpacity onPress={onDetails}>
            <DetailsText>Ver detalhes</DetailsText>
          </TouchableOpacity>
        </View>
      </Footer>
    </Container>
  );
}

DeliveryBox.propTypes = {
  index: PropTypes.number.isRequired,
  onDetails: PropTypes.func.isRequired,
};

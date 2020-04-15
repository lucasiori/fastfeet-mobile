import React from 'react';
import { StyleSheet, Alert } from 'react-native';

import Background from '~/components/Background';

import {
  Container,
  Title,
  ProblemsList,
  ProblemBox,
  ProblemDescription,
  ProblemDate,
} from './styles';

const styles = StyleSheet.create({
  boxShadow: {
    elevation: 1.5,
    shadowRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
  },
});

export default function DeliveryProblems() {
  // function handleShowDetails(description) {
  //   Alert.alert('Descrição do problema', description)
  // }

  return (
    <Background>
      <Container>
        <Title>Encomenda 01</Title>

        <ProblemsList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          keyExtractor={(item) => String(item)}
          renderItem={() => (
            <ProblemBox style={styles.boxShadow} onPress={() => {}}>
              <ProblemDescription>
                Destinatário Ausente Destinatário Ausente
              </ProblemDescription>
              <ProblemDate>14/01/2020</ProblemDate>
            </ProblemBox>
          )}
        />
      </Container>
    </Background>
  );
}

import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import Background from '~/components/Background';
import Button from '~/components/Button';

import { Container, TextArea } from './styles';

const styles = StyleSheet.create({
  boxShadow: {
    elevation: 1.5,
    shadowRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
  },
});

export default function NewProblem() {
  const [problem, setProblem] = useState('');

  return (
    <Background>
      <Container>
        <TextArea
          style={styles.boxShadow}
          multiline
          numberOfLines={12}
          maxLength={500}
          placeholder="Inclua aqui o problema que ocorreu na entrega."
          placeholderTextColor="#999"
          textAlignVertical="top"
          value={problem}
          onChangeText={setProblem}
        />
        <Button background="#7d40e7" text="Enviar" onPress={() => {}} />
      </Container>
    </Background>
  );
}

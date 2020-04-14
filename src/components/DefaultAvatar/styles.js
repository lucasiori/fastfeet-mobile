import styled from 'styled-components/native';

export const Container = styled.View`
  width: 135px;
  height: 135px;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.background};
  border-radius: 77.5px;
  margin: 0 auto;
`;

export const AvatarText = styled.Text`
  color: ${(props) => props.color};

  font-size: 60px;
`;

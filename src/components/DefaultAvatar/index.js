import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import generateRandomColor from '~/utils/generateRandomColor';

import { Container, AvatarText } from './styles';

export default function DefaultAvatar(props) {
  const name = useSelector((state) => state.user.profile.name);

  const [avatarText, setAvatarText] = useState('');
  const [colors, setColors] = useState({});

  useEffect(() => {
    if (name) {
      const arrText = name.split(' ');

      setAvatarText(
        `${arrText[0].charAt(0).toUpperCase()}${
          arrText[1] ? arrText[1].charAt(0).toUpperCase() : ''
        }`
      );
    }

    setColors(generateRandomColor());
  }, [name]);

  return (
    <Container {...props} background={colors.background || '#a28fd0'}>
      <AvatarText color={colors.labelColor || '#f4effc'}>
        {avatarText}
      </AvatarText>
    </Container>
  );
}

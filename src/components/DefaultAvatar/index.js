import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import generateRandomColor from '~/utils/generateRandomColor';

import { Container, AvatarText } from './styles';

export default function DefaultAvatar({ size, ...rest }) {
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
    <Container
      {...rest}
      background={colors.background || '#a28fd0'}
      size={size}
    >
      <AvatarText color={colors.labelColor || '#f4effc'} size={size}>
        {avatarText}
      </AvatarText>
    </Container>
  );
}

DefaultAvatar.propTypes = {
  size: PropTypes.string,
};

DefaultAvatar.defaultProps = {
  size: 'small',
};

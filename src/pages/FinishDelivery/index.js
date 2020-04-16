import React, { useState } from 'react';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import Button from '~/components/Button';

import {
  Wrapper,
  Container,
  Preview,
  Camera,
  ButtonBox,
  ActionButton,
} from './styles';

export default function FinishDelivery() {
  const [preview, setPreview] = useState(null);
  const [refCamera, setRefCamera] = useState(null);

  async function handleTakePicture() {
    if (refCamera) {
      const options = { quality: 0.5, base64: true };
      const { uri } = await refCamera.takePictureAsync(options);

      setPreview(uri);
    }
  }

  return (
    <Background>
      <Wrapper>
        <Container>
          {preview && (
            <>
              <Preview source={{ uri: preview }} />
              <ButtonBox>
                <ActionButton onPress={() => setPreview(null)}>
                  <Icon name="cancel" color="#fff" size={28} />
                </ActionButton>
              </ButtonBox>
            </>
          )}

          {!preview && (
            <>
              <Camera
                ref={(ref) => setRefCamera(ref)}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.auto}
                captureAudio={false}
                androidCameraPermissionOptions={{
                  title: 'Permissões de câmera',
                  message: 'Permitir FastFeet acessar a câmera',
                  buttonPositive: 'Permitir',
                  buttonNegative: 'Cancelar',
                }}
              />

              <ButtonBox>
                <ActionButton onPress={handleTakePicture}>
                  <Icon name="photo-camera" color="#fff" size={28} />
                </ActionButton>
              </ButtonBox>
            </>
          )}
        </Container>

        <Button background="#7d40e7" text="Enviar" onPress={() => {}} />
      </Wrapper>
    </Background>
  );
}

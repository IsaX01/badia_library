// Login.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { styled } from 'nativewind';

const { StyledView, StyledText, StyledButton } = styled(View, Text, Button);

function Login({ onLogin }) {
  return (
    <StyledView className="flex-1 justify-center items-center space-y-2">
      <StyledText className="text-xl">Esta es la página de inicio de sesión</StyledText>
      <StyledButton onPress={onLogin}>Iniciar sesión</StyledButton>
    </StyledView>
  );
}

export default Login;

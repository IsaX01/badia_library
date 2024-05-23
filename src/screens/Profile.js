import React from "react";
import { SafeAreaView, ScrollView, Text, Image, Button } from "react-native";
import {
  Center,
  ScrollView as NWScrollView,
  Text as NWText,
  Image as NWImage,
  Button as NWButton,
} from "nativewind";

const ProfileScreen = () => {
  const user = {
    name: "John Doe",
    photo:
      "https://th.bing.com/th/id/OIP.-ZSeogQUpXoAy5X2VKX2igHaHa?rs=1&pid=ImgDetMain",
  };

  const handleLogout = () => {
    // Implementar la lógica de cierre de sesión
    // Redirigir a la pantalla de inicio de sesión
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView>
      <NWScrollView>
        <Center mt="20">
          <NWText fontSize="2xl" fontWeight="bold">
            {user.name}
          </NWText>
          <NWImage
            mt="10"
            source={user.photo}
            width={150}
            height={150}
            borderRadius="full"
          />
          <NWButton mt="20" onPress={handleLogout}>
            Cerrar sesión
          </NWButton>
        </Center>
      </NWScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

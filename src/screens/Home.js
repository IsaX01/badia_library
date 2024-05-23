import React from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { Center, ScrollView, FlatList as NWFlatList, View as NWView, TouchableOpacity as NWTouchableOpacity } from 'nativewind';
import Card from '../components/Card';

const HomeScreen = () => {
  const data = [
    { id: 1, title: 'Tarjeta 1', description: 'Descripción de la tarjeta 1' },
    // Añadir más datos de tarjeta aquí
  ];

  const renderItem = ({ item }) => (
    <Card title={item.title} description={item.description} />
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <NWFlatList data={data} renderItem={renderItem} />
        <NWView mt="auto" bg="gray-200" flex={1}>
          <NWView flexDirection="row" justifyContent="space-between" alignItems="center" padding="10">
            <NWTouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Ionicons name="person" size={24} />
            </NWTouchableOpacity>
            <NWTouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <Ionicons name="settings" size={24} />
            </NWTouchableOpacity>
          </NWView>
        </NWView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

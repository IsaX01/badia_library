import React from 'react';
import { View, Text } from 'react-native';
import { Card as NWCard, CardContent as NWCardContent, Title as NWTitle, Text as NWText } from 'nativewind';

const Card = ({ title, description }) => {
  return (
    <NWCard>
      <NWCardContent>
        <NWTitle>{title}</NWTitle>
        <NWText mt="2">{description}</NWText>
      </NWCardContent>
    </NWCard>
  );
};

export default Card;

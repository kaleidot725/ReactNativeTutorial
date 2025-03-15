import React from "react";
import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './App';

export function DetailsScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10, width: '100%' }}>
          <NavigationButton onPress={() => navigation.push('Details')} text="Go to Details" />
          <NavigationButton onPress={() => navigation.goBack()} text="Go back" />
          <NavigationButton onPress={() => navigation.popTo('Home')} text="Go to Home" />
          <NavigationButton onPress={() => navigation.popToTop()} text="Go back to first screen in stack"/>
        </View>
    );
  }
  
  type NavigationButtonProps = {
    onPress: () => void;
    text: string;
  }
  
  function NavigationButton({ onPress, text }: NavigationButtonProps) {
    return (
      <View style={{ width: '100%', paddingHorizontal: 10 }}>
        <Button 
          onPress={onPress} 
          title={text}
        />
      </View>
    );
  }
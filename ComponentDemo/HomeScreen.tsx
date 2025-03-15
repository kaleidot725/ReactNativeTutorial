import React from "react";
import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './App';

export function HomeScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <NavigationButton onPress={() => navigation.navigate('Details')} text="Go to Details" />
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
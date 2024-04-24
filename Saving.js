// Import necessary components from React Native
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

// Functional component for the savings app
const SavingsApp = () => {
  // State variables to store input and saved money
  const [inputAmount, setInputAmount] = useState('');
  const [savedMoney, setSavedMoney] = useState(0);

  // Function to handle saving money
  const saveMoney = () => {
    const amount = parseFloat(inputAmount);
    if (!isNaN(amount) && amount > 0) {
      setSavedMoney(savedMoney + amount);
      setInputAmount('');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginBottom: 10 }}>Total Saved: ${savedMoney.toFixed(2)}</Text>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Enter amount to save"
        keyboardType="numeric"
        value={inputAmount}
        onChangeText={setInputAmount}
      />
      <Button title="Save" onPress={saveMoney} />
    </View>
  );
};

export default SavingsApp;

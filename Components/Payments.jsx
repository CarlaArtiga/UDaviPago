import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const PaymentsScreen = () => {
  const [payments, setPayments] = useState([]);
  const [newPayment, setNewPayment] = useState('');
  const [amount, setAmount] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddPayment = () => {
    if (!newPayment || !amount) return;
    setPayments([...payments, { name: newPayment, amount: amount }]);
    setNewPayment('');
    setAmount('');
  };

  const handleDeletePayment = (index) => {
    const updatedPayments = payments.filter((_, i) => i !== index);
    setPayments(updatedPayments);
  };

  const handleEditPayment = (index) => {
    const editedPayments = [...payments];
    editedPayments[index].name = newPayment;
    editedPayments[index].amount = amount;
    setPayments(editedPayments);
    setNewPayment('');
    setAmount('');
    setEditingIndex(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter payment"
          value={newPayment}
          onChangeText={setNewPayment}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter amount"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
        />
        <Button title={editingIndex !== null ? 'Edit Payment' : 'Add Payment'} onPress={() => editingIndex !== null ? handleEditPayment(editingIndex) : handleAddPayment()} />
      </View>
      <FlatList
        data={payments}
        renderItem={({ item, index }) => (
          <View style={styles.payment}>
            <Text>{item.name} - ${item.amount}</Text>
            <View style={styles.buttons}>
              <Button title="Edit" onPress={() => { setNewPayment(item.name); setAmount(item.amount.toString()); setEditingIndex(index); }} />
              <Button title="Delete" onPress={() => handleDeletePayment(index)} />
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  payment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttons: {
    flexDirection: 'row',
  },
});

export default PaymentsScreen;

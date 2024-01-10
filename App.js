import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

const ObraPadreCacho = () => {
  const [clients, setClients] = useState([
    { id: 1, name: 'Client A', weight: 0 },
    { id: 2, name: 'Client B', weight: 0 },
    { id: 3, name: 'Client C', weight: 0 },
  ]);
  const [totalWeight, setTotalWeight] = useState(0);
  const [comment, setComment] = useState('');

  const addWeight = (clientId, weight) => {
    const newClients = clients.map((client) => {
      if (client.id === clientId) {
        const newWeight = client.weight + weight;
        setTotalWeight((prevTotal) => prevTotal + weight);
        return { ...client, weight: newWeight };
      }
      return client;
    });
    setClients(newClients);
  };

  const submitObraPadreCacho = () => {
    // Handle any submission logic here
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Obra Padre Cacho</Text>
        </View>
        <View style={styles.clientContainer}>
          {clients.map((client) => (
            <View key={client.id} style={styles.client}>
              <Text>{client.name}</Text>
              <View style={styles.weightInputContainer}>
                <TextInput
                  style={styles.weightInput}
                  keyboardType="numeric"
                  placeholder="Enter weight"
                  onChangeText={(text) => addWeight(client.id, parseInt(text))}
                />
                <Text style={styles.kgText}>kg</Text>
              </View>
            </View>
          ))}
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={submitObraPadreCacho}>
          <Text>SUBMIT</Text>
        </TouchableOpacity>
        <Text>Total weight: {totalWeight} kg</Text>
        <TextInput
          style={styles.commentInput}
          multiline
          numberOfLines={4}
          onChangeText={(text) => setComment(text)}
          placeholder="Enter comments"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    marginTop: 100,
    marginBottom: 100,
  },
  clientContainer: {
    marginBottom: 10,
  },
  client: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  weightInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weightInput: {
    width: 60,
    textAlign: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    height: 40,
  },
  kgText: {
    marginLeft: 5,
  },
  submitButton: {
    alignItems: 'center',
    backgroundColor: '#2196F3',
    padding: 10,
    marginBottom: 10,
  },
  commentInput: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});

export default ObraPadreCacho;
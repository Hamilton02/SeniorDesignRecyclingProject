// MainScreen.js
import React ,{useState}from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Header from './Components/header';
import DropdownSection from './Components/picker';
import Entry from './Components/entry'
import Dashboard from './Components/dashboard';
const MainScreen = () => {
  const [entries, setEntries] = useState([]);
  const [totalBags, setTotalBags] = useState(0);
  const [totalWeight, setTotalWeight] = useState(0);
  const handleAddEntry = (color, bags, weight) => {
    const newEntry = { color, bags: parseInt(bags), weight: parseInt(weight) };
    setEntries([...entries, newEntry]);
    setTotalBags(prevTotalBags => prevTotalBags + parseInt(bags));
    setTotalWeight(prevTotalWeight => prevTotalWeight + parseInt(weight));
  };

  const handleRemoveEntry = (index) => {
    const entryToRemove = entries[index];
    if (!entryToRemove) return;
  
    setEntries(entries.filter((_, entryIndex) => entryIndex !== index));
    setTotalBags(prevTotalBags => prevTotalBags - entryToRemove.bags);
    setTotalWeight(prevTotalWeight => prevTotalWeight - entryToRemove.weight);
  };
  
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <DropdownSection />
      <Entry onAdd={handleAddEntry} />
      <Dashboard entries={entries} totalBags={totalBags} totalWeight={totalWeight}  onRemove={handleRemoveEntry} />
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  // ...rest of your styles
});

export default MainScreen;

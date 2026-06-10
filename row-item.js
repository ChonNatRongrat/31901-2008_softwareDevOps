import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function RowItems() {
  const items = ["One", "Two", "Three", "Four", "Five"];

  return (
    <View style={styles.container}>
      {items.map((item) => (
        <View key={item} style={styles.items}>
          <Text style={styles.text}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 50,
    padding: 10,
  },
  items: {
    height: 100,
    width: 100,
    justifyContent: 'center', // ให้เนื้อหาอยู่กึ่งกลาง (บน-ล่าง)
    alignItems: 'center',     // ให้เนื้อหาอยู่กึ่งกลาง (ซ้าย-ขวา)
    backgroundColor: 'lightgray',
    margin: 10,
  },
  text: {
    color: 'blue',
    fontSize: 20,
  },
});

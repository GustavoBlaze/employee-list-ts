import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, Text, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const banks: Bank[] = [
  {
    id: "001",
    agency: "4530",
    account: "102030-1",
    name: "Banco do Brasil",
  },
  {
    id: "237",
    agency: "8530",
    account: "902030-1",
    name: "Bradesco",
  },
  {
    id: "241",
    agency: "5000",
    account: "502030-1",
    name: "Itaú",
  },
  {
    id: "033",
    agency: "8530",
    account: "902030-1",
    name: "Santander",
  },
];

function getBankById(id: string): Bank | undefined {
  return banks.find((bank) => bank.id === id);
}

const ListEmployees: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([] as Employee[]);

  useEffect(() => {
    AsyncStorage.getItem("@myapp6p:employees")
      .then((payload) =>
        payload ? (JSON.parse(payload) as Employee[]) : ([] as Employee[])
      )
      .then(setEmployees);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={employees}
        keyExtractor={(item) => item?.id as string}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {Object.entries(item).map(([key, value]) => (
              <Text key={key}>{key}: {value}</Text>
            ))}

            {Object.entries(getBankById(item?.bankAndAgency?.split("/")[0])).map(([key, value]) => (
              <Text key={key}>{key}: {value}</Text>
            ))}
          </View>
        )}
      />
    </SafeAreaView>
  )
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#f0f2f5",
  },

  card: {
    backgroundColor: "#fff",
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
  }
});

export default ListEmployees;

import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'

import { SafeAreaView, ScrollView, StyleSheet, Alert } from 'react-native';
import {Input} from "../../components/Input";
import { Button } from '../../components/Button';

const message = (...args: any) => {
  console.log(...args);
  Alert.alert(...args);


  typeof window !== "undefined" && window.alert(...args);
};

const NewEmployee: React.FC = () => {
  const [data, setData] = useState<Employee>({} as Employee);

  function handleInputChange(field: keyof Employee, value: string) {
    setData({...data, [field]: value});
  }

  async function handleSubmit() {
    const employee: Employee = {
      id: String(new Date().getTime()),
      ...data
    }

    const employees = await AsyncStorage.getItem('@myapp6p:employees')
      .then(payload => payload ? JSON.parse(payload) as Employee[] : [] as Employee[]);

    await AsyncStorage.setItem('@myapp6p:employees', JSON.stringify([...employees, employee]));


    // Reset fields back to empty
    setData({
      name: '',
      document: '',
      bankAndAgency: '',
      bankAccount: '',
      salary: '',
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Input
        placeholder='Nome'
        value={data?.name || ""}
        onChangeText={value => handleInputChange('name', value)}
      />

      <Input
        placeholder='CPF'
        value={data?.document || ""}
        onChangeText={value => handleInputChange('document', value)}
      />

      <Input
        placeholder='Banco/Agência'
        value={data?.bankAndAgency || ""}
        onChangeText={value => handleInputChange('bankAndAgency', value)}
      />

      <Input
        placeholder='Conta'
        value={data?.bankAccount || ""}
        onChangeText={value => handleInputChange('bankAccount', value)}
      />

      <Input
        placeholder='Salário'
        value={data?.salary || ""}
        onChangeText={value => handleInputChange('salary', value)}
      />

      <Button
        title='Incluir'
        onPress={handleSubmit}
      />
      </ScrollView>
    </SafeAreaView>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f0f2f5'
  }
})

export default NewEmployee;
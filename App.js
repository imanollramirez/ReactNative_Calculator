import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";
import { useEffect, useState } from "react";

export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  const Sumar = async() => {
    const res = parseFloat(num1) + parseFloat(num2);
    setResult(res);
  };

  const Restar = () => {
    const res = parseFloat(num1) - parseFloat(num2);
    setResult(res);
  };

  const Multiplicar = () => {
    const res = parseFloat(num1) * parseFloat(num2);
    setResult(res);
  };

  const Dividir = () => {
    const res = parseFloat(num1) / parseFloat(num2);
    setResult(res);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Imanol's Calculator</Text>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text>Ingrese un número</Text>
        <TextInput placeholder="0" onChangeText={setNum1} />
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text>Ingrese un número</Text>
        <TextInput placeholder="0" onChangeText={setNum2} />
      </View>

      <Button title="Sumar" onPress={Sumar}></Button>
      <Button title="Restar" onPress={Restar}></Button>
      <Button title="Multiplicar" onPress={Multiplicar}></Button>
      <Button title="Dividir" onPress={Dividir}></Button>

      <Text>Resultado: {result}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 50,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

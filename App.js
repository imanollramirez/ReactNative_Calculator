import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";
import { useEffect, useState } from "react";

export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  const Sumar = async () => {
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

  const Limpiar = () => {
    setNum1("") 
    setNum2("")
    setResult(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Imanol's Calculator</Text>

      <View style={{ justifyContent: "center", alignItems: "center", margin: 10 }}>
        <Text style={{ margin: 10 }}>Ingrese un número</Text>
        <TextInput placeholder="0" onChangeText={setNum1} style={styles.numeros} value={num1}/>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center", margin: 10 }}>
        <Text style={{ margin: 10 }}>Ingrese un número</Text>
        <TextInput placeholder="0" onChangeText={setNum2} style={styles.numeros} value={num2}/>
      </View>

      <Button title="Sumar" onPress={Sumar}></Button>
      <Button title="Restar" onPress={Restar}></Button>
      <Button title="Multiplicar" onPress={Multiplicar}></Button>
      <Button title="Dividir" onPress={Dividir}></Button>
      <Button title="Limpiar" onPress={Limpiar}></Button>

      <Text style={{ marginTop: 20, fontSize: 20, fontWeight: 'bold' }}>Resultado: {result}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2fdff",
    alignItems: "center",
    paddingTop: 50,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 100,
    marginBottom: 100
  },
  numeros: {
    fontSize: 15,
    backgroundColor: '#eeeeee',
    width: 100,
    textAlign: "center",
    height: 20
  }
});

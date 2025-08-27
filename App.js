
import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function App() {

  const [contador, setContador] = useState(0)

  const handleIncrement = () => {
    setContador(contador + 1)
  }

  const handleDecrement = () => {
    contador > 0 && setContador(contador - 1)
  }

  const handleReset = () => {
    setContador(0)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Contador</Text>
      </View>

      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>{contador}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.decrementButton]} onPress={handleDecrement} activeOpacity={0.8}>
          <Text style={styles.buttonText}>−</Text>
          <Text style={styles.buttonLabel}>Diminuir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.incrementButton]} onPress={handleIncrement} activeOpacity={0.8}>
          <Text style={styles.buttonText}>+</Text>
          <Text style={styles.buttonLabel}>Aumentar</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={handleReset} activeOpacity={0.8}>
        <Text style={styles.resetButtonText}>↻ Zerar</Text>
      </TouchableOpacity>

      <StatusBar style="light" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f20",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 70,
  },
  title: {
    fontSize: 45,
    fontWeight: "300", 
    color: "#ffffff",
    letterSpacing: 8,
    textAlign: "center",
  },
  counterContainer: {
    backgroundColor: "#1a1a2e",
    borderRadius: 50,
    paddingVertical: 30,
    paddingHorizontal: 60,
    marginBottom: 80,
    shadowColor: "#4f46e5",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 12,
    borderWidth: 1,
    borderColor: "#d9d",
  },
  counterText: {
    fontSize: 120,
    fontWeight: "bold", 
    color: "#ffffff",
    textAlign: "center",
    textShadowColor: "#4f46e5",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },
  buttonContainer: {
    flexDirection: "row", 
    marginBottom: 30,
    gap: 20,
  },
  button: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 16,
    shadowColor: "rgb(16, 201, 233)",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    minWidth: 120,
    alignItems: "center",
  },
  incrementButton: {
    backgroundColor: "rgb(255, 0, 151)",
    borderWidth: 1,
    borderColor: "rgb(255, 0, 151)",
  },
  decrementButton: {
    backgroundColor: "rgb(106, 90, 205)",
    borderWidth: 1,
    borderColor: "rgb(106, 90, 205)",
  },
  resetButton: {
    backgroundColor: "rgb(0, 0, 101)",
    borderWidth: 1,
    borderColor: "rgb(0, 0, 101)",
    paddingHorizontal: 40,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 4,
  },
  buttonLabel: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
    opacity: 0.9,
  },
  resetButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
})

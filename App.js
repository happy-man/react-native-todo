import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

let key = 1;

export default function App() {
  const [todos, setTodos] = useState([]);

  const todoPressHandler = (key) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.key !== key));
  };

  const todoAddHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => [{ text, key: `${key++}` }, ...prevTodos]);
      return true;
    } else {
      Alert.alert("Oops...", "todos must be over 3 chars long", [
        {
          text: "Got it!",
          onPress: () => console.log("Got it!"),
        },
      ]);
      return false;
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo onButtonPress={todoAddHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} onPress={todoPressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});

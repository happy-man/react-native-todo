import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
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
    setTodos((prevTodos) => [{ text, key: key++ }, ...prevTodos]);
  };

  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});

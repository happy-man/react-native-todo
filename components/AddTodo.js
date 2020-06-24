import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";

export default function AddTodo({ onButtonPress }) {
  const [text, setText] = useState("");

  const changeHandler = (text) => setText(text);

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New todo..."
        onChangeText={changeHandler}
        value={text}
      />
      <Button
        onPress={() => {
          onButtonPress(text);
          setText("");
        }}
        title="add todo"
        color="coral"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

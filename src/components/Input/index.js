import React from 'react';
import {Text, View} from 'react-native';
import {func, string} from 'prop-types';
import {TextInput} from 'react-native-gesture-handler';
import styles from './styles';

const Input = ({label, onChangeText, value}) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputBorder}>
        <TextInput
          onChangeText={onChangeText}
          value={value}
          style={styles.textInput}
        />
      </View>
    </>
  );
};

Input.propTypes = {
  label: string.isRequired,
  value: string.isRequired,
  onChangeText: func.isRequired,
};

export default Input;

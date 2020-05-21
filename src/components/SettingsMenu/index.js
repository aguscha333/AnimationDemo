import React from 'react';
import {Text, View, Modal} from 'react-native';
import {func, bool} from 'prop-types';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SettingsMenu = ({updateSettings, visible}) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <Text>Settings Screen</Text>
        <TouchableOpacity onPress={() => updateSettings({duration: 10000})}>
          <Text>Update</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

SettingsMenu.propTypes = {
  updateSettings: func.isRequired,
  visible: bool.isRequired,
};

export default SettingsMenu;

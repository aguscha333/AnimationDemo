import React, {useState} from 'react';
import {Text, View, Modal, Image, TouchableOpacity} from 'react-native';
import {func, bool} from 'prop-types';
import cross from '../../assets/cross/default.png';
import styles from './styles';
import Input from '../Input';

const SettingsMenu = ({updateSettings, visible, settings, close}) => {
  const [duration, setDuration] = useState(settings.duration);

  return (
    <Modal visible={visible} transparent={true} style={styles.modal}>
      <View style={styles.modal}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => close()} style={styles.cross}>
            <Image source={cross} style={styles.icon} resizeMode="cover" />
          </TouchableOpacity>
          <Text style={styles.title}>Settings Screen</Text>
          <Input label="Duration" value={duration} onChangeText={setDuration} />
          <TouchableOpacity
            onPress={() => {
              var durationValue = parseInt(duration);
              updateSettings({duration: durationValue});
            }}>
            <Text style={styles.updateButton}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

SettingsMenu.propTypes = {
  updateSettings: func.isRequired,
  visible: bool.isRequired,
  close: func.isRequired,
};

export default SettingsMenu;

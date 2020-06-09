import React, {useState} from 'react';
import {Text, View, Modal, Image, TouchableOpacity} from 'react-native';
import {func, bool} from 'prop-types';
import cross from '../../assets/cross/default.png';
import styles from './styles';
import Input from '../Input';

const SettingsMenu = ({updateSettings, visible, settings, close}) => {
  const [duration, setDuration] = useState(settings.duration.toString());
  const [initialX, setInitialX] = useState(settings.initialX.toString());
  const [finalX, setFinalX] = useState(settings.finalX.toString());
  const [initialY, setInitialY] = useState(settings.initialY.toString());
  const [finalY, setFinalY] = useState(settings.finalY.toString());

  return (
    <Modal
      visible={visible}
      presentationStyle="formSheet"
      animationType="slide">
      <View style={styles.modal}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => close()} style={styles.cross}>
            <Image source={cross} style={styles.icon} resizeMode="cover" />
          </TouchableOpacity>
          <Text style={styles.title}>Settings</Text>
          <Input label="Duration" value={duration} onChangeText={setDuration} />
          <View style={styles.row}>
            <View style={styles.leftInput}>
              <Input
                label="Initial x"
                value={initialX}
                onChangeText={setInitialX}
              />
            </View>
            <View style={styles.rightInput}>
              <Input
                label="Final x"
                value={`${finalX}`}
                onChangeText={setFinalX}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.leftInput}>
              <Input
                label="Initial y"
                value={initialY}
                onChangeText={setInitialY}
              />
            </View>
            <View style={styles.rightInput}>
              <Input label="Final y" value={finalY} onChangeText={setFinalY} />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              var durationValue = parseInt(duration) || settings.duration;
              var initialXValue = parseInt(initialX) || settings.initialX;
              var finalXValue = parseInt(finalX) || settings.finalX;
              var initialYValue = parseInt(initialY) || settings.initialY;
              var finalYValue = parseInt(finalY) || settings.finalY;
              updateSettings({
                ...settings,
                duration: durationValue,
                initialX: initialXValue,
                finalX: finalXValue,
                initialY: initialYValue,
                finalY: finalYValue,
              });
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

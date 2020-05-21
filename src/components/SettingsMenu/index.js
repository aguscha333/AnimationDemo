import React, {useState} from 'react';
import {Text, View, Modal, Image, TouchableOpacity} from 'react-native';
import {func, bool} from 'prop-types';
import cross from '../../assets/cross/default.png';
import styles from './styles';
import Input from '../Input';

const SettingsMenu = ({updateSettings, visible, settings, close}) => {
  const [duration, setDuration] = useState(settings.duration);
  const [initialX, setInitialX] = useState(settings.initialX);
  const [finalX, setFinalX] = useState(settings.finalX);
  const [initialY, setInitialY] = useState(settings.initialY);
  const [finalY, setFinalY] = useState(settings.finalY);

  return (
    <Modal visible={visible} transparent={true} style={styles.modal}>
      <View style={styles.modal}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => close()} style={styles.cross}>
            <Image source={cross} style={styles.icon} resizeMode="cover" />
          </TouchableOpacity>
          <Text style={styles.title}>Settings Screen</Text>
          <Input label="Duration" value={duration} onChangeText={setDuration} />
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 2, paddingRight: 10}}>
              <Input
                label="Initial x"
                value={initialX}
                onChangeText={setInitialX}
              />
            </View>
            <View style={{flex: 2, paddingLeft: 10}}>
              <Input label="Final x" value={finalX} onChangeText={setFinalX} />
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 2, paddingRight: 10}}>
              <Input
                label="Initial y"
                value={initialY}
                onChangeText={setInitialY}
              />
            </View>
            <View style={{flex: 2, paddingLeft: 10}}>
              <Input label="Final y" value={finalY} onChangeText={setFinalY} />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              var durationValue = parseInt(duration) || values.duration;
              var initialXValue = parseInt(initialX) || values.initialX;
              var finalXValue = parseInt(finalX) || values.finalX;
              var initialYValue = parseInt(initialY) || values.initialY;
              var finalYValue = parseInt(finalY) || values.finalY;
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

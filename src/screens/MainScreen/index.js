import React, {useState, useEffect} from 'react';
import {Animated, View, Text} from 'react-native';

import useAnimate from '../../hooks/useAnimate';

import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import SettingsMenu from '../../components/SettingsMenu';

const MainScreen = () => {
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const [values, setValues] = useState({duration: 200});
  const animatedOpacity = useAnimate({
    fromValue: 0,
    toValue: 1,
    bounce: true,
    iterations: -1,
    duration: values.duration,
  });

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => setShowSettingsMenu(true)}>
        <Text>Settings</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <SettingsMenu
          visible={showSettingsMenu}
          updateSettings={(settings) => {
            setShowSettingsMenu(false);
            setValues(settings);
          }}
        />
        <Animated.View style={[styles.box, {opacity: animatedOpacity}]} />
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

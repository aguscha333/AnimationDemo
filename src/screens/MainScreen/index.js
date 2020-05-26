import React, {useState} from 'react';
import {Animated, View, Image} from 'react-native';
import settingsIcon from '../../assets/settingsIcon/default.png';
import useAnimate from '../../hooks/useAnimate';
import useAnimateParallel from '../../hooks/useAnimateParallel';

import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import SettingsMenu from '../../components/SettingsMenu';

const MainScreen = () => {
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const [values, setValues] = useState({
    duration: 200,
    initialX: 0,
    finalX: 100,
    initialY: 0,
    finalY: 100,
  });

  const animatedOpacity = useAnimate({
    fromValue: 0,
    toValue: 1,
    bounce: true,
    duration: values.duration,
    animate: false,
  });

  const animatedX = useAnimate({
    fromValue: values.initialX,
    toValue: values.finalX,
    bounce: true,
    duration: values.duration,
    animate: false,
  });

  const animatedY = useAnimate({
    fromValue: values.initialY,
    toValue: values.finalY,
    bounce: true,
    duration: values.duration,
    animate: false,
  });

  useAnimateParallel({
    animations: [animatedOpacity, animatedX, animatedY],
    iterations: -1,
  });

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <TouchableOpacity onPress={() => setShowSettingsMenu(true)}>
        <Image source={settingsIcon} style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.container}>
        <SettingsMenu
          visible={showSettingsMenu}
          settings={values}
          close={() => setShowSettingsMenu(false)}
          updateSettings={(settings) => {
            setShowSettingsMenu(false);
            setValues(settings);
          }}
        />
        <Animated.View
          style={[
            styles.box,
            {
              opacity: animatedOpacity.animatedValue,
              left: animatedX.animatedValue,
              top: animatedY.animatedValue,
            },
          ]}
        />
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

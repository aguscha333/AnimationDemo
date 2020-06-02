import React, {useState, useCallback, useEffect} from 'react';
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

  const randomColor = () => {
    return (
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')'
    );
  };

  const [values, setValues] = useState({
    duration: 300,
    initialX: 0,
    finalX: 100,
    initialY: 0,
    finalY: 100,
  });

  const [animatedColors, setAnimatedColors] = useState({
    initialColor: randomColor(),
    finalColor: randomColor(),
  });

  const animateConfig = {
    bounce: true,
    duration: values.duration,
    animate: false,
  };

  const animatedOpacity = useAnimate({
    fromValue: 1,
    toValue: 1,
    ...animateConfig,
  });

  const animatedX = useAnimate({
    fromValue: values.initialX,
    toValue: values.finalX,
    ...animateConfig,
  });

  const animatedY = useAnimate({
    fromValue: values.initialY,
    toValue: values.finalY,
    ...animateConfig,
  });

  const animatedRotation = useAnimate({
    iterations: -1,
    duration: 800,
    animate: false,
  });

  const colorAnimation = useAnimate({
    duration: 1200,
    iterations: -1,
    bounce: true,
    callback: () => {
      setAnimatedColors({
        initialColor: animatedColors.finalColor,
        finalColor: randomColor(),
      });
    },
  });

  useAnimateParallel({
    animations: [animatedOpacity, animatedX, animatedY, animatedRotation],
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
              backgroundColor: colorAnimation.interpolate({
                outputRange: [
                  animatedColors.initialColor,
                  animatedColors.finalColor,
                ],
              }),
              transform: [
                {
                  rotate: animatedRotation.interpolate({
                    outputRange: ['0deg', '360deg'],
                  }),
                },
              ],
            },
          ]}
        />
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

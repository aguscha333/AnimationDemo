import React, {useCallback, useState} from 'react';
import {Animated} from 'react-native';

import {randomColor} from '../../../utils';
import {useAnimate, useAnimateParallel} from '../../../hooks';
import styles from './styles';

const ParallelAnimatedBox = () => {
  const firstValues = {
    duration: 1000,
    initialX: 0,
    finalX: 100,
    initialY: 0,
    finalY: 100,
  };

  const [animatedColors, setAnimatedColors] = useState({
    initialColor: randomColor(),
    finalColor: randomColor(),
  });

  const animateConfig = {
    bounce: true,
    duration: firstValues.duration,
    animate: true,
    iterations: -1,
  };

  const animatedX = useAnimate({
    fromValue: firstValues.initialX,
    toValue: firstValues.finalX,
    ...animateConfig,
  });

  const animatedY = useAnimate({
    fromValue: firstValues.initialY,
    toValue: firstValues.finalY,
    ...animateConfig,
  });

  const animatedRotation = useAnimate(animateConfig);

  const colorAnimationCallback = useCallback(() => {
    setAnimatedColors({
      initialColor: animatedColors.finalColor,
      finalColor: randomColor(),
    });
  }, [animatedColors.finalColor]);

  const colorAnimation = useAnimate({
    ...animateConfig,
    callback: colorAnimationCallback,
  });

  useAnimateParallel({
    animations: [animatedX, animatedY, animatedRotation],
    iterations: -1,
  });

  return (
    <Animated.View
      style={[
        styles.box,
        {
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
  );
};

export default ParallelAnimatedBox;

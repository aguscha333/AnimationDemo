import {useEffect, useRef, useCallback} from 'react';
import {Animated} from 'react-native';

const useAnimate = ({
  fromValue = 0,
  toValue = 1,
  bounce = false,
  iterations = 1,
  duration = 200,
  useNativeDriver = false,
  animate = true,
}) => {
  const animatedValue = useRef(new Animated.Value(fromValue)).current;

  const baseConfig = {
    duration,
    useNativeDriver,
  };

  const sequence = [
    Animated.timing(animatedValue, {
      toValue,
      ...baseConfig,
    }),
  ];

  if (bounce) {
    sequence.push(
      Animated.timing(animatedValue, {
        toValue: fromValue,
        ...baseConfig,
      }),
    );
  }

  const sequenceAnimation = Animated.sequence(sequence);

  const animation =
    iterations === 1
      ? sequenceAnimation
      : Animated.loop(sequenceAnimation, {
          iterations,
        });

  const startAnimating = useCallback(() => {
    animate && animation.start();
  }, [animate, animation]);

  useEffect(startAnimating, [
    fromValue,
    toValue,
    bounce,
    duration,
    animate,
    startAnimating,
  ]);

  const interpolate = ({inputRange, outputRange}) =>
    animatedValue.interpolate({
      inputRange: inputRange || [fromValue, toValue],
      outputRange,
    });

  return {animation, interpolate, animatedValue};
};

export default useAnimate;

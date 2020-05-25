import {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

const useAnimate = ({
  fromValue,
  toValue,
  bounce = false,
  iterations = 1,
  duration = 200,
  useNativeDriver = false,
  name,
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

  return {animation, animatedValue};
};

export default useAnimate;

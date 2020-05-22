import {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

const useAnimate = ({
  fromValue,
  toValue,
  bounce = false,
  iterations = 1,
  duration = 200,
  useNativeDriver = false,
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const baseConfig = {
    duration,
    useNativeDriver,
  };

  const animate = () => {
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

    Animated.loop(Animated.sequence(sequence), {
      iterations,
    }).start();
  };

  useEffect(animate, [fromValue, toValue, bounce, duration]);

  return animatedValue;
};

export default useAnimate;

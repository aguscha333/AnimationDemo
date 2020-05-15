import {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

const useAnimate = ({
  fromValue,
  toValue,
  bounce = false,
  iterations = 1,
  duration = 200,
  useNativeDriver = true,
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const animate = () => {
    const sequence = [
      Animated.timing(animatedValue, {
        toValue,
        duration,
        useNativeDriver,
      }),
    ];

    if (bounce) {
      sequence.push(
        Animated.timing(animatedValue, {
          toValue: fromValue,
          duration,
        }),
      );
    }

    Animated.loop(Animated.sequence(sequence), {
      iterations,
    }).start();
  };

  useEffect(animate, [fromValue, toValue, bounce]);

  return animatedValue;
};

export default useAnimate;

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
  callback,
}) => {
  let leftIterations = useRef(iterations);
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

  const interpolate = useCallback(
    ({inputRange, outputRange}) =>
      animatedValue.interpolate({
        inputRange: inputRange || [fromValue, toValue],
        outputRange,
      }),
    [animatedValue, fromValue, toValue],
  );

  const animation =
    iterations === 1 || callback
      ? sequenceAnimation
      : Animated.loop(sequenceAnimation, {
          iterations,
        });

  const startAnimating = animation.start(() => {
    callback && callback();
  });

  useEffect(() => animate && startAnimating, [
    fromValue,
    toValue,
    bounce,
    duration,
    animate,
    startAnimating,
  ]);

  return {animation, interpolate, animatedValue};
};

export default useAnimate;

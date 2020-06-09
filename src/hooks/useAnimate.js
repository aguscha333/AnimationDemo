import {useEffect, useRef, useCallback, useMemo} from 'react';
import {Animated} from 'react-native';

const useAnimate = ({
  fromValue = 0,
  toValue = 1,
  bounce = false,
  iterations = 1,
  duration = 800,
  useNativeDriver = false,
  animate = true,
  callback,
}) => {
  let animatedValue = useRef(new Animated.Value(fromValue));
  let sequence = useRef([]);
  const baseConfig = {
    duration,
    useNativeDriver,
  };

  useEffect(() => {
    animatedValue.current = new Animated.Value(fromValue);
  }, [fromValue]);

  useEffect(() => {
    console.log(animatedValue.current);
  }, [fromValue]);
  // useEffect(() => {
  //   console.log(fromValue);
  // }, [fromValue]);
  // useEffect(() => {
  //   console.log(toValue);
  // }, [toValue]);
  // useEffect(() => {
  //   console.log(bounce);
  // }, [bounce]);
  // useEffect(() => {
  //   console.log(baseConfig);
  // }, [baseConfig]);

  // useEffect(() => {
  //   sequence.current = [
  //     Animated.timing(animatedValue.current, {
  //       toValue,
  //       ...baseConfig,
  //     }),
  //   ];

  //   if (bounce) {
  //     sequence.current.push(
  //       Animated.timing(animatedValue.current, {
  //         toValue: fromValue,
  //         ...baseConfig,
  //       }),
  //     );
  //   }
  // }, [animatedValue, fromValue, toValue, bounce, baseConfig]);

  sequence.current = [
    Animated.timing(animatedValue.current, {
      toValue,
      ...baseConfig,
    }),
  ];

  if (bounce) {
    sequence.current.push(
      Animated.timing(animatedValue.current, {
        toValue: fromValue,
        ...baseConfig,
      }),
    );
  }
  const sequenceAnimation = Animated.sequence(sequence.current);

  const interpolate = useCallback(
    ({inputRange, outputRange}) =>
      animatedValue.current.interpolate({
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

  // const animation = useMemo(() => {
  //   return iterations === 1 || callback
  //     ? sequenceAnimation
  //     : Animated.loop(sequenceAnimation, {
  //         iterations,
  //       });
  // }, [animatedValue, callback, iterations, sequenceAnimation]);

  const startAnimating = useCallback(() => {
    animation.start(() => {
      // callback && callback();
    });
  }, [animation]);

  useEffect(() => {
    // console.log('fromValue: ', fromValue);
    // console.log('toValue: ', toValue);
    animate && startAnimating && startAnimating();
  }, [fromValue, toValue, bounce, duration, animate, startAnimating]);

  return {animation, interpolate, animatedValue: animatedValue.current};
};

export default useAnimate;

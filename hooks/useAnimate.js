import {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

const useAnimate = ({
  fromValue,
  toValue,
  bounce = false,
  iterations = 1,
  duration = 200,
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const animate = () => {
    const sequence = [
      Animated.timing(animatedValue, {
        toValue,
        duration,
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

// const useAnimate = (inverted = false, listeningTo = [], avoidFirst = true) => {

//   const animate = () => {
//     Animated.timing(scale, {toValue: inverted ? 1 : 0, duration: 200}).start();
//   };

//   const interpolate = (range) =>
//     scale.interpolate({inputRange: [0, 1], outputRange: range});

//   const [isFirst, setIsFirst] = useState(true);

//   useEffect(() => {
//     (!avoidFirst || !isFirst) && animate();
//     setIsFirst(false);
//   }, listeningTo);

//   return interpolate;
// };

export default useAnimate;

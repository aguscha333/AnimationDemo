import {StyleSheet} from 'react-native';
import {WHITE, GREY, RED} from '../../constants/colors';

export default StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: RED,
    opacity: 0,
  },
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  icon: {
    height: 30,
    width: 30,
    tintColor: WHITE,
    margin: 15,
  },
  safeAreaView: {
    backgroundColor: GREY,
    flex: 1,
  },
});

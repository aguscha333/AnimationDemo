import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    opacity: 0,
  },
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  icon: {
    height: 30,
    width: 30,
    tintColor: 'white',
    margin: 15,
  },
  safeAreaView: {
    backgroundColor: 'grey',
    flex: 1,
  },
});

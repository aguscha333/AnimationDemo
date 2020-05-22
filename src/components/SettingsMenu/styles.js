import {StyleSheet} from 'react-native';
import {WHITE, BLACK} from '../../constants/colors';

export default StyleSheet.create({
  closeButton: {
    padding: 10,
    flex: 1,
    alignSelf: 'stretch',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: WHITE,
    borderRadius: 20,
  },
  cross: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  icon: {
    tintColor: BLACK,
  },
  leftInput: {
    flex: 2,
    paddingRight: 10,
  },
  modal: {
    justifyContent: 'center',
    flex: 1,
  },
  rightInput: {
    flex: 2,
    paddingLeft: 10,
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    paddingBottom: 30,
    color: BLACK,
  },
  updateButton: {
    overflow: 'hidden',
    marginTop: 50,
    padding: 15,
    backgroundColor: BLACK,
    borderRadius: 10,
    color: WHITE,
  },
});

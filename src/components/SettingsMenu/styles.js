import {StyleSheet} from 'react-native';

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
    backgroundColor: 'white',
    borderRadius: 20,
  },
  cross: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  icon: {
    tintColor: 'black',
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
    color: 'black',
  },
  updateButton: {
    overflow: 'hidden',
    marginTop: 50,
    padding: 15,
    backgroundColor: 'black',
    borderRadius: 10,
    color: 'white',
  },
});

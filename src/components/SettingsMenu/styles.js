import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  closeButton: {
    padding: 10,
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'red',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 100,
    backgroundColor: 'black',
    borderRadius: 5,
  },
  cross: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  icon: {
    tintColor: 'white',
  },
  modal: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    paddingBottom: 30,
    color: 'white',
  },
  updateButton: {
    overflow: 'hidden',
    margin: 20,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  inputBorder: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 15,
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    paddingVertical: 10,
    color: 'white',
  },
  textInput: {
    alignSelf: 'stretch',
    flex: 1,
    fontSize: 16,
    color: 'white',
    letterSpacing: 0.03,
    lineHeight: 21,
  },
});

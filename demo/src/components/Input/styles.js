import {StyleSheet} from 'react-native';
import {BLACK} from '../../constants/colors';

export default StyleSheet.create({
  inputBorder: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: BLACK,
    borderRadius: 5,
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 15,
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    paddingTop: 20,
    paddingBottom: 10,
    color: BLACK,
  },
  textInput: {
    alignSelf: 'stretch',
    flex: 1,
    fontSize: 16,
    color: BLACK,
    letterSpacing: 0.03,
    lineHeight: 21,
  },
});
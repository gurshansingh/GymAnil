import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#0c8ce9',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 150,
  },
  welcomeTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    padding: 15,
  },
  icon: {
    padding: 6,
    color: '#0c8ce9',
    paddingLeft: 8,
  },
  inputContainer: {
    backgroundColor: 'white',
    height: 45,
    width: width - 80,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 15,
  },
  input: {
    flex: 1,
    fontWeight: '600',
    fontSize: 16,
  },
  btnBox: {
    backgroundColor: '#f66',
    marginTop: 20,
    width: width - 80,
    padding: 12,
    borderRadius: 5,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export {styles};

import {StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor: '#0c8ce9',
    backgroundColor: '#000',
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
    padding: 5,
  },
});

export enum colorPallete {
  AMERICAN_PURPLE_DARK = '#3B2747',
  AMERICAN_PURPLE_MAIN = '#3B2747',
  CYBER_GRAPE = '#624185',
  MIDDLE_YELLOW_RED = '#F2AD73',
  BEER = '#FF8A12',
}

export {styles};

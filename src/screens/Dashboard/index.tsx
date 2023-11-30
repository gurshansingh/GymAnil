import {View, Text, StatusBar, FlatList} from 'react-native';
import React from 'react';
import {colorPallete, styles} from './style';
import {DashboardCard} from '../../components';
import LinearGradient from 'react-native-linear-gradient';

const cardData = [
  {
    cardTitle: 'Active Members',
    cardDesc: 'Total no of active members',
    value: 30,
  },
  {
    cardTitle: 'Incomplete Profile',
    cardDesc: "Members who didn't submit documents",
    value: 30,
  },
  {
    cardTitle: 'Outstanding',
    cardDesc: "Members who didn't pay their outstanding",
    value: 30,
  },
  {
    cardTitle: 'Total Members',
    cardDesc: 'Count of Total no of members from beginning',
    value: 30,
  },
  {
    cardTitle: 'Canceled Memberships',
    cardDesc: 'No of members who leave the gym for some reason',
    value: 30,
  },
];
const Dashboard = ({navigation}: any) => {
  return (
    <LinearGradient
      colors={[colorPallete.CYBER_GRAPE, colorPallete.BEER]}
      style={styles.mainContainer}>
      <StatusBar
        backgroundColor={'black'}
        translucent
        barStyle={'light-content'}
      />
      <FlatList
        data={cardData}
        renderItem={(items: any) => (
          <DashboardCard item={items.item} navigation={navigation} />
        )}
        numColumns={2}
        ListHeaderComponent={() => <View style={{margin: 10}} />}
      />
    </LinearGradient>
  );
};

export default Dashboard;

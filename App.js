import { StyleSheet, Text, View, FlatList } from 'react-native';
import Bar from './bar';
import {data} from './data'

export default function App() {
  let values = [];
  data.map(item => {
    values.push(item.hei)
  })
  let maxValue = Math.max(...values);

  let monAvg = 0;
  const getDays = (year, month) => {
    let obj = data[month-1].hei;
    let date = new Date(year, month, 0).getDate();
    monAvg = Math.round(obj/date)
    console.log(monAvg)
  };

  const renderItem = (val, i) => (
    <Bar data={val} max={maxValue} days={getDays} key={i}/>
  );
  let totalOrders = 0;
  for(let i=0; i < values.length; i++){
    totalOrders += values[i]
  }
  let average = Math.round(totalOrders /values.length )

  return (
    <View style={styles.container}>
      <View style={styles.graph}>
        <View style={styles.head}>
          <Text>Monthly Orders</Text>
        </View>
        <FlatList
          data={data}
          horizontal={true}
          renderItem={renderItem}
          keyExtractor={item => item.mon}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, alignItems: 'flex-end', justifyContent:'space-evenly' }}
        />
      </View>
      <View>
        <View style={styles.card}>
          <Text>Yearly Average orders</Text>
          <Text>{average}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection:'column',
    paddingHorizontal:20
  },
  graph:{
    width:'100%',
    height:235,
    alignItems:'center',
    overflow:'hidden',
    backgroundColor:'#f0f0f0',
    borderRadius:15,
    padding:20
  },
  head:{
    witdh:'100%',
    height:40,
  },
  card:{
    width:'auto',
    height:'auto',
    backgroundColor:'#f0f0f0',
    borderRadius: 15,
    padding:20,
    marginTop:20
  }
});

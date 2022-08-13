import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Bar({data, max, days }){
    let tot;
    if(max <= 50){ tot = 50 }else tot = max;
    let totalheight = Math.round((data.item.hei / tot) * 100);
    return(
        <TouchableOpacity style={styles.totalBar} onPress={() => days(2022, data.item.id)}>
            <Text style={[styles.data, {marginBottom:5}]}>{data.item.hei}</Text>
            <View style={styles.back}>
                <LinearGradient
                    colors={['#0f0c29', '#302b63']}
                    style={[styles.bar, { height: totalheight }]}>
                </LinearGradient>
            </View>
            <Text style={styles.data}>{data.item.mon}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    bar: {
        borderRadius: 5,
        width: 25,
    },
    totalBar:{
        width: 40,
        height:'auto',
        alignItems:'center',
        marginHorizontal:5
    },
    data:{
        fontSize:13,
        textTransform:'capitalize',
        marginTop:10
    },
    back:{
        width:25,
        height:100,
        backgroundColor:'#e8e8e8',
        borderRadius: 5,
        alignItems: 'center',
        overflow:'hidden',
        justifyContent:'flex-end'
    }
});
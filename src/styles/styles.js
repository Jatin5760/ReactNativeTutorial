import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    text:{
        fontSize: 30,
        color:"white",
        backgroundColor:'purple',
        padding:18,
        borderRadius:30
    },
    heading:{
        fontSize: 30,
        color: 'crimson',
        fontWeight:'bold',
        textAlign:'center',
        marginVertical: 15,
        marginTop: 50,
    },
    list:{
        backgroundColor:"#f0f0f0",
        paddingHorizontal:20
    },
    item:{
        backgroundColor:'crimson',
        padding:15,
        marginVertical:8,
        borderRadius:8,
    },
    name:{
        fontSize:18,
        fontWeight:'bold',
        color:'#fff',
    },
    email:{
        fontSize:16,
        color:'yellow'
    }
})

export default styles
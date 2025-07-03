import { View, Text, Button } from 'react-native'

export default function Child(props) {
  console.log(props.data);
  return (
    <View>
      <Text style={{fontSize: 30}}>Child</Text>
      <Text style={{fontSize: 30}}>{props.data[0]}</Text>
      <Text style={{fontSize: 30}}>{props.data[1]}</Text>
    </View>
  )
}
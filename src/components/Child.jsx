import { View, Text, Button } from 'react-native'

export default function Child({counting, counting_items}) {

  return (
    <View>
      <Text style={{fontSize: 30}}>Child</Text>
      <Text style={{fontSize: 30}}>{counting}</Text>
      <Text style={{fontSize: 30}}>{counting_items}</Text>
    </View>
  )
}
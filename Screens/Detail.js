import React, {
  Text,
} from 'react-native';

const Detail = ({navigation, route : {params}}) => {
  console.log(params)
  return (
    <>
    <Text>Detail</Text>
    </>
  )
}

export default Detail;
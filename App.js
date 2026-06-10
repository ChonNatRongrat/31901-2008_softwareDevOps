import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
// import { StatusBar } from 'expo- status-bar';

//------------------------------------------------------------

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>!! welcome !!</Text>
//       <Text>Nat Rongrat 68319010005 สทส.2/1</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

//------------------------------------------------------------

// export default function App() {
//   return (
//     <view>
//       <text>
//         แอพนี้สร้างโดย นาย ณัฎฐ์ รงค์รัตน์
//       </text>
//     </view>
//   )
// }

//------------------------------------------------------------

// import MyComponent from './my-component';

// export default function App() {
//   return <MyComponent/>;
// }

//------------------------------------------------------------

// export default function App() {
//   const textTitle = {
//     fontWeight: 'bold',
//     fontSize: 20
//   }
//   const textPlain = { fontSize: 16 }

//   return (
//     <View>
//       <Text style={textTitle}>React 005</Text>
//       <Text style={textPlain}>JavaScript Framework ... 005</Text>
//     </View>
//   );
// }

//------------------------------------------------------------

// export default function App() {

//   const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'lightgray',
//     padding: 20,
//     paddingTop: 30
//   },
//   textTitle: {
//     color: 'blue',
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginTop: 15,
//   },
//   textPlain: { fontSize: 16 }
// })


//     return (
//         <View style={styles.container}>
//             <Text style={styles.textTitle}>React</Text>
//             <Text style={styles.textPlain}>JavaScript Framework 005</Text>
//             <Text style={styles.textTitle}>React Native</Text>
//             <Text style={styles.textPlain}>JavaScript Framework 005</Text>
//         </View>
//     )
// }

//------------------------------------------------------------

// import ColumnItems from '../myapp005/column-item';
import RowItems from '../myapp005/row-item';
// export default function App() {
//   return <ColumnItems/>;
// }
export default function App() {
  return <RowItems/>;
}

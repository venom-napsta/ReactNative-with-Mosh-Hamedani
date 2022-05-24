import React from 'react'
import { View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
// import AppText from './components/AppText'

// simply reference the folder coz of index.js
// import AppText2 from './styleComponents/OrganizingStyles' 
import AppButton from './styleComponents/ButtonComponent'

const Styling = () => {
    return (
            <AppButton title='Login'/>
    )
}

export default Styling


// 1. All About Borders

// backgroundColor: 'dodgerblue',
// width: 100,
// height: 100,
// // borderWidth: 10,
// // borderColor: 'royalblue',
// // borderRadius: 50, // ie 0.5 of the width
// // borderTopWidth: 20,
// // borderTopLeftRadius:50

// 2. All About Shadows

// a. iOS ==>
//      shadowCOlor:'grey'
//      shadowOffset: {width:10, height: 10} //det angle of the shadow -10==left
//      shadowOpacity: 1, // how dark the shadow should be
//      shadowRadius: 10    // make shadow softer
// b. Android
//      elevations: 20 

// 3. Padding(space inside a component) and Margin(space outside)

{/* <View
style ={{
    backgroundColor: 'dodgerblue',
    width: 200,
            height: 200,
            padding: 40, // 40 inside blue,
            paddingHorizontal: 10, //padding left ie it overwrite above state
            paddingLeft: 60  // agin overwites above
        }}>
        <View
            style={{
                backgroundColor: 'gold',
                width: 100,
                height: 100,
                margin: 30
            }}/>
            <View 
            style ={{
                backgroundColor: 'tomato',
                width: 200,
                height: 200,
                margin: 10 //useful when there is no space between elements 
            }}
            >
            </View>
        </View> */}

// 4. Text

{/* <Text style={{
        // fontFamily:'' search for supported fonts
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: '100',
        color: 'tomato',
        textTransform: 'capitalize',
        // textDecorationLine: 'line-through'
        textAlign: 'center',
        lineHeight: 50
    }} >Hello, this is my first React Native Text, it should be long, well maybe long enough.</Text> */}


// 5. StyleEncapsulation

{/* <AppText>hello</AppText> */ }
// 6. Icons

{/* <MaterialCommunityIcons name='email' size={200} color='dodgerblue' /> */ }










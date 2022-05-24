// App.js of App Picker

import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Screen from './app/screens/screenComponents/Screen';
import AppPicker from './notes/styleComponents/InputComponents/AppPicker';
import AppTextInput from './notes/styleComponents/InputComponents/AppTextInput';

const categories = [
    { label: 'Furniture', value: 1 },
    { label: 'Clothing', value: 2 },
    { label: 'Cameras', value: 3 }
]
export default function App() {
    const [category, setCategory] = useState(categories[0])
    return (
        <Screen style={styles.screen}>
            <AppPicker selectedItem={category} onSelectItem={item => setCategory(item)} items={categories} icon='apps' placeholder='Category' />
            <AppTextInput icon='email' placeholder='Email' />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

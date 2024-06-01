import React from 'react';
import { StyleSheet,TouchableOpacity, Text } from 'react-native';

const MainButton = ({onPress, ButtonTitle}) => {
    return (
        <TouchableOpacity
        style={styles.btnStyle}
        onPress={onPress}
      >
        <Text style={styles.btnText}>{ButtonTitle}</Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btnStyle: {
        width: "100%",
        height: 56,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary100,
        marginTop: 15,
        marginBottom:12,
        textAlign:'center'
        
      },
    
      btnText: {
        fontFamily: "SemiBold",
        color: "white",
        fontSize: 16,
        // fontWeight:'700',
        fontFamily:'Nunito-SemiBold'
      },
})

export default MainButton;

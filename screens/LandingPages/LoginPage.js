import React, { Component } from 'react'
import { Text, View,StyleSheet,Image, TextInput, TouchableOpacity } from 'react-native'

export class LoginPage extends Component {
    render() {
        return (
            <View style={{flex:1, justifyContent:"space-between"}}>

            <View style={styles.header}>
             <Text style={styles.headerText}>Kleine.</Text>
            </View>

            <View style={styles.mainTextView}>
            <Text style={styles.mainFirstText}>Let's Login.</Text>
            
           
            <View style={styles.textInputView}>
            <TextInput textAlign="left" style={styles.mainThirdText}>Email</TextInput>
            
            </View>
            <View style={styles.textInputView}>
            <TextInput textAlign="left" style={styles.mainThirdText}>Password</TextInput>
            
            </View>
          
            <View style={styles.registerButtonView}>
            <TouchableOpacity onPress={()=>{
                
            }}>
            <Text textAlign="left" style={styles.registerButtonText}>Login</Text>
            </TouchableOpacity>
            </View>
           
           
            </View>
          
           
          

         </View>
        )
    }
}

export default LoginPage
const styles = StyleSheet.create({
    header:{
        flex:1,
       justifyContent:"center",
       
    },
    headerText:{
        
        color:"black",
        textAlign:"left",
        fontSize:23,
        marginLeft:37,
        fontFamily:"PoppinsBold"
    },
    mainTextView:{
        flex:2,
        alignItems:"flex-start",
        marginLeft:37,
        marginRight:37
    },
    textInputView:{
        borderRadius:5,
        borderWidth:1,
        width:"100%",
        height:"7%",
        marginBottom:10
        
    },
    registerButtonView:{
        backgroundColor:"#000DAE",
        borderRadius:5,
        borderWidth:1,
        width:"100%",
        height:"10%",
        justifyContent:"center"
    },
    registerButtonText:{
        color:"white",
        textAlign:"center",
        fontSize:15,
        fontFamily:"PoppinsBold"
    },
    mainFirstText:{
        color:"black",
        textAlign:"center",
        fontSize:32,
        fontFamily:"PoppinsBold"
    },
    mainSecondText:{
        color:"black",
        textAlign:"center",
        fontSize:15,
        fontFamily:"PoppinsBold",
        opacity:0.4
    },
    mainThirdText:{
        color:"black",
       
        fontSize:15,
        fontFamily:"PoppinsBold",
        opacity:0.4,
        
    },
    registerView:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        
        
    },
    registerText:{
      
        color:"black",
        fontSize:27,
        fontFamily:"PoppinsBold"
       
    },
    loginTextView:{
        flex:1,
       
        
    },
    loginText:{
        color:"black",
        fontSize:17,
        fontFamily:"PoppinsBold",
        opacity:0.7,
        textAlign:"center",
        marginTop: 40,
        paddingRight:195,
        textDecorationLine: 'underline'

    }


})
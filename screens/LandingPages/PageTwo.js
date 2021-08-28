import React, { Component } from 'react'
import { Text, View,StyleSheet,Image, TouchableOpacity } from 'react-native'

export class PageTwo extends Component {
    render() {
        return (
            <View style={{flex:1, justifyContent:"space-between"}}>

               <View style={styles.header}>
                <Text style={styles.headerText}>Kleine.</Text>
               </View>

               <View style={styles.mainTextView}>
               <Text style={styles.mainFirstText}>The Right Address For Shopping Anyday</Text>
               <Text style={styles.mainSecondText}>It is now very easy to reach the best quality among all the products on the internet!</Text>
               </View>

             

              
               <View style={styles.registerView}>
                <Text style={styles.registerText}>Register</Text>
                <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate("LastPage")
                }}>
                <Image style={{width:64, height:64,}} source={require("../../assets/playreact.png")}></Image>
                </TouchableOpacity>
              
               
               </View>

               <View style={styles.loginTextView}>
                   <Text style={styles.loginText}>Login</Text>
               </View>

             

            </View>
        )
    }
}

export default PageTwo
const styles = StyleSheet.create({
    header:{
        flex:1,
       justifyContent:"center",
       
    },
    headerText:{
        
        color:"black",
        textAlign:"center",
        fontSize:23,
        fontFamily:"PoppinsBold"
    },
    mainTextView:{
        flex:1,
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
    registerView:{
        flex:0.2,
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
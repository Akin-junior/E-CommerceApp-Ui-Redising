import React, { Component } from 'react'
import { Text, View, Image, Dimensions, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import buy from "../../assets/OnBoard/buy.jpg"
import * as Font from 'expo-font';
const windowWidth = Dimensions.get("window").width
const windowheight = Dimensions.get("window").height


export class PageOne extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            fontloaded: false
        })
    }
    // async componentDidMount() {
    //     await Font.loadAsync({
    //         "PoppinsBold": require("../../assets/Fonts/PoppinsBold.ttf"),
    //         "Andika": require("../../assets/Fonts/Andika-Regular.ttf"),


    //     });
    //     this.setState({
    //         fontloaded: true
    //     })
    // }
    render() {
        if (this.state.fontloaded) {
            return (
                <ActivityIndicator style={{ color: "black" }}></ActivityIndicator>
            )

        } else {
            return (
                <View style={{ flex: 1, justifyContent: "space-evenly" }}>
                    <View style={styles.ImageContainer}>
                        <Image style={styles.image}
                            source={require("../../assets/OnBoard/buy.jpg")}>

                        </Image>
                    </View>
                    <Text style={styles.text}> The Right Address For Shopping Anyday</Text>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate("PageTwo")
                    }}>
                        <View style={styles.butonContainer}>

                            <Text style={styles.butonText}>Next</Text>

                        </View>
                    </TouchableOpacity>
                </View>
            )
        }

    }
}

export default PageOne

const styles = StyleSheet.create({

    image: {
        width: 273,
        height: 273,



    },
    ImageContainer: {
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        marginTop: 20,
        fontSize: 32,
        
        textAlign: "center",
        marginTop: 10,
        marginRight: windowWidth / 4.8,
        marginLeft: windowWidth / 4.8,
        fontFamily: 'PoppinsBold'
    },
    butonContainer: {
        width: 128,
        height: 40,
        backgroundColor: "black",
        borderRadius: 7,
        marginTop: 10,
        marginRight: windowWidth / 3,
        marginLeft: windowWidth / 3,
        justifyContent: "center",


    },
    butonText: {
        color: "white",
        fontSize: 15,
        
        textAlign: "center",
        textTransform: "uppercase",
        fontFamily: "PoppinsBold",


    }

})
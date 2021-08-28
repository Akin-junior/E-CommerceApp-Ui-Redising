import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, FlatList } from 'react-native'
import product from "../../assets/ImputImage.png"
const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.itemTitle}>{title}</Text>
    </View>
);
const ProductItem = ({ title,price,image }) => (
    <View style={styles.itemproduct}>
        <View style={styles.ImageView}>
        <Image style={styles.itemImage} source={image} ></Image>
        <View style={styles.imageTitleAndPriceView}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.priceText}>{price}</Text>
        </View>
        </View>
        <View style={styles.butonView}>
            <Text style={styles.butonText}>Add to Card</Text>
        </View>
       
    </View>
);
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Chair',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Cupboard',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Table',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e239d72',
        title: 'Accessory',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e78d72',
        title: 'Furniture',
    },
    {
        id: '58694a0f-3da1-471f-bd96-143491e78d72',
        title: 'Enlightening',
    },
];
const DATA2 = [
    {
        id: 'bd7a13cbea-c1b1-46c2-aed5-3ad53abb28ba',
        image: product,
        title: 'Scotch Premium',
        price:"$1600"
    },
    {
        id: '3ac68afc311-c605-48d3-a4f8-fbd91aa97f63',
        image: product,
        title: 'Scotch Premium',
        price:"$1600"
    },
    {
        id: '58694a011f-3da1-471f-bd96-145571e29d72',
        image: product,
        title: 'Scotch Premium',
        price:"$1600"
    },
    {
        id: '58694a041f-3da1-471f-bd96-145571e239d72',
        image: product,
        title: 'Scotch Premium',
        price:"$1600"
    },
    {
        id: '58693124a0f-3da1-471f-bd96-145571e78d72',
        image: product,
        title: 'Scotch Premium',
        price:"$1600"
    },
    {
        id: '58694411a0f-3da1-471f-bd96-143491e78d72',
        image: product,
        title: 'Scotch Premium',
        price:"$1600"
    },
];
export class Home extends Component {
    render() {
        const renderItem = ({ item }) => (
            <Item title={item.title}></Item>
        );
        const renderProductItem = ({ item }) => (
            <ProductItem title={item.title} image={item.image} price={item.price}></ProductItem>
        );
        return (
            <View style={{ flex: 1, }}>
                <View style={styles.searchContainer}>
                    <View style={styles.textInputView}>
                        <TextInput placeholder={"Search"} textAlign={"center"}></TextInput>
                    </View>
                    <View style={styles.IconView}>

                        <TouchableOpacity>
                            <Image style={styles.searchIcons} source={require("../../assets/ScanSearch.png")}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.searchIcons} source={require("../../assets/VoiceSearch.png")}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.categoriesView}>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >

                    </FlatList>
                </View>
                <View style={styles.categoriesView}>
                    <FlatList
                        data={DATA2}
                        renderItem={renderProductItem}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >

                    </FlatList>
                </View>

            </View>
        )
    }
}

export default Home
const styles = StyleSheet.create({
    searchContainer: {
        marginTop:7,
        justifyContent: "space-evenly",
        flexDirection: "row",
        marginLeft: 37,
        marginRight: 37,

    },
    textInputView: {
        width: "80%",
        borderWidth: 1
    },
    IconView: {
        flexDirection: "row",
    },
    searchIcons: {
        width: 30,
        height: 30
    },
    categoriesView: {
      
        width: "100%"
    },
    itemImage: {
        width:108,
        height:104

    },
    itemTitle: {
       margin:20,
       fontSize:12,
       fontFamily:"PoppinsBold"
    },
    item:{
        flex: 1,
       
    },
    itemproduct:{
        width:240,
        height:137,
        flex: 1,
    },
    ImageView:{
        flexDirection:"row"
    },
    titleText:{
        fontFamily:"PoppinsBold",
        fontSize:17
    },
    priceText:{
        fontSize:12,
        fontFamily:"PoppinsBold",
        opacity:0.4
    },
    butonView:{
        width:100,
        backgroundColor:"black",
        borderRadius:5,
       alignSelf:"flex-end"
       
    },
    butonText:{
        textAlign:"center",
        color:"white",
        fontFamily:"PoppinsBold"
    }
});

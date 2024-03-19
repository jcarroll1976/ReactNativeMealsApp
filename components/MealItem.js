import { Image, Pressable, Text, View, StyleSheet,Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MealItem({ id, title, imageUrl,duration,complexity,affordability }) {
    const navigation = useNavigation();

    function selectMealItemHandler() {
        navigation.navigate("MealDetails", {
            mealId: id
        });
    }
    
    return (
        <View style = {styles.mealItem}>
            <Pressable 
                android_ripple={{color: "#ccc"}} 
                style = {({pressed}) => pressed ? styles.buttonPressed : null} 
                onPress = {selectMealItemHandler}
            >
                <View>
                    <View>
                        <Image source={{uri: imageUrl}} style = {styles.image} />
                        <Text style = {styles.title}>{title}</Text>
                    </View>
                    <View style = {styles.details}>
                        <Text style = {styles.detailsItem}>{duration}min</Text>
                        <Text style = {styles.detailsItem}>{complexity.toUpperCase()}</Text>
                        <Text style = {styles.detailsItem}>{affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
        backgroundColor: "white",
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: 200
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        margin: 8
    },
    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 8
    },
    detailsItem: {
        marginHorizontal: 4,
        fontSize: 12
    }
})
import { StyleSheet,Text,View } from "react-native";
//import { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";
//import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

export default function FavoritesScreen() {
    //const favoriteMealsContext = useContext(FavoritesContext);
    const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);

    const favoriteMeals = MEALS.filter((meal) => /*favoriteMealsContext.ids*/favoriteMealIds.includes(meal.id));

    if (favoriteMeals.length === 0) {
        return (
            <View style = {styles.rootContainer}>
                <Text style = {styles.text}>No Favorites Yet.</Text>
            </View>
        )
    }

    return (
        <MealsList displayedMeals={favoriteMeals} />
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white"
    }
})
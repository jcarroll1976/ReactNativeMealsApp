import { Image, Text, View, StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

export default function MealDetailsScreen({ route }) {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId)
    return (
        <View>
            <Image style = {styles.image} source={{uri: selectedMeal.imageUrl}} />
            <Text style = {styles.title}>{selectedMeal.title}</Text>
            <MealDetails 
                duration={selectedMeal.duration} 
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <Text style = {styles.subtitle}>Ingredients</Text>
            {selectedMeal.ingredients.map((ingredient) => (
                <Text key={ingredient}>{ingredient}</Text>
            ))}
            <Text style = {styles.subtitle}>Steps</Text>
            {selectedMeal.steps.map((step) => (
                <Text key={step}>{step}</Text>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 350
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        margin: 8,
        textAlign: "center",
        color: "white"
    },
    detailText: {
        color: "white"
    },
    subtitle: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        margin: 6
    }
})
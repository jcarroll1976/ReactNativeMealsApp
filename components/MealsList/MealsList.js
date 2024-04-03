import { FlatList,StyleSheet,View } from "react-native";
import MealItem from "./MealItem";

export default function MealsList({displayedMeals}) {
    function renderMealItem(itemData) {
        const item = itemData.item;

        const mealProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability
        }

        return <MealItem {...mealProps}/>
    }

    return (
        <View style = {styles.container}>
            <FlatList 
                data = {displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})
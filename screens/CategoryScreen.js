import { FlatList} from "react-native";

import { CATEGORIES } from "../data/dummy-data"

function renderCategoryItem(item) {
    return
}

export default function CategoryScreen() {
    return (
        <FlatList 
            data = {CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
        />
    )
}
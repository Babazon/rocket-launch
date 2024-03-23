import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/navigation";
import { useEffect } from "react";
import { View } from "react-native";

export const DetailScreen: React.FC = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const route = useRoute<RouteProp<RootStackParamList, 'Detail'>>();
    const { launch } = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: launch.name,
        });
    }, [navigation, launch]);


    return <View />
};
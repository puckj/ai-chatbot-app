import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type RootStackParamList = {
    HomeScreen: undefined
    ChatScreen: undefined
}

export type RootStackNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    keyof RootStackParamList
>
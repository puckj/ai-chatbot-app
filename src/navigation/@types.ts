import { RouteProp } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type RootStackParamList = {
    HomeScreen: undefined
    ChatScreen: {
        selectedChatFace: any
    }
}

export type RootStackNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    keyof RootStackParamList
>

export type ChatScreenRouteProp = RouteProp<RootStackParamList, 'ChatScreen'>
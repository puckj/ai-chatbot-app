import { View, Text, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import chatFaceData from '../constant/chatFaceData'
import { useNavigation } from '@react-navigation/native'
import { RootStackNavigationProp } from '../navigation/@types'

const width = Dimensions.get('screen').width

const HomeScreen = () => {
    const [selectedChatFace, setSelectedChatFace] = useState(chatFaceData[0])
    const [chatFaceList, setChatFaceList] = useState(chatFaceData)
    const navigation = useNavigation<RootStackNavigationProp>()
    
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
            <Text style={{ color: selectedChatFace.primary, fontSize: 30 }}>Hello</Text>
            <Text style={{ color: selectedChatFace.primary, fontSize: 30, fontWeight: 'bold' }}>I am {selectedChatFace.name}</Text>
            <Image source={{ uri: selectedChatFace.image }} style={{ height: 150, width: 150, marginTop: 20 }} />
            <Text style={{ marginTop: 30, fontSize: 25 }}>How Can I help you?</Text>
            <View style={{ marginTop: 20, height: 95, backgroundColor: '#f5f5f5', borderRadius: 10, paddingHorizontal: 10 }}>
                <FlatList
                    data={chatFaceList}
                    horizontal={true}
                    renderItem={({ item }) => {
                        return item.id !== selectedChatFace.id ? (
                            <TouchableOpacity onPress={() => setSelectedChatFace(item)} style={{ padding: 15 }}>
                                <Image source={{ uri: item.image }} style={{ width: 40, height: 40 }} />
                            </TouchableOpacity>
                        ) : null
                    }} />
                <Text style={{ textAlign: 'center', fontSize: 15, color: '#B0B0B0', marginVertical: 10 }}>
                    Choose another ChatBuddy
                </Text>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('ChatScreen')}
                style={{
                    marginTop: 35, backgroundColor: selectedChatFace.primary,
                    width: width * 0.6, borderRadius: 100, padding: 15
                }}>
                <Text style={{ textAlign: 'center', fontSize: 19, color: '#fff', fontWeight: 'bold' }}>
                    Let's Chat
                </Text>
            </TouchableOpacity>
        </View>
    )
}
export default HomeScreen
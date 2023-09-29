import { View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { Bubble, GiftedChat, InputToolbar, Send } from 'react-native-gifted-chat'
import { useRoute } from '@react-navigation/native'
import { ChatScreenRouteProp } from '../navigation/@types'
import { fetchBardAiAnswer } from '../services/global-api'
import { FontAwesome } from '@expo/vector-icons';

const ChatScreen = () => {
    const [messages, setMessages] = useState<any>([])
    const [isAiProcessing, setIsAiProcessing] = useState<boolean>(false)
    const { params } = useRoute<ChatScreenRouteProp>()
    useEffect(() => {
        console.log(params);
        setMessages([
            {
                _id: 1,
                text: `Hello, it's ${params.selectedChatFace.name}.\nHow can I assist you today?`,
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: params.selectedChatFace.name,
                    avatar: params.selectedChatFace.image,
                },
            },
        ])
    }, [])
    const onSend = useCallback((messages: any[] = []) => {
        setMessages((previousMessages: any) =>
            GiftedChat.append(previousMessages, messages),
        )
        getBardAiResponse(messages[0].text)
    }, [])

    const getBardAiResponse = async (message: string) => {
        setIsAiProcessing(true)
        try {
            const responseResult: any = await fetchBardAiAnswer({ content: message })
            console.log(responseResult.status, '[SUCCESS!]_getBardAiResponse');
            let chatBotResponse: any = {
                _id: Math.random() * (9999999 - 1),
                text: responseResult.status === 200 ?
                    responseResult.response_text : "Sorry, I can not help with it",
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: params.selectedChatFace.name,
                    avatar: params.selectedChatFace.image
                }
            }
            setMessages((previousMessages: any) =>
                GiftedChat.append(previousMessages, chatBotResponse),
            )
        } catch (error:any) {
            console.error(error.response.data, ' [ERROR]_getBardAiResponse')
            let chatBotResponse: any = {
                _id: Math.random() * (9999999 - 1),
                text: "Sorry, Something went wrong...",
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: params.selectedChatFace.name,
                    avatar: params.selectedChatFace.image
                }
            }
            setMessages((previousMessages: any) =>
                GiftedChat.append(previousMessages, chatBotResponse),
            )
        }
        setIsAiProcessing(false)
    }

    const renderSend = (props: any) => {
        return (
            <Send
                {...props}
            >
                <View style={{ height: '100%', alignItems: 'center', flexDirection: 'row' }}>
                    <FontAwesome name="send" size={24} color="black" />
                </View>
            </Send>
        );
    }
    const renderInputToolbar = (props: any) => {
        //Add the extra styles via containerStyle
        return <InputToolbar {...props}
            containerStyle={{
                paddingVertical: 3,
                marginBottom: 3,
                paddingHorizontal: 15,
            }}
        // textInputStyle={{ color: 'red' }}
        />
    }
    // const renderBubble = (props: any) => {
    //     return (
    //         <Bubble
    //             {...props}
    //             // wrapperStyle={{
    //             //     right: {
    //             //     }, left: {

    //             //     }
    //             // }}
    //             textStyle={{
    //                 right: {
    //                     // fontSize:20,
    //                     padding: 2
    //                 },
    //                 left: {
    //                     color: '#671ddf',
    //                     // fontSize:20,
    //                     padding: 2
    //                 }
    //             }}
    //         />
    //     )
    // }
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <GiftedChat
                messagesContainerStyle={{paddingBottom:10}}
                messages={messages}
                isTyping={isAiProcessing}
                onSend={(messages: any) => onSend(messages)}
                user={{
                    _id: 1,
                }}
                renderInputToolbar={renderInputToolbar}
                renderSend={renderSend}
            // renderBubble={renderBubble}
            />
        </View>
    )
}
export default ChatScreen
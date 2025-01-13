import { Flex, Text } from '@chakra-ui/react'
import { useColorModeValue } from '../ui/color-mode'
import { useEffect } from 'react'
import { MessageData } from '@/types'

interface Message {
    data: MessageData,
    isRecieverMessage?: boolean,
}

const Message = ({ isRecieverMessage = false, data } : Message) => {

    useEffect(() => {
        console.log(data)
    }, [data])

    const receiverBg = useColorModeValue("gray.100", "gray.800");
    const senderBg = useColorModeValue("gray.200", "gray.700");

    return (
        <Flex 
            padding={"10px 15px"}
            onClick={() => { console.log("fuckable") }}
            width={"fit-content"}
            maxWidth={"240px"}
            borderRadius={"md"}
            marginLeft={isRecieverMessage ? "auto" : "" }
            bg={isRecieverMessage ? receiverBg : senderBg }

            sm={{ maxWidth: "360px" }}
            md={{ maxWidth: "400px" }}
            lg={{ maxWidth: "550px" }}
        >
            <Text _selection={{ bg: useColorModeValue("gray.400", "gray.500") }} >{ data.content }</Text>
        </Flex>
    )
}

export default Message
import { Flex, Text } from '@chakra-ui/react'
import { useColorModeValue } from '../ui/color-mode'
import { useEffect, useState } from 'react'
import { MessageData } from '@/types'
import { Tooltip } from '../ui/tooltip'
import useAuthStore from '@/stores/useAuthStore'

interface Message {
    data: MessageData,
    isRecieverMessage?: boolean,
    activeMessage?: string | null,
    setActiveMessage: (activeMessage: string | null ) => void,
}

const Message = ({ isRecieverMessage = false, data, activeMessage, setActiveMessage } : Message) => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 748)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!isMobile) setActiveMessage(null) 
    }, [isMobile])

    //

    const receiverBg = useColorModeValue("gray.100", "gray.800");
    const senderBg = useColorModeValue("gray.200", "gray.700");
    const activeMsgBg = useColorModeValue("gray.200", "white")
    const activeMsgColor = useColorModeValue("gray.800", "black")


    //

    const auth = useAuthStore()
    
    const isReciever = auth.userId

    useEffect(() => {
        console.log(isReciever)
    }, [isReciever])


    return (
        <Flex
            direction={"column"}
            gap={2}
        >

            <Tooltip 
                content={data.sentAt}
                positioning={{ placement: "right" }}
                openDelay={200}
                closeDelay={500}
            >
                <Flex
                    position={"relative"}
                    padding={"10px 15px"}
                    width={"fit-content"}
                    maxWidth={"240px"}
                    borderRadius={"md"}
                    marginLeft={isRecieverMessage ? "auto" : "0" }
                    bg={isRecieverMessage ? receiverBg : senderBg }
                    onClick={() => {
                        if (isMobile)
                            setActiveMessage(activeMessage !== data.id ? data.id : null)
                    }}

                    sm={{ maxWidth: "360px" }}
                    md={{ maxWidth: "400px" }}
                    lg={{ maxWidth: "550px" }}
                >
                        <Text
                            position={"absolute"}
                            left={"calc(100% + 10px)"}
                            bg={activeMsgBg}
                            color={activeMsgColor}
                            fontSize={"sm"}
                            padding={"3px 8px"}
                            width={"max-content"}
                            borderRadius={"sm"}
                            overflow={"hidden"}
                            opacity={activeMessage !== data.id ? "0" : "100%"}
                            transition={"all 0.2s ease"}
                            
                            // padding={activeMessage === data.id ? "3px 8px" : "0"}
                            // width={activeMessage === data.id ? "max-content" : "0"}
                            // width={"max-content"}
                            // display={activeMessage === data.id ? "flex" : "none"} 
                        >
                                {data.sentAt}
                        </Text>
                        
                        <Text _selection={{ bg: useColorModeValue("gray.400", "gray.500") }} > { data.content } </Text>
                </Flex>
            </Tooltip>
        </Flex>
    )
}

export default Message
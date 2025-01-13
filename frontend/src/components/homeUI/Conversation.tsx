import { Avatar } from "@/components/ui/avatar";
import { Flex, Text } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import { Conversation as ConversationProps } from "@/types";
import { useEffect } from "react";

const Conversation = ({ id, members, isSelected = false } : ConversationProps ) => {

    const isSelectedBg = useColorModeValue("gray.100", "gray.800")

    useEffect(() => {
        console.log(id, members)
    }, [id, members])

    return (
        <Flex
            direction={"column"}
            bg={isSelected ? isSelectedBg : ""}
            borderRadius={"md"}
            gap={"3"}
            sm={{
                gap: "0",
            }}

        >
            <Flex
            cursor={"pointer"}
            background={"transparent"}
            fontSize={"14px"}
            sm={{
                gap: "3",
                padding: "2",
            }}
            >
                <Avatar name="Jinky Suson" src="" bg={useColorModeValue(isSelected ? "gray.300" : "gray.200", "gray.700")} ></Avatar>

                <Flex
                    direction={"column"}
                    textWrap={"nowrap"}
                    width={"0"}
                    md={{ minWidth: "120px" }}
                    lg={{ minWidth: "180px" }}
                >
                    <Text display={"none"} md={{ display: "flex" }}>
                        User 1
                    </Text>
                    <Text
                    opacity={"50%"}
                    textOverflow={"ellipsis"}
                    fontSize={"xs"}
                    overflow={"hidden"}
                    display={"none"}
                    md={{ display: "block" }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Conversation
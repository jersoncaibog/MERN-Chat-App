import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { useLogout } from "@/utils/auth";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { useColorMode, useColorModeValue } from "../ui/color-mode";
import Conversation from "../homeUI/Conversation";
import { Conversation as ConversationProps } from "@/types";
import useAuthStore from "@/stores/useAuthStore";

interface Conversations {
    selectedChat: string | undefined; // conversation id
}


const Conversations = ({ selectedChat } : Conversations) => {
    
    const auth = useAuthStore()

    console.log(auth)
    
    const mockConversations: Array<ConversationProps> = [
        { id: "1", members: ["a", "b"] },
        { id: "2", members: ["jerson", "jinky"] },
        { id: "3", members: ["1", "2"] }
    ]
    
    const { colorMode, toggleColorMode } = useColorMode();
    const handleLogout = useLogout();

    return (
        <Box padding={"0"}>
            <Flex
                direction={"column"}
                display={"none"}
                minW={"0px"}
                height={"100%"}
                bg={useColorModeValue("white", "gray.900")}
                borderRadius={"lg"}
                padding={"4px 10px"}
                md={{
                    display: "flex",
                    minW: "220px",
                    maxW: "220px",
                }}
                lg={{
                    display: "flex",
                    minW: "200px",
                    maxW: "400px",
                }}
            >
                <Flex
                    direction={"row"}
                    align={"center"}
                    gap={"10px"}
                    marginBottom={"10px"}
                    borderBottom={"1px solid"}
                    borderColor={useColorModeValue("gray.100", "gray.800")}
                    transform={"translateX(-2px)"}
                >
                    <MenuRoot>
                    <MenuTrigger asChild>
                        <Button
                        variant={"ghost"}
                        size="md"
                        padding={0}
                        h={"30px"}
                        minWidth={"30px"}
                        >
                        <FiMenu />
                        </Button>
                    </MenuTrigger>
                    <MenuContent>
                        <MenuItem
                        onClick={toggleColorMode}
                        padding={4}
                        cursor={"pointer"}
                        value="dark-mode"
                        >
                            Dark Mode: {colorMode === "dark" ? "On" : "Off"}
                        </MenuItem>
                        <MenuItem padding={4} cursor={"pointer"} value="my-account">
                            My Account
                        </MenuItem>
                        <MenuItem
                        onClick={handleLogout}
                        padding={4}
                        cursor={"pointer"}
                        borderTop={"1px solid"}
                        borderColor={useColorModeValue("gray.300", "gray.800")}
                        value="log-out"
                        >
                            Log out
                        </MenuItem>
                    </MenuContent>
                    </MenuRoot>
                    <Text
                    fontSize={"lg"}
                    display={"none"}
                    fontWeight={"semibold"}
                    marginBottom={"10px"}
                    marginTop={"10px"}
                    md={{
                        display: "flex",
                    }}
                    >
                        Chats
                    </Text>
                </Flex>

                {mockConversations.map((conversation) =>
                    <Conversation isSelected={conversation.id === "1"} members={conversation.members} />
                )}

            </Flex>
        </Box>
    )
}

export default Conversations
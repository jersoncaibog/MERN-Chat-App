import { Avatar } from "@/components/ui/avatar";
import { Flex, Text } from "@chakra-ui/react";
import Message from "../homeUI/Message";
import { useColorModeValue } from "../ui/color-mode";
import MessageInput from "../homeUI/MessageInput";
import { MessageData, User } from "@/types";
import { useState } from "react";

interface ChatWindow {
  recipient: User;
  activeStatus: string;
}

const mockMessages: Array<MessageData> = [
  { 
    id: "1",
    sender: "User1",
    chatRoom: "room1",
    sentAt: "10:00 AM",
    content: "Message 1"
  },
  { 
    id: "2",
    sender: "User1",
    chatRoom: "room1",
    sentAt: "10:00 AM",
    content: "Message 2"
  },
  { 
    id: "3",
    sender: "User1",
    chatRoom: "room1",
    sentAt: "10:00 AM",
    content: "Message 3"
  },
  {
    id: "4",
    sender: "User1",
    chatRoom: "room1",
    sentAt: "10:00 AM",
    content: "Message 4"
  },
]

const ChatWindow = ({ recipient, activeStatus } : ChatWindow) => {
  
  const { firstname, lastname } = recipient;
  const [ activeMessage, setActiveMessage ] = useState<string | null>() // message id
 
  return (
    <Flex width={"100%"} height={"100%"} direction={"column"} padding={"0"}>

      {/* Header */}
      <Flex
        direction={"column"}
        height={"100%"}
        bg={useColorModeValue("white", "gray.900")}
        borderRadius={"lg"}
      >
        <Flex width={"full"} direction={"column"} alignItems={"center"}>
          <Flex
            width={"full"}
            direction={"row"}
            align={"center"}
            padding={"4"}
            paddingBlock={"3"}
          >
            <Flex direction={"row"} gap={"10px"} width={"full"}>
              <Avatar name={`${firstname} ${lastname}`} src=""></Avatar>
              <Flex direction={"column"}>
                <Text fontWeight={"semibold"} fontSize={"md"} color={"fg"}>
                  {firstname} {lastname}
                </Text>
                <Text fontSize={"xs"} fontWeight={"300"} opacity={"70%"}>
                  {activeStatus}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        {/* Chat box */}
        <Flex
          direction={"column-reverse"}
          flex={"1"}
          gap={"10px"}
          height={"full"}
          width={"full"}
          maxWidth={"1000px"}
          padding={"4"}
          overflowY={"scroll"}
          scrollbarWidth={"10px"}
          scrollbarColor={"red"}
          _scrollbarThumb={{ width: "5px" }}
        >
          
          {mockMessages.map((data) =>
            <Message 
              activeMessage={activeMessage} 
              setActiveMessage={setActiveMessage} 
              data={data} 
              key={data.id} 
            />
          )}
          
        </Flex>

        <MessageInput />        

      </Flex>
    </Flex>
  );
};

export default ChatWindow;

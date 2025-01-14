import useAuthStore from "@/stores/useAuthStore";
import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useColorModeValue } from "../ui/color-mode";
import ChatWindow from "../containers/ChatWindow";
import Conversations from "../containers/Conversations";

const Home = () => {

  const navigate = useNavigate();
  const { accessToken } = useAuthStore.getState();

  useEffect(() => {
    if (!accessToken) {
      console.log("Access denied");
      navigate("/auth/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);


  const recipient = {
    id: "sample",
    username: "jcaibog",
    avatarUrl: "",
    firstname: "Jerson",
    lastname: "Caibog",
  }

  const activeStatus = "Active now";
  const [selectedChat, setSelectedChat] = useState<string | null>(null) // user id

  useEffect(() => {
    setSelectedChat("sample")
  }, [])

  return (
    <Box
      bg={useColorModeValue("gray.200", "gray.950")}
      width={"100vw"}
      height={"100vh"}
      overflow={"hidden"}
    >
      <Flex
        direction={"row"}
        maxW={"1200px"}
        width={"100%"}
        minH={"100vh"}
        maxH={"100vh"}
        height={"100vh"}
        margin={"0 auto"}
        padding={"4"}
        gap={"4"}
      >
        
        <Conversations selectedChat={selectedChat} setSelectedChat={setSelectedChat} />

        <ChatWindow recipient={recipient} activeStatus={activeStatus} />

      </Flex>
    </Box>
  );
};

export default Home;

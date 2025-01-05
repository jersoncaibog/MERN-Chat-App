import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { ColorModeButton } from "../ui/color-mode";

const Home = () => {
  return (
    <Box background={"bg.subtle"} width={"100vw"} height={"100vh"}>
      <Flex
        direction={"row"}
        maxW={"1200px"}
        width={"100%"}
        minH={"100vh"}
        margin={"0 auto"}
      >
        {/* Chats */}
        <Box 
          padding={"0"} 
          sm={{ 
            padding: "4", 
            paddingRight: "0",
          }}  
        >
          <Flex
            direction={"column"}
            display={"none"}
            minW={"0px"}
            height={"100%"}
            bg={"bg.muted"}
            borderRadius={"lg"}
            padding={"4"}
            paddingBlock={"1"}
            sm={{ 
              display: "flex",
              minW: "70px", 
              maxW: "70px"
            }}
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
            <Text
              fontSize={"lg"}
              display={"none"}
              fontWeight={"semibold"}
              marginBottom={"10px"}
              md={{
                display: "flex"
              }}
            >
              Chats
            </Text>

            <Flex 
              direction={"column"}
              gap={"3"}
              sm={{
                gap: "0"
              }}
            >
              <Flex
                background={"transparent"}
                fontSize={"14px"}
                sm={{ 
                  gap: "3", 
                  padding: "3",
                  paddingInline: "0",
                }}
              >
                <Box
                  minH={"40px"}
                  minW={"40px"}
                  borderRadius={"full"}
                  bg={"bg.inverted"}
                  opacity={"10%"}
                ></Box>
                <Flex
                  direction={"column"}
                  textWrap={"nowrap"}
                  width={"0"}
                  md={{ width: "200px" }}
                  lg={{ width: "240px" }}
                >
                  <Text 
                    display={"none"}
                    md={{ display: "flex" }}
                  >User 1</Text>
                  <Text 
                    opacity={"50%"} 
                    textOverflow={"ellipsis"}
                    fontSize={"xs"}
                    overflow={"hidden"}
                    display={"none"}
                    md={{ display: "block" }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                    et fugit praesentium aspernatur ex quia, rerum neque fugiat
                    nisi quos ab repellendus laudantium iusto necessitatibus,
                    cupiditate quae. Accusantium, nemo minus?
                  </Text>
                </Flex>
              </Flex>
              <Flex
                background={"transparent"}
                fontSize={"14px"}
                sm={{ 
                  gap: "3",
                  padding: "3",
                  paddingInline: "0",
                }}
              >
                <Box
                  minH={"40px"}
                  minW={"40px"}
                  borderRadius={"full"}
                  bg={"bg.inverted"}
                  opacity={"10%"}
                ></Box>
                <Flex
                  direction={"column"}
                  textWrap={"nowrap"}
                  width={"0"}
                  md={{ width: "200px" }}
                  lg={{ width: "240px" }}
                >
                  <Text 
                    display={"none"}
                    md={{ display: "flex" }}
                  >User 2</Text>
                  <Text 
                    opacity={"50%"} 
                    textOverflow={"ellipsis"}
                    fontSize={"xs"}
                    overflow={"hidden"}
                    display={"none"}
                    md={{ display: "block" }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                    et fugit praesentium aspernatur ex quia, rerum neque fugiat
                    nisi quos ab repellendus laudantium iusto necessitatibus,
                    cupiditate quae. Accusantium, nemo minus?
                  </Text>
                </Flex>
              </Flex>
              <Flex
                background={"transparent"}
                fontSize={"14px"}
                sm={{ 
                  gap: "3",
                  padding: "3",
                  paddingInline: "0",
                }}
              >
                <Box
                  minH={"40px"}
                  minW={"40px"}
                  borderRadius={"full"}
                  bg={"bg.inverted"}
                  opacity={"10%"}
                ></Box>
                <Flex
                  direction={"column"}
                  textWrap={"nowrap"}
                  width={"0"}
                  md={{ width: "200px" }}
                  lg={{ width: "240px" }}
                >
                  <Text 
                    display={"none"}
                    md={{ display: "flex" }}
                  >User 3</Text>
                  <Text 
                    opacity={"50%"} 
                    textOverflow={"ellipsis"}
                    fontSize={"xs"}
                    overflow={"hidden"}
                    display={"none"}
                    md={{ display: "block" }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                    et fugit praesentium aspernatur ex quia, rerum neque fugiat
                    nisi quos ab repellendus laudantium iusto necessitatibus,
                    cupiditate quae. Accusantium, nemo minus?
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Box>

        <Flex
          width={"100%"}
          height={"100vh"}
          direction={"column"}
          padding={"4"}
        >
          {/* Header */}
          <Flex
            direction={"column"}
            height={"100%"}
            background={"bg.muted"}
            borderRadius={"lg"}
            
          >
            <Flex width={"full"} direction={"column"} alignItems={"center"}>
              <Flex
                width={"full"}
                justify={"space-between"}
                direction={"row"}
                align={"center"}
                padding={"4"}
                paddingBlock={"3"}
              >
                <Flex direction={"column"}>
                  <Text fontWeight={"semibold"} fontSize={"lg"} color={"fg"}>
                    Jhon Doe
                  </Text>
                  <Text fontSize={"xs"} fontWeight={"200"} opacity={"70%"}>
                    Active now
                  </Text>
                </Flex>
                <ColorModeButton _icon={{ w: "16px" }} />
              </Flex>
            </Flex>

            {/* Chat box */}
            <Flex
              direction={"column"}
              flex={"1"}
              height={"full"}
              width={"full"}
              maxWidth={"1000px"}
              padding={"4"}
            >
              hello
            </Flex>

            {/* Message box */}
            <Flex width={"full"} justifyContent={"center"}>
              <Flex
                direction={"row"}
                gap={"16px"}
                maxWidth={"1000px"}
                width={"full"}
                padding={"4"}
              >
                <Input
                  variant={"subtle"}
                  placeholder="Aa"
                  bg={{ base: "white", _dark: "black" }}
                  size={"sm"}
                  outline={"none"}
                  border={"0"}
                />
                <Button size={"sm"}>Send</Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;

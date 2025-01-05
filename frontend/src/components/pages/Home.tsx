import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { ColorModeButton } from "../ui/color-mode";

const Home = () => {
  return (
    <Box background={"gray.200"} _dark={{ background: "gray.950" }} width={"100vw"} height={"100vh"} overflow={"hidden"} >
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
            bg={{ base: "white", _dark: "gray.900" }}
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
              marginTop={"10px"}
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
                  md={{ minWidth: "130px" }}
                  lg={{ minWidth: "200px",  }}
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
                  md={{ minWidth: "130px" }}
                  lg={{ minWidth: "200px",  }}
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
                  md={{ minWidth: "130px" }}
                  lg={{ minWidth: "200px",  }}
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

        {/* Main */}
        <Flex
          width={"100%"}
          height={"100vh"}
          direction={"column"}
          padding={"0"}

          sm={{
            padding: "4"
          }}
          >
          {/* Header */}
          <Flex
            direction={"column"}
            height={"100%"}
            bg={{ base: "white", _dark: "gray.900" }}
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
                <Flex direction={"row"} gap={"10px"} width={"full"} >
                  <Box
                    h={"45px"}
                    w={"45px"}
                    borderRadius={"full"}
                    bg={"bg.inverted"}
                    opacity={"10%"}
                  ></Box>
                  <Flex direction={"column"}>
                    <Text fontWeight={"semibold"} fontSize={"lg"} color={"fg"}>
                      Jhon Doe
                    </Text>
                    <Text fontSize={"xs"} fontWeight={"200"} opacity={"70%"}>
                      Active now
                    </Text>
                  </Flex>
                </Flex>
                <ColorModeButton _icon={{ w: "16px" }} />
              </Flex>
            </Flex>

            {/* Chat box */}
            <Flex
              direction={"column"}
              flex={"1"}
              gap={"10px"}
              height={"full"}
              width={"full"}
              maxWidth={"1000px"}
              padding={"4"}
              overflowY={"scroll"}
              // sx={{
              //   '&::-webkit-scrollbar': {
              //     width: '10px',
              //   },
              //   '&::-webkit-scrollbar-thumb': {
              //     background: 'teal',
              //     borderRadius: '5px',
              //   },
              //   '&::-webkit-scrollbar-thumb:hover': {
              //     background: 'darkblue',
              //   },
              //   '&::-webkit-scrollbar-track': {
              //     background: '#f1f1f1',
              //   },
              // }}
              scrollbarWidth={"10px"}
              scrollbarColor={"red"}
              _scrollbarThumb={{ width: "5px" }}
            >
              <Flex 
                padding={"2"}
                width={"fit-content"}
                maxWidth={"240px"}
                borderRadius={"md"}
                bg={{ base: "gray.100", _dark: "gray.800" }} 

                sm={{ maxWidth: "360px" }}
                md={{ maxWidth: "400px" }}
                lg={{ maxWidth: "550px" }}
              >
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ut ab nulla sapiente exercitationem obcaecati nemo accusantium quasi facilis non?</Text>
              </Flex>

              <Flex 
                padding={"2"}
                width={"fit-content"}
                maxWidth={"240px"}
                borderRadius={"md"}
                bg={{ base: "gray.100", _dark: "gray.800" }} 

                sm={{ maxWidth: "360px" }}
                md={{ maxWidth: "400px" }}
                lg={{ maxWidth: "550px" }}
              >
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ut ab nulla sapiente exercitationem obcaecati nemo accusantium quasi facilis non?</Text>
              </Flex>

              <Flex 
                padding={"2"}
                width={"fit-content"}
                maxWidth={"240px"}
                borderRadius={"md"}
                marginLeft={"auto"}
                bg={{ base: "gray.200", _dark: "gray.700" }} 

                sm={{ maxWidth: "360px" }}
                md={{ maxWidth: "400px" }}
                lg={{ maxWidth: "550px" }}
              >
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ut ab nulla sapiente exercitationem obcaecati nemo accusantium quasi facilis non?</Text>
              </Flex>

              <Flex 
                padding={"2"}
                width={"fit-content"}
                maxWidth={"240px"}
                borderRadius={"md"}
                bg={{ base: "gray.100", _dark: "gray.800" }} 

                sm={{ maxWidth: "360px" }}
                md={{ maxWidth: "400px" }}
                lg={{ maxWidth: "550px" }}
              >
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ut ab nulla sapiente exercitationem obcaecati nemo accusantium quasi facilis non?</Text>
              </Flex>

              <Flex 
                padding={"2"}
                width={"fit-content"}
                maxWidth={"240px"}
                borderRadius={"md"}
                bg={{ base: "gray.100", _dark: "gray.800" }} 

                sm={{ maxWidth: "360px" }}
                md={{ maxWidth: "400px" }}
                lg={{ maxWidth: "550px" }}
              >
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ut ab nulla sapiente exercitationem obcaecati nemo accusantium quasi facilis non?</Text>
              </Flex>

              <Flex 
                padding={"2"}
                width={"fit-content"}
                maxWidth={"240px"}
                borderRadius={"md"}
                marginLeft={"auto"}
                bg={{ base: "gray.200", _dark: "gray.700" }} 

                sm={{ maxWidth: "360px" }}
                md={{ maxWidth: "400px" }}
                lg={{ maxWidth: "550px" }}
              >
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ut ab nulla sapiente exercitationem obcaecati nemo accusantium quasi facilis non?</Text>
              </Flex>

              <Flex 
                padding={"2"}
                width={"fit-content"}
                maxWidth={"240px"}
                borderRadius={"md"}
                bg={{ base: "gray.100", _dark: "gray.800" }} 

                sm={{ maxWidth: "360px" }}
                md={{ maxWidth: "400px" }}
                lg={{ maxWidth: "550px" }}
              >
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ut ab nulla sapiente exercitationem obcaecati nemo accusantium quasi facilis non?</Text>
              </Flex>

              <Flex 
                padding={"2"}
                width={"fit-content"}
                maxWidth={"240px"}
                borderRadius={"md"}
                bg={{ base: "gray.100", _dark: "gray.800" }} 

                sm={{ maxWidth: "360px" }}
                md={{ maxWidth: "400px" }}
                lg={{ maxWidth: "550px" }}
              >
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ut ab nulla sapiente exercitationem obcaecati nemo accusantium quasi facilis non?</Text>
              </Flex>

              <Flex 
                padding={"2"}
                width={"fit-content"}
                maxWidth={"240px"}
                borderRadius={"md"}
                marginLeft={"auto"}
                bg={{ base: "gray.200", _dark: "gray.700" }} 

                sm={{ maxWidth: "360px" }}
                md={{ maxWidth: "400px" }}
                lg={{ maxWidth: "550px" }}
              >
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ut ab nulla sapiente exercitationem obcaecati nemo accusantium quasi facilis non?</Text>
              </Flex>
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
                  bg={{ base: "gray.200", _dark: "gray.800" }}
                  outline={"none"}
                  border={"0"}
                />
                <Button >Send</Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;

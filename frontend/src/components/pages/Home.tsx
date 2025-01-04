import { Flex, Text } from "@chakra-ui/react"
import { ColorModeButton } from "../ui/color-mode"

const Home = () => {
  return (
    <Flex minH={"100vh"} direction={'column'} alignItems={'center'}background={"bg.muted"}>
      <Flex width={"full"} direction={"column"} alignItems={"center"} >
        <Flex maxW={"1000px"} width={"full"} justify={"space-between"} direction={'row'} align={'center'} padding={"2"} >
          <Text fontWeight={'semibold'} fontSize={'xl'} color={"fg"} >PotatoChat</Text>
          <ColorModeButton />
        </Flex>
      </Flex>

      <Flex width={"full"} background={"white"} >
        hello
      </Flex>
    </Flex>
  )
}

export default Home
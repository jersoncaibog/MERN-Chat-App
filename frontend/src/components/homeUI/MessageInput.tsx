import { Button, Flex, Input } from "@chakra-ui/react";

const MessageInput = () => {
  return (
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
        <Button>Send</Button>
        </Flex>
    </Flex>
  )
}

export default MessageInput
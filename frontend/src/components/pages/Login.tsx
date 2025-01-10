import { Button, Link as ChakraLink, Fieldset, Flex, Group, Heading, Input, Stack, Text } from "@chakra-ui/react"
import { useState } from "react"
import { Link } from "react-router"
import { Checkbox } from "../ui/checkbox"
import { ColorModeButton, useColorModeValue } from "../ui/color-mode"
import { Field } from "../ui/field"

const Login = () => {

  const [ usernameError, setUsernameError ] = useState<string | undefined >()
  const [ passwordError, setPasswordError ] = useState<string | undefined >()

  // useEffect(() => {
  //   setUsernameError("Invalid username")
  //   setPasswordError("Wrong password")
  // }, [])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const { username, password } = e.target as HTMLFormElement;

    const usernameValid = !!username.value;
    const passwordValid = !!password.value;

    setUsernameError(usernameValid ? undefined : "Username is required");
    setPasswordError(passwordValid ? undefined : "Password is required");

    if (!usernameValid || !passwordValid) {
      return;
    }

    console.log("submit")
  
  }

  return (
    <Flex 
      padding={"0"} boxSizing={"border-box"}
      paddingBottom={"10"}
      alignItems={"center"}
      bg={useColorModeValue("gray.100", "gray.950")} 
      minH={"100vh"}
      minW={"100vw"}
      justifyContent={"center"}
      height={"fit-content"}
      sm={{
        padding: 10
      }}
    >
      <Stack direction={"column"} gap={8} >
        <form onSubmit={handleSubmit}>
          <Fieldset.Root>
            <Stack 
              border={"1px solid"}   
              borderColor={useColorModeValue("gray.200", "gray.800")}
              bg={useColorModeValue("white", "gray.900")} 
              padding={"10"} 
            >
                <Stack direction={"row"} align={"center"} justifyContent={"space-between"} >
                  <Heading textAlign={"center"} size={"2xl"} fontWeight={"extrabold"} >PotatoChat🥔</Heading>
                  <ColorModeButton 
                    _icon={{ width: "18px" }}
                    _hover={{
                      bg: useColorModeValue("gray.100", "gray.800")
                    }} 
                  />
                </Stack>

                <Fieldset.Content>
                  <Field invalid={usernameError !== undefined} errorText={usernameError} >
                    <Input autoComplete="off" name="username" p={"6"} w="80" mt={6} placeholder="Username" />
                  </Field>
                  
                  <Field invalid={passwordError !== undefined} errorText={passwordError} >
                    <Input autoComplete="off" name="password" p={"6"} w="80" mt={1} placeholder="Password"  />
                  </Field>
        
                  <Checkbox mt={2} >Keep me logged in</Checkbox>
                </Fieldset.Content>

                <Button type="submit" mt={6} fontWeight={"semibold"} >
                  Log in
                </Button>
            </Stack>
          </Fieldset.Root>
        </form>

        <Group margin={"0 auto"} > 
          <Text>Don't have an account?</Text>
          <ChakraLink asChild fontWeight={"semibold"} color={"cyan.400"} >
            <Link to={"/auth/register"} >Sign up</Link> 
          </ChakraLink>
        </Group>
      </Stack>
    </Flex>
  )
}

export default Login
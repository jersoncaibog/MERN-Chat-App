import {  Button, Center, Heading, Input, Stack, Text, Group, Fieldset, Link as ChakraLink } from "@chakra-ui/react"
import { Checkbox } from "../ui/checkbox"
import { Field } from "../ui/field"
import { Link } from "react-router"
import { useEffect, useState } from "react"
import { ColorModeButton } from "../ui/color-mode"

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
    <Center h={"100vh"} w={"100vw"} bg={{ base: "gray.100", _dark: "gray.950" }} >
      <ColorModeButton position={"absolute"} top={5} right={5} />
      <Stack direction={"column"} gap={8} >
        <form onSubmit={handleSubmit}>
          <Fieldset.Root>
            <Stack bg={{ base: "white", _dark: "gray.900" }} border={"1px solid"} borderColor={"gray.200"} _dark={{ borderColor: "gray.800" }} padding={"10"} >
                <Heading textAlign={"center"} size={"2xl"} fontWeight={"extrabold"} >PotatoChat🥔</Heading>

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
    </Center>
  )
}

export default Login
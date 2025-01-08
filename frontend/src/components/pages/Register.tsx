import {  Button, Center, Heading, Input, Stack, Text, Group, Fieldset, Link as ChakraLink } from "@chakra-ui/react"
import { Field } from "../ui/field"
import { Link } from "react-router"
import { useEffect, useState } from "react"
import { useColorMode } from "../ui/color-mode"
import { Switch } from "@/components/ui/switch"

const Register = () => {

  const { colorMode, toggleColorMode } = useColorMode();

  const [ usernameError, setUsernameError ] = useState<string>()
  const [ firstnameError, setFirstnameError ] = useState<string>()
  const [ lastnameError, setLastnameError ] = useState<string>()
  const [ passwordError, setPasswordError ] = useState<string>()
  const [ confirmPasswordError, setConfirmPasswordError ] = useState<string>()
  
  // useEffect(() => {
  //   setUsernameError("Invalid username")
  //   setFirstnameError("Invalid firstname")
  //   setLastnameError("Invalid lastname")
  //   setPasswordError("Password must be at least 8 characters")
  //   setConfirmPasswordError("Passwords do not match")
  // }, [])

  return (
    <Center p={"10"} minH={"100vh"} w={"100vw"} bg={{ base: "gray.100", _dark: "gray.950" }} >

      <Stack onClick={toggleColorMode} direction={"row"} align={"center"} position={"absolute"} top={4} right={4} cursor={"pointer"} >
        <Text >Dark mode </Text>
        <Switch checked={colorMode === 'dark'} ></Switch>
      </Stack>

      <Stack direction={"column"} gap={8} >
        <form action="">
          <Fieldset.Root>
            <Stack bg={{ base: "white", _dark: "gray.900" }} border={"1px solid"} borderColor={"gray.200"} _dark={{ borderColor: "gray.800" }} padding={"10"} >
                <Heading size={"2xl"} fontWeight={"extrabold"} >PotatoChat🥔</Heading>
                <Text color={"gray.500"} lineHeight={1} >Create new account</Text>
                
                <Fieldset.Content>
                  <Field required invalid={usernameError !== undefined} errorText={usernameError} >
                    <Input p={"6"} w="80" mt={6} placeholder="Username" />
                  </Field>
                  
                  <Field required invalid={usernameError !== undefined} errorText={firstnameError} >
                    <Input p={"6"} w="80" mt={1} placeholder="First name"  />
                  </Field>

                  <Field required invalid={usernameError !== undefined} errorText={lastnameError} >
                    <Input p={"6"} w="80" mt={1} placeholder="Last name"  />
                  </Field>

                  <Field required invalid={usernameError !== undefined} errorText={passwordError} >
                    <Input p={"6"} w="80" mt={1} placeholder="Password"  />
                  </Field>
                  
                  <Field required invalid={usernameError !== undefined} errorText={confirmPasswordError} >
                    <Input p={"6"} w="80" mt={1} placeholder="Confirm Password"  />
                  </Field>
                </Fieldset.Content>

                <Button type="submit" mt={6} fontWeight={"semibold"} >Sign up</Button>
            </Stack>
          </Fieldset.Root>
        </form>
        <Group margin={"0 auto"} > 
          <Text>Have an account?</Text>
          <ChakraLink asChild fontWeight={"semibold"} color={"cyan.400"} >
            <Link to={"/auth/login"} >Log in</Link> 
          </ChakraLink>
        </Group>
      </Stack>
    </Center>
  )
}

export default Register
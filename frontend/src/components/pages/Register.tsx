import { Flex, Button, Link as ChakraLink, Fieldset, Group, Heading, Input, Stack, Text } from "@chakra-ui/react"
import { useState } from "react"
import { Link } from "react-router"
import { ColorModeButton, useColorModeValue } from "../ui/color-mode"
import { Field } from "../ui/field"

const Register = () => {

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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const { username, firstname, lastname, password, confirmPassword } = e.target as HTMLFormElement;

    console.log(firstname)

    const usernameValid = !!username.value;
    const firstnameValid = !!firstname.value;
    const lastnameValid = !!lastname.value;
    const passwordValid = password.value.length >= 8;
    const confirmPasswordValid = password.value === confirmPassword.value;

    setUsernameError(usernameValid ? undefined : "Username is required");
    setFirstnameError(firstnameValid ? undefined : "Firstname is required");
    setLastnameError(lastnameValid? undefined : "Lastname is required");
    setPasswordError(passwordValid ? undefined : "Password is invalid");
    setConfirmPasswordError(confirmPasswordValid ? undefined : "Passwords do not match");

    if (!usernameValid || !passwordValid || !firstnameValid || !lastnameValid || !passwordValid ) {
      return;
    }

    const formData = {
      username: username.value,
      firstname: firstname.value,
      lastname: lastname.value,
      password: password.value,
      confirmPassword: confirmPassword.value
    }

    console.log(formData)
    
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
        <form onSubmit={handleSubmit} >
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
                <Text color={"gray.500"} lineHeight={1} >Create new account</Text>
                
                <Fieldset.Content>
                  <Field  invalid={usernameError !== undefined} errorText={usernameError} >
                    <Input name="username" p={"6"} w="80" mt={6} placeholder="Username" />
                  </Field>
                  
                  <Field invalid={firstnameError !== undefined} errorText={firstnameError} >
                    <Input name="firstname" p={"6"} w="80" mt={1} placeholder="First name"  />
                  </Field>

                  <Field invalid={lastnameError !== undefined} errorText={lastnameError} >
                    <Input name="lastname" p={"6"} w="80" mt={1} placeholder="Last name"  />
                  </Field>

                  <Field invalid={passwordError !== undefined} errorText={passwordError} helperText={"Password must be atleast 8 characters long"} >
                    <Input name="password" p={"6"} w="80" mt={1} placeholder="Password"  />
                  </Field>
                  
                  <Field invalid={confirmPasswordError !== undefined} errorText={confirmPasswordError} >
                    <Input name="confirmPassword" p={"6"} w="80" mt={1} placeholder="Confirm Password"  />
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
    </Flex>
  )
}

export default Register
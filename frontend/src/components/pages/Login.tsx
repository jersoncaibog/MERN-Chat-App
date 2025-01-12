import { Button, Link as ChakraLink, Fieldset, Flex, Group, Heading, Input, Stack, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Link } from "react-router"
import { ColorModeButton, useColorModeValue } from "../ui/color-mode"
import { Field } from "../ui/field"
import axios from "axios"
import { useNavigate } from "react-router"
import useAuthStore from "@/stores/useAuthStore"
import { toaster, Toaster } from "@/components/ui/toaster"
import {
  PasswordInput,
} from "@/components/ui/password-input"

const Login = () => {

  const navigate = useNavigate();
  const { accessToken } = useAuthStore()
  const setAccessToken = useAuthStore((state) => state.setAccessToken)

  useEffect(() => {
    console.log(accessToken)
    if (accessToken) {
      console.log("Login user")
      navigate("/");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken])

  const [ usernameError, setUsernameError ] = useState<string | undefined >()
  const [ passwordError, setPasswordError ] = useState<string | undefined >()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const loadingToaster = toaster.create({
      title: "Signing you in... ",
      description: "Please wait a moment.",
      duration: 5000,
      type: "loading"
    })

    const { username, password } = e.target as HTMLFormElement;

    const usernameValid = !!username.value;
    const passwordValid = !!password.value;

    setUsernameError(usernameValid ? undefined : "Username is required");
    setPasswordError(passwordValid ? undefined : "Password is required");

    if (!usernameValid || !passwordValid) {
      toaster.dismiss(loadingToaster)
      return;
    }

    try {
      const response = await axios.post(`/api/auth/login`, { 
        username: username.value, 
        password: password.value
      });

      console.log(response);
      toaster.dismiss(loadingToaster)
      setAccessToken(response.data.accessToken)
      navigate(`/`);

    } catch (error) {
      // Type the error as AxiosError
      if (axios.isAxiosError(error)) {

        const errorMessage = error.response?.data.message
        
        if (errorMessage === "User not found") {
          console.error('Error:', error.response?.data.message, ", Status:", error.response?.status);
          toaster.dismiss(loadingToaster)
          setUsernameError(errorMessage)
        }
        
        if (errorMessage === "Incorrect password") {
          console.error('Error:', error.response?.data.message, ", Status:", error.response?.status);
          toaster.dismiss(loadingToaster)
          setPasswordError(errorMessage)
        }
        
      } else {
        // Non-Axios error (e.g., network error)
        console.error('Error:', error);
        toaster.create({
          description: "Something went wrong.",
          duration: 5000,
          type: "error"
        })
        
      }
    }
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
      <Toaster />
      <Stack direction={"column"} gap={8} w={"full"} maxW={"460px"} >
        <form onSubmit={handleSubmit} >
          <Fieldset.Root>
            <Stack 
              border={"1px solid"}   
              borderColor={useColorModeValue("gray.200", "gray.800")}
              bg={useColorModeValue("white", "gray.900")} 
              padding={"10"} 
              width={"full"}
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
                <Text color={"gray.500"} lineHeight={1} >Please sign in to continue.</Text>

                <Fieldset.Content>
                  <Field invalid={usernameError !== undefined} errorText={usernameError} >
                    <Input autoComplete="off" name="username" p={"6"} mt={6} placeholder="Username" />
                  </Field>
                  
                  <Field invalid={passwordError !== undefined} errorText={passwordError} >
                    <PasswordInput autoComplete="off" name="password" p={"6"} mt={1} placeholder="Password"  />
                  </Field>
        
                  {/* <Checkbox mt={2} >Keep me logged in</Checkbox> */}
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
import { Flex, Button, Link as ChakraLink, Fieldset, Group, Heading, Input, Stack, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router"
import { ColorModeButton, useColorModeValue } from "../ui/color-mode"
import { Field } from "../ui/field"
import { Toaster, toaster } from "@/components/ui/toaster"
import useAuthStore from "@/stores/useAuthStore"
import axios from "axios"
import {
  PasswordInput,
} from "@/components/ui/password-input"

const Register = () => {
  
  const navigate = useNavigate();
  const { accessToken } = useAuthStore()
  const setAccessToken = useAuthStore((state) => state.setAccessToken)

  useEffect(() => {
    console.log(accessToken)
  }, [accessToken])

  const [ usernameError, setUsernameError ] = useState<string>()
  const [ firstnameError, setFirstnameError ] = useState<string>()
  const [ lastnameError, setLastnameError ] = useState<string>()
  const [ passwordError, setPasswordError ] = useState<string>()
  const [ confirmPasswordError, setConfirmPasswordError ] = useState<string>()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    
    const { username, firstname, lastname, password, confirmPassword } = e.target as HTMLFormElement;
    
    // validate inputs
    const usernameValid = !!username.value;
    const firstnameValid = !!firstname.value;
    const lastnameValid = !!lastname.value;
    const passwordValid = password.value.length >= 8;
    const confirmPasswordValid = password.value === confirmPassword.value;
    
    setUsernameError(usernameValid ? undefined : "Username is required");
    setFirstnameError(firstnameValid ? undefined : "Firstname is required");
    setLastnameError(lastnameValid? undefined : "Lastname is required");
    setPasswordError(passwordValid ? undefined : "Password too short");
    setConfirmPasswordError(confirmPasswordValid ? undefined : "Passwords do not match");    
    
    if (!usernameValid || !passwordValid || !firstnameValid || !lastnameValid || !passwordValid || !confirmPasswordValid ) {
      return;
    }

    // Save user data to database
    const formData = {
      username: username.value,
      firstname: firstname.value,
      lastname: lastname.value,
      password: password.value,
      confirmPassword: confirmPassword.value
    }

    // POST API for creating new user account
    const createUser = async () => {
      try {
        const response = await axios.post('/api/auth', formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        console.log("User account successfully created");
        setAccessToken(response.data.accessToken);
    
        // Redirect user to home page
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 3000);
    
      } catch (error) {
        // Type the error as AxiosError
        if (axios.isAxiosError(error)) {
          console.error('Error:', error.response?.data.message, ", Status:", error.response?.status);
          setUsernameError("Username is already taken");
        } else {
          // Non-Axios error (e.g., network error)
          console.error('Error:', error);
        }

        throw new Error(`Error creating user account: ${error}`);
      }
    };

    // create toaster
    toaster.promise(createUser, {
      success: {
        title: "Account created successfully",
        description: "Redirecting you to the home page now.",
        duration: 5000
      },
      error: {
        title: "Error creating account",
        description: "Please try again.",
        duration: 5000,
      },
      loading: {
        title: "Creating account....",
        description: "Please wait while we are creating your account.",
      }
    })
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
              w={"full"} 
            >
                <Stack direction={"row"} align={"center"} justifyContent={"space-between"} >
                  <Heading _selection={{ bg: useColorModeValue("gray.400", "gray.500") }} textAlign={"center"} size={"2xl"} fontWeight={"extrabold"} >PotatoChat🥔</Heading>
                  <ColorModeButton 
                    _icon={{ width: "18px" }}
                    _hover={{
                      bg: useColorModeValue("gray.100", "gray.800")
                    }} 
                  />
                </Stack>
                <Text color={"gray.500"} lineHeight={1} >Create your account to get started!</Text>
                
                <Fieldset.Content>
                  <Field  invalid={usernameError !== undefined} errorText={usernameError} >
                    <Input _selection={{ bg: useColorModeValue("gray.400", "gray.500") }} autoComplete="off" name="username" p={"6"} mt={6} placeholder="Username" />
                  </Field>
                  
                  <Field invalid={firstnameError !== undefined} errorText={firstnameError} >
                    <Input _selection={{ bg: useColorModeValue("gray.400", "gray.500") }} autoComplete="off" name="firstname" p={"6"} mt={1} placeholder="First name"  />
                  </Field>

                  <Field invalid={lastnameError !== undefined} errorText={lastnameError} >
                    <Input _selection={{ bg: useColorModeValue("gray.400", "gray.500") }} autoComplete="off" name="lastname" p={"6"} mt={1} placeholder="Last name"  />
                  </Field>

                  <Field invalid={passwordError !== undefined} errorText={passwordError} helperText={"Password must be atleast 8 characters long"} >
                    <PasswordInput _selection={{ bg: useColorModeValue("gray.400", "gray.500") }} name="password" p={"6"} mt={1} placeholder="Password" />
                  </Field>
                  
                  <Field invalid={confirmPasswordError !== undefined} errorText={confirmPasswordError} >
                    <PasswordInput _selection={{ bg: useColorModeValue("gray.400", "gray.500") }} name="confirmPassword" p={"6"} mt={1} placeholder="Confirm Password"  />
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
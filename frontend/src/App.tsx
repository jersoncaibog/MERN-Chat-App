import { Box } from '@chakra-ui/react'
import { Routes, Route } from 'react-router'
import Home from './components/pages/Home.tsx'
import Login from './components/pages/Login'
import Register from './components/pages/Register.tsx'
import Account from './components/pages/Account.tsx'

function App() {
  return (
    <Box minH={"100vh"}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="account" element={<Account />} />

        <Route path="auth" >
          <Route index path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Box>
  )
}

export default App

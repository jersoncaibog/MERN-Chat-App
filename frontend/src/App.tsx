import { Box } from '@chakra-ui/react'
import { Routes, Route } from 'react-router'
import Home from '@/components/pages/Home.tsx'

function App() {
  return (
    <Box minH={"100vh"}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Box>
  )
}

export default App

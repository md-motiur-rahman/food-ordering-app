

import { Navigate, Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<span>Home</span>} />
        <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  )
}

export default AppRoutes
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import HomePage from './pages/HomePage'
import CountryPage from './pages/CountryPage'
import ComparisonPage from './pages/ComparisonPage'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:id" element={<CountryPage />} />
        <Route path="/compare" element={<ComparisonPage />} />
        <Route path="/compare/:a/:b" element={<ComparisonPage />} />
      </Routes>
    </Layout>
  )
}

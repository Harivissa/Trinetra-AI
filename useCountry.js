import { useState, useEffect } from 'react'
import { api } from '../utils/api'

export function useCountries() {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    api.getCountries()
      .then(setCountries)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  return { countries, loading, error }
}

export function useCountry(id) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) return
    setLoading(true)
    setData(null)
    api.getCountry(id)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [id])

  return { data, loading, error }
}

export function useComparison(countryA, countryB) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!countryA || !countryB) return
    setLoading(true)
    setData(null)
    api.compare(countryA, countryB)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [countryA, countryB])

  return { data, loading, error }
}

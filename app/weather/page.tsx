/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useEffect, useState } from 'react'
// Styles
import styles from './weather.module.css'
// Utils
import { fetchWeather } from './utils/fetchWeather'
// Components
import CardItem from './components/(cardItem)/CardItem'
// Types
import {
  RootWeather,
  Forecastday,
} from './weather.interface'
import LoadingPage from './loading'


export default function WeatherApp() {
  const [userLocation, setUserLocation] = useState<{
    latitude: number
    longitude: number
  }>({ latitude: 0, longitude: 0 })
  const [weather, setWeather] = useState<RootWeather | any>({})

  const fetcher = async () => {
    const weatherData = await fetchWeather({
      latitude: userLocation.latitude,
      longitude: userLocation.longitude,
    })
    setWeather(weatherData)
  }

  useEffect(() => {
    fetcher()
  }, [])

  useEffect(() => {
    if ('geolocation' in navigator) {
      // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords
        setUserLocation({ latitude, longitude })
      })
    }
  }, [])

  return (
    <section className={styles.weatherSection}>
      {Object.keys(weather).length > 0 ? (
        <>
          <h1 className={styles.countryName}>{weather.location.country}</h1>
          {weather.forecast.forecastday.map((day: Forecastday) => (
            <CardItem key={day.date_epoch} day={day} />
          ))}
        </>
      ) : (
        <LoadingPage/>
        )}
    </section>
  )
}

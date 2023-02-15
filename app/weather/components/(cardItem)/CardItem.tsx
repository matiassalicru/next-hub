import Image from 'next/image'
// Styles
import styles from './CardItem.module.css'
// Types
import { Forecastday } from '../../weather.interface'

const CardItem = ({ day }: { day: Forecastday }): JSX.Element => {
  const { currentWeather, dayTitle, weatherInfo, infoItem, weatherImage } =
    styles
  return (
    <section className={currentWeather} key={day.date_epoch}>
      <h2 className={dayTitle}>{day.date}</h2>
      <div className={weatherInfo}>
        <p className={infoItem}>Min: {day.day.mintemp_c}°C</p>
        <p className={infoItem}>Average: {day.day.avgtemp_c}°C</p>
        <p className={infoItem}>Max: {day.day.maxtemp_c}°C</p>
        <p className={infoItem}>
          Chances to rain: {day.day.daily_will_it_rain}%
        </p>
        <p className={infoItem}>Humidity: {day.day.avghumidity}</p>
      </div>
      <div className={weatherImage}>
        <Image
          priority
          src={`https:${day.day.condition.icon}`}
          alt={day.day.condition.text}
          width={72}
          height={72}
        />
        <p>{day.day.condition.text}</p>
      </div>
    </section>
  )
}

export default CardItem

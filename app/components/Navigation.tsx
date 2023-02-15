import Link from 'next/link'
import styles from './Navigation.module.css'
const links = [
  { label: 'Home', route: '/' },
  { label: 'Posts App', route: '/posts' },
  { label: 'Weather App', route: '/weather' },
  { label: 'Notes App', route: '/notes' },
]

export const Navigation = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {links.map(({ label, route }) => (
            <>
              <li key={route}>
                <Link href={route}>{label}</Link>
              </li>
            </>
          ))}
        </ul>
      </nav>
    </header>
  )
}

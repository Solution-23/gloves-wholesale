import React from 'react'
import Link from 'next/link'
import './styles.css'

export const metadata = {
  description: 'Оптовая продажа хлопчатобумажных рабочих перчаток',
  title: 'ПромПерчатка-Опт',
}

const navItems = [
  { label: 'Главная', href: '/' },
  { label: 'Каталог', href: '/catalog' },
  { label: 'О компании', href: '/about' },
  { label: 'Условия опта', href: '/wholesale' },
  { label: 'Доставка и оплата', href: '/delivery' },
  { label: 'Контакты', href: '/contacts' },
]

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html lang="ru">
      <body>
        <header style={{ borderBottom: '1px solid #ddd', padding: '1rem 2rem' }}>
          <nav style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
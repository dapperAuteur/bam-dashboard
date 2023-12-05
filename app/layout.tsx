import { Metadata } from 'next';
import AuthProvider from './(components)/AuthProvider';
import Nav from './(components)/Nav';
import './globals.css'

export const metadata: Metadata = {
  title: 'Dashboard App',
  description: 'BAM',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <AuthProvider>
        <Nav />
        <body className="m-2">{children}</body>
      </AuthProvider>
  )
}

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
    <html lang="en">
      <body className="m-2">
        <AuthProvider>
          <Nav />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}

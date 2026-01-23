import "./globals.css"
import Navbar from "@/components/Navbar"

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-gray-950 text-white">
        <Navbar />
        {children}
      </body>
    </html>
  )
}

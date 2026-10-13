
import NavigationHeader from "@/components/NavigationHeader"
import Footer from "@/components/Footer"

export default function WebLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <NavigationHeader />
      {/* <main> tag lagane se layout structure aur clean ho jata hai */}
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  )
}

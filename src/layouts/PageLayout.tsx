import { Footer } from "@/components/Footer";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";
export const PageLayout = () => {
  return (
    <div className="min-h-screen flex flex-col w-full ">
      <Header />
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
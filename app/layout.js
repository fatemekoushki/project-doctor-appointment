import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { ReactQueryProvider } from "./queryProvider";
import { Toaster } from "../components/ui/toaster";
import { imageOptimizer } from "next/dist/server/image-optimizer";

const outfit= Outfit({ subsets: ["latin"] });

export const metadata = {  
  title: "doctor-appointment-book",  
  description: "doctor-appointment-book",  
     
};


export default function RootLayout({ children }) {
  
  
  return (
    <html lang="en">
   
      <body className={outfit.className}>
       
          <ReactQueryProvider>
          <div className="md:px-10" >
          <Header />
          {children}
          <Toaster />
          </div>
          <Footer />
          
          </ReactQueryProvider>
         
          
       
       
       </body>
    </html>
  );
}

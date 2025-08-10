
import "./globals.css";
///import { Inter} from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider";

export const runtime = "edge";


//const inter = Inter({subsets: ['latin'] , weight: ["200" , "100" , "200" , "100"]})

export const metadata = {
  title: 'My firts next application' , 
  description: 'I create this app for test my self'
} 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <title>My first app in nextjs</title>
            <meta name="theme-color" content="#fb923c" />
      <body
        className={`antialiased `}  
      >
        <ThemeProvider>
 {children}
 </ThemeProvider>
      </body>
    </html>
  );
}


import "./globals.css";
///import { Inter} from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider";

export const runtime = "edge";


//const inter = Inter({subsets: ['latin'] , weight: ["200" , "100" , "200" , "100"]})

export const metadata = {
  title: 'Un regalo que debí haberte dado hace tiempo' , 
  description: 'I create this app for us' ,
  },
} 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <title>{metadata.title}</title>
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

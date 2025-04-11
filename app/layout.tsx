import { Geist_Mono, Pixelify_Sans } from "next/font/google";
import { Audiowide } from "next/font/google";
import { ReactNode } from "react";
import './globals.css';
import '@mantine/core/styles.css';
import { MantineProvider, ColorSchemeScript, createTheme, Container, Text, AppShell, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import FooterPage from "./Footer/page";

// Define Google Font
const pixel = Pixelify_Sans({ 
  subsets: ["latin"],
  display: 'swap',
  
  variable: '--font-pixel', // Making it available as a CSS variable
});

const audiowide = Audiowide({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-audiowide',
   weight: '400',
});

const geist = Geist_Mono({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-audiowide',
})

// Create Mantine theme
const theme = createTheme({
  primaryColor: 'red',
  fontFamily: 'var(--font-geist), monospace',
  headings: {
    fontFamily: 'var(--font-geist), monospace',
    fontWeight: '600', // all headings bold
    sizes: {
      h1: { fontSize: '2.4rem', fontWeight: '700' },
      h2: { fontSize: '2rem', fontWeight: '600' },
      h3: { fontSize: '1.6rem', fontWeight: '500' },
    },
  },
  defaultRadius: 'md',
  colors: {
    dark: [
      '#C1C2C5', '#A6A7AB', '#909296', '#5C5F66', '#373A40',
      '#2C2E33', '#25262B', '#1A1B1E', '#141517', '#101113',
    ],
  },
});


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <main style={{ flexGrow: 1 }}>
              {children}
            </main>
            <FooterPage/>
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}
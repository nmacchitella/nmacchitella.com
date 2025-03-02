import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import Image from 'next/image';
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function Navigation() {
  return (
    <nav className="navigation" id="navigation">
      <div className="navigation__container">
        <div className="navigation__menu">
          <ul className="navigation__menu-ul">
            <li><Link href="/product">Product</Link></li>
            <li><Link href="/content">Content</Link></li>
            <li><Link href="/resume">About</Link></li>
            <li><Link href="/bio">Bio</Link></li>
          </ul>
        </div>
        <div className="navigation__logo">
          <Link className="navigation__logo-link" href="/">
            Nicola Macchitella
          </Link>
        </div>
        <div className="navigation__social">
          <a href="https://www.linkedin.com/in/nicola-macchitella/" target="_blank" rel="noopener noreferrer" className="navigation__social-link">
            <Image 
              src="/img/icon/iconmonstr-linkedin.svg" 
              alt="linkedin" 
              width={24} 
              height={24} 
            />
          </a>
          {/* <a className="navigation__social-link navigation__social-link_imbd" href="https://www.imdb.com/name/nm1722619/" target="_blank">
            <img src="img/icon/brand_imdb_icon.svg" alt="imbd" />
          </a> */}
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <p className="text-center">
              <a className="footer__email" href="mailto:nm@nicolamacchitella.com">nm@nicolamacchitella.com</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Nicola Macchitella</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieManager from "@/components/CookieManager";
import { site } from "@/lib/site";

export const metadata: Metadata={
  metadataBase:new URL(site.siteUrl),
  title:{default:"AFII Corporate Advisors | Infrastructure & Investment Advisory",template:"%s | AFII Corporate Advisors"},
  description:"AFII Corporate Advisors' India-focused practice in infrastructure project advisory, structured finance, investment facilitation and project incubation. Part of the AFII international network.",
  applicationName:"AFII Corporate Advisors",
  keywords:["AFII Corporate Advisors", "AFII India", "infrastructure advisory", "project finance", "bid advisory", "project incubation"],
  openGraph:{type:"website",locale:"en_IN",siteName:"AFII Corporate Advisors",title:"AFII Corporate Advisors — India",description:"Infrastructure incubation, investments and finance in India.",images:[{url:"/media/v3/hero-poster.webp",width:1920,height:1080,alt:"India infrastructure landscape"}]},
  twitter:{card:"summary_large_image"},
  robots:{index:true,follow:true},
};
export const viewport:Viewport={width:"device-width",initialScale:1,themeColor:"#081c3c"};
export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en-IN"><body><a href="#main-content" className="skip-link">Skip to content</a><Header/><main id="main-content">{children}</main><Footer/><CookieManager/></body></html>;
}

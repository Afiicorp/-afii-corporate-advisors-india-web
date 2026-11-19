import Link from "next/link";
export default function LegalLayout({title,date,children}:{title:string;date:string;children:React.ReactNode}){
 return <><section className="inner-hero shell legal-hero"><h1>{title}</h1><p>AFII Corporate Advisors · India</p></section><section className="section-pad"><div className="shell legal-layout"><aside><h2>Website Information</h2><Link href="/privacy-policy">Privacy Policy</Link><Link href="/cookies">Cookie Policy</Link><Link href="/terms">Terms of Use</Link><Link href="/legal-notice">Legal Notice</Link><span>Last reviewed: {date}</span></aside><article className="legal-content">{children}</article></div></section></>
}

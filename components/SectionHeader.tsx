import Link from "next/link";
export default function SectionHeader({title,body,link,label}:{title:string;body?:string;link?:string;label?:string}){
  return <div className="section-head"><div><h2>{title}</h2>{body&&<p>{body}</p>}</div>{link&&<Link href={link} className="text-link">{label||"Learn more"} <span>↗</span></Link>}</div>;
}

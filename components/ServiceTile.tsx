import Image from "next/image";
import Link from "next/link";
export default function ServiceTile({name,brief,slug,image}:{name:string;brief:string;slug:string;image:string}){return <Link className="v2-service-tile" href={`/expertise/${slug}`}><div className="v2-service-picture"><Image src={image} alt={`${name}`} fill sizes="(max-width:680px) 100vw, (max-width:1050px) 50vw, 33vw"/></div><div className="v2-service-info"><h3>{name}</h3><p>{brief}</p><span>Explore practice <span aria-hidden="true">→</span></span></div></Link>}

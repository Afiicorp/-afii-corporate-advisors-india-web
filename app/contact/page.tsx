import Link from "next/link";
import type {Metadata} from "next";
import ContactForm from "@/components/ContactForm";
import {site} from "@/lib/site";
export const metadata:Metadata={title:"Contact AFII Corporate Advisors",description:"Get in touch with the AFII Corporate Advisors Limited India representative office in New Delhi."};
export default function Contact(){return <><section className="v2-page-hero v2-page-hero-light"><div className="shell"><h1>Contact AFII Corporate Advisors</h1><p>Discuss a project, advisory opportunity or institutional collaboration.</p></div></section><section className="v2-section"><div className="shell v2-contact-grid"><div><h2>New Delhi</h2><address>{site.address}</address><dl><dt>General enquiries</dt><dd><a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a></dd><dt>Telephone</dt><dd><a href={`tel:${site.telephone}`}>{site.telephoneLabel}</a></dd></dl><Link className="v2-inline-link" href="/offices">Other offices & representatives <span>→</span></Link></div><div className="v2-form-wrap"><h2>Write to us</h2><ContactForm/></div></div></section></>}

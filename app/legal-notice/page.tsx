import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { site } from "@/lib/site";
export const metadata: Metadata = { title: "Legal Notice" };
export default function LegalNotice() { return <LegalLayout title="Legal Notice" date="19 November 2026">
 <h2>Website operator</h2><p><strong>AFII Corporate Advisors Limited</strong> · Corporate Identification Number (CIN): <strong>U74140DL2005PLC144242</strong>.</p>
 <p>India correspondence: {site.address}<br/>Email: <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a><br/>Telephone: {site.telephoneLabel}.</p>
 <h2>Scope of the website</h2><p>This website describes AFII Corporate Advisors Limited, its areas of work, project experience and professional network. Information is intended for business and institutional audiences.</p>
 <h2>AFII international network</h2><p>AFII Group information is available at <a href={site.groupUrl} target="_blank" rel="noopener noreferrer">afii.eu</a>. Other network businesses maintain their own legal identities and engagement arrangements.</p>
 <h2>Services and investments</h2><p>Information on advisory, financing and investments is general corporate information and does not constitute an offer of securities or personalised investment advice. Professional engagements are governed by their specific agreements and applicable law.</p>
 <h2>Intellectual property</h2><p>Names, logos, documents and other materials remain the property of their respective owners. Third-party visual material is used under its applicable permissions.</p>
 <h2>Contact</h2><p>For website and corporate-information enquiries, email <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.</p>
 </LegalLayout>; }

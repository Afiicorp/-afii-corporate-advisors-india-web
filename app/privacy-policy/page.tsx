import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { site } from "@/lib/site";
export const metadata: Metadata = { title: "Privacy Policy", description: "Privacy information for AFII Corporate Advisors Limited." };
export default function Privacy() { return <LegalLayout title="Privacy Policy" date="19 November 2026">
 <h2>About this notice</h2><p>AFII Corporate Advisors Limited explains here how information supplied through this website and through business correspondence is handled. Our contact office is in New Delhi, India.</p>
 <h2>Information collected</h2><p>When you contact us, we may receive your name, organisation, email address, phone number and enquiry details. The contact form opens your email application; it does not submit messages to a website database. Hosting and security providers may process technical access logs needed to operate the site.</p>
 <h2>How information is used</h2><p>We use enquiries to communicate with you, evaluate requests for advisory services, maintain business records and protect the website. Information is accessed by the personnel and service providers who need it for these purposes.</p>
 <h2>International enquiries</h2><p>When an enquiry concerns an international AFII business, relevant information may be forwarded to the appropriate team or associated company, subject to applicable data-protection requirements.</p>
 <h2>Cookies</h2><p>Cookie preferences are saved in your browser's local storage. This site does not enable advertising or analytics scripts by default. Read our <a href="/cookies">Cookie Policy</a> for information about managing preferences.</p>
 <h2>Retention and security</h2><p>Information is retained according to its business purpose and legal requirements. Appropriate access controls and operational security measures apply to the systems used to handle correspondence.</p>
 <h2>Your rights and contact</h2><p>You may contact us to request access, correction, erasure or other actions available under applicable Indian data-protection law. You may also withdraw consent where processing relies on consent or raise a grievance using the contact below.</p>
 <p><a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a><br/>{site.address}</p>
 <h2>Updates</h2><p>We review this notice as our services and legal requirements change. The date above records the latest website revision.</p>
 </LegalLayout>; }

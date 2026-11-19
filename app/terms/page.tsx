import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import {site} from "@/lib/site";
export const metadata:Metadata={title:"Terms of Use"};
export default function Terms(){return <LegalLayout title="Terms of Use" date="18 November 2026">
  <h2>Use of this website</h2><p>This website provides general information about AFII Corporate Advisors' India-focused practice. Its content is not an offer to provide regulated financial services, securities, investments or financing in any jurisdiction. Nothing on this website constitutes investment, legal, tax or other professional advice or an offer or invitation to buy or sell any financial product.</p>
  <h2>Not an engagement</h2><p>Browsing the site or contacting AFII does not establish an adviser–client relationship or create a financing commitment. Any services require appropriate due diligence, applicable regulatory permissions and written engagement terms with the relevant separately incorporated entity.</p>
  <h2>Project and transaction information</h2><p>Our project and transaction descriptions may cover proposals, investment intentions, joint ventures, completed work or work previously in progress. Descriptions of past or ongoing work do not confirm a specific closing, investment return or current mandate status.</p>
  <h2>Accuracy and availability</h2><p>While reasonable care should be taken with content, information may become outdated or incomplete. AFII does not warrant uninterrupted website availability. Your use is subject to non-excludable rights and remedies provided by applicable law.</p>
  <h2>Intellectual property</h2><p>AFII names and materials belong to their respective rights holders. Third-party photographs, logos and project graphics may remain the property of their original owners. Do not reproduce materials without appropriate permission.</p>
  <h2>External websites</h2><p>Links to affiliated entities and map services are offered for convenience; each destination may apply separate policies and rules.</p>
  <h2>Applicable law and contact</h2><p>Subject to mandatory law and enforceable arrangements, this India-focused website is intended to be operated in accordance with Indian law. Any dispute forum should be confirmed by approved counsel for the verified Indian contracting entity. Enquiries may be sent to <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.</p>
</LegalLayout>}

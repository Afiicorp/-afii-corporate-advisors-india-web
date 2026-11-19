"use client";
import LegalLayout from "@/components/LegalLayout";

export default function Cookies() {
  return <LegalLayout title="Cookie Policy" date="19 November 2026">
    <h2>About cookies and local storage</h2>
    <p>AFII Corporate Advisors Limited uses essential browser storage to keep a record of your cookie preferences. Browser storage enables us to remember your selection when you revisit the website.</p>

    <h2>What is used on this website</h2>
    <p>The current website does not activate analytics, advertising, or marketing trackers. The homepage film is hosted locally and does not require an external video provider. The website and its hosting infrastructure may process technical information needed to deliver pages and maintain security, as explained in our <a href="/privacy-policy">Privacy Policy</a>.</p>
    <div className="cookie-table" aria-label="Browser storage used by AFII Corporate Advisors">
      <div><strong>Storage item</strong><strong>Purpose</strong><strong>Retention</strong></div>
      <div><span>afii_india_consent_v1</span><span>Records essential and optional category selections, together with the date of your last choice.</span><span>Until browser data is cleared or you change your selection</span></div>
    </div>

    <h2>Optional preferences</h2>
    <p>Preference controls are provided for analytics and external media. Both categories are off by default. Selecting a category records a preference; it does not activate a provider that has not been installed. Before a new optional provider is introduced, we will update the relevant information and seek fresh permission where required.</p>

    <h2>Manage or withdraw consent</h2>
    <p>You can reject optional categories, accept them, or make individual selections. Your latest selection replaces your earlier choice. You can also clear browser storage using your browser settings.</p>
    <button className="button-dark" type="button" onClick={() => window.dispatchEvent(new Event("afii:cookie-open"))}>Manage cookie preferences</button>

    <h2>Questions</h2>
    <p>For questions about the website's use of personal information, refer to the <a href="/privacy-policy">Privacy Policy</a> or contact the India office through the <a href="/contact">Contact page</a>.</p>
  </LegalLayout>;
}

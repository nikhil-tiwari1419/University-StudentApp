import React from "react";
import rtmnuImg from "../../assets/rtmnu.png";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen mx-auto w-full max-w-md px-6 py-8 text-black bg-[linear-gradient(180deg,_#eaf7f7_0%,_#b6e8f9_40%,_#cfd8fc_70%,_#f7d0f9_100%)] pb-10">
      {/* Header Logo */}
      <div className="flex justify-center mb-4">
        <img src={rtmnuImg} alt="RTMNU Logo" className="rounded-full h-28" />
      </div>

      <h2 className="text-center text-xl font-bold mb-2">
        Rashtrasant Tukadoji Maharaj Nagpur University (RTMNU)
      </h2>
      <h3 className="text-center text-lg font-semibold mb-6 border-b border-gray-400 pb-2">
        Privacy Policy
      </h3>

      {/* Content */}
      <div className="space-y-6 text-sm leading-6">
        <p>
          **Last Updated:** {new Date().toLocaleDateString()}
        </p>

        <p>
          Welcome to <strong>Rashtrasant Tukadoji Maharaj Nagpur University (RTMNU)</strong>.
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and safeguard your personal information when you use our
          University Application, website, or related services.
        </p>

        <h4 className="font-semibold text-base">1. Information We Collect</h4>
        <ul className="list-disc ml-5 space-y-1">
          <li>Full Name</li>
          <li>Student ID / Enrollment Number</li>
          <li>Email Address & Phone Number</li>
          <li>Date of Birth & Address</li>
          <li>Academic details (marks, attendance, results)</li>
          <li>Device or usage data (IP, browser type, OS, session time)</li>
          <li>Uploaded documents or profile photos for academic purposes</li>
        </ul>

        <h4 className="font-semibold text-base">2. How We Use Your Information</h4>
        <ul className="list-disc ml-5 space-y-1">
          <li>Manage admissions, academic records, and student identity</li>
          <li>Provide academic and administrative services</li>
          <li>Communicate notifications, results, or updates</li>
          <li>Ensure data security and prevent fraudulent activities</li>
          <li>Improve the usability and performance of our application</li>
          <li>Comply with university or legal requirements</li>
        </ul>

        <h4 className="font-semibold text-base">3. Sharing of Information</h4>
        <p>
          We do <strong>not sell or rent</strong> your personal data. However, we may
          share limited information with:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Authorized university departments for legitimate purposes</li>
          <li>Trusted service providers under strict confidentiality</li>
          <li>Legal authorities when required by law</li>
        </ul>

        <h4 className="font-semibold text-base">4. Data Retention</h4>
        <p>
          Your information is retained securely as long as you are a student or
          as required by institutional policy. Once no longer needed, it is
          deleted or anonymized.
        </p>

        <h4 className="font-semibold text-base">5. Data Security</h4>
        <p>
          We implement administrative, physical, and technical safeguards to
          protect your data from unauthorized access or disclosure. These
          include SSL encryption, limited access control, and routine audits.
          However, no digital system is 100% secure.
        </p>

        <h4 className="font-semibold text-base">6. Your Rights</h4>
        <p>You have the right to:</p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Access or correct your personal information</li>
          <li>Request deletion of your data (subject to legal limits)</li>
          <li>Withdraw consent for certain processing activities</li>
        </ul>
        <p>
          You can exercise these rights by contacting our support team at{" "}
          <a
            href="mailto:nikhiltiwari1425@gmail.com"
            className="text-blue-700 underline"
          >
            nikhiltiwari1425@gmail.com
          </a>.
        </p>

        <h4 className="font-semibold text-base">7. Children’s Privacy</h4>
        <p>
          This application is intended for university students (16+). If you are
          under 16, parental consent is required to use the application.
        </p>

        <h4 className="font-semibold text-base">8. Updates to This Policy</h4>
        <p>
          We may update this Privacy Policy periodically. Continued use of the
          application after any modification indicates acceptance of the updated
          terms.
        </p>

        <h4 className="font-semibold text-base">9. Contact Information</h4>
        <p>
          <strong>Data Protection Officer</strong> <br />
          Rashtrasant Tukadoji Maharaj Nagpur University (RTMNU) <br />
          Nagpur, Maharashtra, India <br />
          📧 Email:{" "}
          <a
            href="mailto:nikhiltiwari1425@gmail.com"
            className="text-blue-700 underline"
          >
            nikhiltiwari1425@gmail.com
          </a>
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-700 mt-10 mb-15 border-t border-gray-300 pt-4">
        &copy; {new Date().getFullYear()} Rashtrasant Tukadoji Maharaj Nagpur
        University. All rights reserved.
      </footer>
    </div>
  );
}

export default PrivacyPolicy;

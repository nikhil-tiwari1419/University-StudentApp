import React from 'react'
import rtmnuImg from "../../assets/rtmnu.png"

function privacyPolicy() {
  return (
    <div className='min-h-screen mx-auto w-full max-w-md px-6 py-5 text-black bg-[linear-gradient(180deg,_#eaf7f7_0%,_#b6e8f9_40%,_#cfd8fc_70%,_#f7d0f9_100%)] pb-10'>
      <div className='flex justify-center '>
        <img src={rtmnuImg} alt=" rtmnu image"
          className='rounded-full h-30 ' />
      </div>
      <h3> [RTMNU ](Rashtrasant Tukadoji Maharaj Nagpur University ) </h3>
      <br />
      <h3 className='border text-center mb-6'>terms of service</h3>

      <div className='space-y-4 max-w-xl mx-auto text-sm leading-6 pb-20'>
        <p className='border border-blue-900 p-3  rounded'>


          Your privacy is important to us, and this Privacy Policy explains how we collect, use, store, and protect your personal information when you interact with our application, website, or services. By using our services, you agree to the terms described in this statement. We may collect personal information such as your name, email address, phone number, student ID, and other relevant details during registration, login, or when you use certain features. Additionally, we may collect non-personal data like device information, IP address, and browsing activity to enhance and optimize our services.
          <br />
          <br />
          The information we collect is used to provide and personalize our services, communicate important updates or changes, improve platform performance, and ensure security while preventing fraud. We also process data to comply with applicable legal requirements. To protect your information, we implement reasonable technical and organizational measures to prevent unauthorized access, alteration, or disclosure. However, no method of data transmission over the internet or electronic storage is completely secure, and therefore, we cannot guarantee absolute security.
          <br />
          <br />
          We do not sell, trade, or rent your personal data to third parties. In certain cases, we may share your information with trusted service providers who help us operate our services, under strict confidentiality agreements. We may also disclose information if required by law or when necessary to protect our legal rights.
          <br />
          <br />
          <br />
          You have the right to access, update, or request deletion of your personal data, and you may withdraw consent for data processing at any time, subject to legal obligations. This Privacy Policy may be updated from time to time, and your continued use of our services after changes signifies acceptance of the revised terms. For any questions or concerns regarding this Privacy Policy, please contact us at [nikhiltiwari1425@gamil.com].
        </p>
        <footer className="text-center text-sm text-gray-700 mt-10">
          &copy; {new Date().getFullYear()} RTMNU ( Rashtrasant Tukadoji Maharaj Nagpur University ). All rights reserved.
        </footer>
      </div>
    </div>
  )
}

export default privacyPolicy
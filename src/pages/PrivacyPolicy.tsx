const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6">PRIVACY NOTICE</h1>
        <p className="mb-4">Last updated August 18, 2022</p>
        
        <div className="mb-8">
          <p>
            This privacy notice for Torus GmbH ('Company', 'we', 'us', or 'our',), describes how and why we might collect, store, use, and/or share ('process') your information when you use our services ('Services'), such as when you:
          </p>
          <ul className="list-disc pl-6 my-4">
            <li>Visit our website at torus.eu, or any website of ours that links to this privacy notice</li>
            <li>Engage with us in other related ways, including any sales, marketing, or events</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Questions or concerns?</h2>
          <p>
            Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at info@torus.eu.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">SUMMARY OF KEY POINTS</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with Torus GmbH and the Services, the choices you make, and the products and features you use.</li>
            <li><strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</li>
            <li><strong>Do we receive any information from third parties?</strong> We do not receive any information from third parties.</li>
            <li><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</li>
            <li><strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties.</li>
            <li><strong>How do we keep your information safe?</strong> We have organizational and technical processes and procedures in place to protect your personal information.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">TABLE OF CONTENTS</h2>
          <ol className="list-decimal pl-6 space-y-2">
            {Array.from({ length: 14 }, (_, i) => i + 1).map((num) => (
              <li key={num} className="hover:text-primary cursor-pointer">
                <a href={`#section-${num}`} className="hover:underline">
                  {num}. {getPrivacySection(num)}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Privacy Policy Sections */}
        {Array.from({ length: 14 }, (_, i) => i + 1).map((num) => (
          <section key={num} id={`section-${num}`} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">{num}. {getPrivacySection(num)}</h2>
            {renderPrivacySection(num)}
          </section>
        ))}
      </div>
    </div>
  );
};

// Helper function to get section titles
const getPrivacySection = (num: number): string => {
  const sections: { [key: number]: string } = {
    1: "WHAT INFORMATION DO WE COLLECT?",
    2: "HOW DO WE PROCESS YOUR INFORMATION?",
    3: "WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?",
    4: "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?",
    5: "DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?",
    6: "HOW LONG DO WE KEEP YOUR INFORMATION?",
    7: "HOW DO WE KEEP YOUR INFORMATION SAFE?",
    8: "DO WE COLLECT INFORMATION FROM MINORS?",
    9: "WHAT ARE YOUR PRIVACY RIGHTS?",
    10: "CONTROLS FOR DO-NOT-TRACK FEATURES",
    11: "DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?",
    12: "DO WE MAKE UPDATES TO THIS NOTICE?",
    13: "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?",
    14: "HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?"
  };
  return sections[num] || "";
};

// Helper function to render section content
const renderPrivacySection = (num: number): JSX.Element => {
  switch (num) {
    case 1:
      return (
        <div>
          <h3 className="text-xl font-semibold mb-3">Personal information you disclose to us</h3>
          <p className="mb-4"><em>In Short: We collect personal information that you provide to us.</em></p>
          <p className="mb-4">
            We collect personal information that you voluntarily provide to us when you register on the Services,
            express an interest in obtaining information about us or our products and Services, when you participate in
            activities on the Services, or otherwise when you contact us.
          </p>
          <h4 className="text-lg font-semibold mb-2">Personal Information Provided by You</h4>
          <p className="mb-4">
            The personal information that we collect depends on the context of your interactions with us and the Services,
            the choices you make, and the products and features you use. The personal information we collect may include
            the following:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>names</li>
            <li>phone numbers</li>
            <li>email addresses</li>
            <li>mailing addresses</li>
            <li>billing addresses</li>
          </ul>
          <h4 className="text-lg font-semibold mb-2">Sensitive Information</h4>
          <p className="mb-4">We do not process sensitive information.</p>
          <h4 className="text-lg font-semibold mb-2">Payment Data</h4>
          <p className="mb-4">
            We may collect data necessary to process your payment if you make purchases, such as your payment instrument
            number (such as a credit card number), and the security code associated with your payment instrument.
            All payment data is stored by PayPal. You may find their privacy notice link(s) here:
            <a href="https://www.paypal.com/uk/webapps/mpp/ua/privacy-full" className="text-blue-600 hover:underline ml-1">
              https://www.paypal.com/uk/webapps/mpp/ua/privacy-full
            </a>.
          </p>
        </div>
      );
    case 2:
      return (
        <div>
          <p className="mb-4"><em>In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</em></p>
          <p className="mb-4">
            We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To facilitate account creation and authentication and otherwise manage user accounts</li>
            <li>To send you marketing and promotional communications</li>
            <li>To protect our Services</li>
            <li>To save or protect an individual's vital interest</li>
          </ul>
        </div>
      );
    case 3:
      return (
        <div>
          <p className="mb-4"><em>In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason.</em></p>
          <p className="mb-4">
            If you are located in the EU or UK, this section applies to you. The General Data Protection Regulation (GDPR)
            and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information.
          </p>
          <h4 className="text-lg font-semibold mb-2">Legal Bases for Processing</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Consent</li>
            <li>Legitimate Interests</li>
            <li>Legal Obligations</li>
            <li>Vital Interests</li>
          </ul>
        </div>
      );
    case 4:
      return (
        <div>
          <p className="mb-4"><em>In Short: We may share information in specific situations and with specific third parties.</em></p>
          <p className="mb-4">
            We may need to share your personal information in the following situations:
          </p>
          <ul className="list-disc pl-6">
            <li>Business Transfers: We may share or transfer your information in connection with, or during negotiations of,
                any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
          </ul>
        </div>
      );
    case 5:
      return (
        <div>
          <p className="mb-4"><em>In Short: We may use cookies and other tracking technologies to collect and store your information.</em></p>
          <p>
            We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information.
            Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
          </p>
        </div>
      );
    case 6:
      return (
        <div>
          <p className="mb-4"><em>In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</em></p>
          <p className="mb-4">
            We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice,
            unless a longer retention period is required or permitted by law.
          </p>
        </div>
      );
    case 7:
      return (
        <div>
          <p className="mb-4"><em>In Short: We aim to protect your personal information through a system of organizational and technical security measures.</em></p>
          <p className="mb-4">
            We have implemented appropriate and reasonable technical and organizational security measures designed to protect
            the security of any personal information we process. However, despite our safeguards and efforts to secure your
            information, no electronic transmission over the Internet or information storage technology can be guaranteed to
            be 100% secure.
          </p>
        </div>
      );
    case 8:
      return (
        <div>
          <p className="mb-4"><em>In Short: We do not knowingly collect data from or market to children under 18 years of age.</em></p>
          <p className="mb-4">
            We do not knowingly solicit data from or market to children under 18 years of age. By using the Services,
            you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to
            such minor dependent's use of the Services.
          </p>
        </div>
      );
    case 9:
      return (
        <div>
          <p className="mb-4"><em>In Short: You have certain rights regarding your personal information.</em></p>
          <p className="mb-4">
            In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws.
            These may include the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Request access to your personal information</li>
            <li>Request rectification or erasure of your personal information</li>
            <li>Restrict the processing of your personal information</li>
            <li>Data portability</li>
            <li>Object to processing of your personal information</li>
          </ul>
        </div>
      );
    case 10:
      return (
        <div>
          <p className="mb-4">
            Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ('DNT')
            feature or setting you can activate to signal your privacy preference not to have data about your online
            browsing activities monitored and collected.
          </p>
        </div>
      );
    case 11:
      return (
        <div>
          <p className="mb-4"><em>In Short: Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</em></p>
          <p className="mb-4">
            California Civil Code Section 1798.83, also known as the 'Shine The Light' law, permits our users who are
            California residents to request and obtain from us information about personal data we disclose to third parties.
          </p>
        </div>
      );
    case 12:
      return (
        <div>
          <p className="mb-4"><em>In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</em></p>
          <p className="mb-4">
            We may update this privacy notice from time to time. The updated version will be indicated by an updated
            'Revised' date and the updated version will be effective as soon as it is accessible.
          </p>
        </div>
      );
    case 13:
      return (
        <div>
          <p className="mb-4">If you have questions or comments about this notice, you may contact us:</p>
          <div className="mb-4">
            <p>By email: info@torus.eu</p>
            <p>By mail:</p>
            <p>Torus GmbH</p>
            <p>Ostermoos 1</p>
            <p>Hattenhofen, Bavaria 82285</p>
            <p>Germany</p>
          </div>
        </div>
      );
    case 14:
      return (
        <div>
          <p className="mb-4">
            Based on the applicable laws of your country, you may have the right to request access to the personal
            information we collect from you, change that information, or delete it. To request to review, update, or
            delete your personal information, please visit:
            <a href="https://torus.eu/contact/" className="text-blue-600 hover:underline ml-1">
              https://torus.eu/contact/
            </a>
          </p>
        </div>
      );
    default:
      return <p>Section content to be implemented</p>;
  }
};

export default PrivacyPolicy;
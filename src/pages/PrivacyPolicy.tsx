const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6">PRIVACY NOTICE</h1>
        <p className="mb-4">Last updated August 18, 2022</p>
        
        <div className="mb-8">
          <p>
            This privacy notice for Torus GmbH ('Company', 'we', 'us', or 'our'), describes how and why we might collect, store, use, and/or share ('process') your information when you use our services ('Services'), such as when you:
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
          <p className="mb-4">
            This summary provides key points from our privacy notice, but you can find out more details about any of these topics by using our table of contents below to find the section you are looking for.
          </p>
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
            <li>WHAT INFORMATION DO WE COLLECT?</li>
            <li>HOW DO WE PROCESS YOUR INFORMATION?</li>
            <li>WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</li>
            <li>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</li>
            <li>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
            <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
            <li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
            <li>DO WE COLLECT INFORMATION FROM MINORS?</li>
            <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
            <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
            <li>DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</li>
            <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
            <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
            <li>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</li>
          </ol>
        </div>

        {/* For each section, we'll create a component for better organization */}
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. WHAT INFORMATION DO WE COLLECT?</h2>
            <h3 className="text-xl font-semibold mb-3">Personal information you disclose to us</h3>
            <p className="mb-4"><em>In Short: We collect personal information that you provide to us.</em></p>
            <p className="mb-4">
              We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
            </p>
            <h4 className="text-lg font-semibold mb-2">Personal Information Provided by You</h4>
            <p className="mb-4">The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>names</li>
              <li>phone numbers</li>
              <li>email addresses</li>
              <li>mailing addresses</li>
              <li>billing addresses</li>
            </ul>
          </section>

          {/* Additional sections would follow the same pattern */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
            <p className="mb-4">
              If you have questions or comments about this notice, you may email us at info@torus.eu or by post to:
            </p>
            <div className="mb-4">
              <p>Torus GmbH</p>
              <p>Ostermoos 1</p>
              <p>Hattenhofen, Bavaria 82285</p>
              <p>Germany</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
            <p>
              Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please visit: https://torus.eu/contact/.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
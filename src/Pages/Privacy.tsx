import Navbar from "../components/nav";
import CallToActionSection from "../components/Footer";

function Privacy() {
  return (
    <div className="bg-[#25258E] text-white">
      <Navbar />
      <div className="w-5/6 mx-auto px-6 py-10">
        <h1 className="text-[#EE3D49] text-4xl font-semibold text-center mb-10">
          Privacy Policy
        </h1>
        <div className="space-y-8 text-base leading-relaxed">
          <div>
            <h2 className="text-3xl font-semibold">
              What information do we collect?
            </h2>
            <p>
              We collect information from you when you register on our site or
              fill out a form. When ordering or registering on our site, as
              appropriate, you may be asked to enter your: name or e-mail
              address. You may, however, visit our site anonymously.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold">
              What do we use your information for?
            </h2>
            <p>
              Any of the information we collect from you may be used in one of
              the following ways:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>To personalize your experience</li>
              <li>To improve our website</li>
              <li>To improve customer service</li>
              <li>
                To process transactions – Your information will not be sold,
                exchanged, transferred, or given to any other company for any
                reason without your consent, other than for delivering the
                purchased product or service.
              </li>
              <li>
                To send periodic emails – The email address you provide may be
                used to send you information related to your order and
                occasional updates.
              </li>
              <li>
                To administer a contest, promotion, survey or other site feature
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-semibold">
              How do we protect your information?
            </h2>
            <p>
              We implement a variety of security measures to maintain the safety
              of your personal information when you access it.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold">Do we use cookies?</h2>
            <p>No, we do not use cookies.</p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold">
              Do we disclose any information to outside parties?
            </h2>
            <p>
              We do not sell, trade, or otherwise transfer your personally
              identifiable information to outside parties. This does not include
              trusted third parties who help us operate our website, conduct our
              business, or service you, as long as those parties agree to keep
              this information confidential. We may also release your
              information when necessary to comply with the law or protect
              rights, property, or safety.
            </p>
            <p>
              Non-personally identifiable visitor information may be used for
              marketing, advertising, or other uses.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold">Third party links</h2>
            <p>
              Occasionally, we may include or offer third-party products or
              services on our website. These sites have separate and independent
              privacy policies. We have no responsibility for their content and
              activities.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold">
              Online Privacy Policy Only
            </h2>
            <p>
              This privacy policy applies only to information collected through
              our website and not to information collected offline.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold">Your Consent</h2>
            <p>By using our site, you consent to our privacy policy.</p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold">
              Changes to our Privacy Policy
            </h2>
            <p>
              If we decide to change our privacy policy, we will post those
              changes on this page. This policy was last modified on 02/05/2019.
            </p>
          </div>
        </div>
      </div>
      <CallToActionSection />
    </div>
  );
}

export default Privacy;

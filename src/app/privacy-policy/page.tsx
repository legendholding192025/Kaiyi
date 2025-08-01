'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar Component */}
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-gray-700">
              <p>
                Here at Legend Multi Motors L.L.C ("We"), we are committed to protecting and respecting your privacy.
              </p>
              
              <p>
                This policy (together with our Website Terms of Use and any other documents referred to in it) sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us.
              </p>
              
              <p>
                Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it. By visiting www.kaiyi.ae you are accepting and consenting to the practices described in this Policy.
              </p>
              
              <p>
                For the purpose of the Data Protection Act 1998 ("the Act") and the General Data Protection Regulation 2016 (GDPR), the data controller is you, the Customer, ("You") to whom Legend Multi Motors L.L.C (the data processor) provides the receipt reading services ("the Services").
              </p>

              <section className="mt-12">
                <h2 className="text-3xl font-bold text-black mb-6">INFORMATION WE COLLECT FROM YOU</h2>
                <p className="mb-4">We will collect and process the following data about you:</p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-3">Information you give us.</h3>
                    <p className="mb-3">
                      This is information about you that you give us by filling in forms on our site www.kaiyi.ae ("our Site") or by corresponding with us by phone or e-mail. It includes information you provide when you register to use our Site, subscribe to and/or order the Services, and when you report a problem with our Site. The information you give us may include your name, address, e-mail address and phone number, financial and payment information, personal details and proof of identity.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-3">Information we collect about you.</h3>
                    <p className="mb-3">With regard to your visits to our Site we will automatically collect the following information:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        technical information, including the Internet protocol (IP) address used to connect your computer to the Internet, your login information, browser type and version, time zone setting, browser plug -in types and versions, and operating system and platform;
                      </li>
                      <li>
                        information about your visit, including the full Uniform Resource Locators (URL), clickstream to, through and from our site (including date and time), products you viewed or searched for, page response times, download errors, length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse – overs).
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mt-12">
                <h2 className="text-3xl font-bold text-black mb-6">COOKIES</h2>
                <p>
                  Our Site uses cookies to distinguish you from other users of our Site. This helps us to provide you with a good experience when you browse our Site and also allows us to make improvements to it from time to time.
                </p>
              </section>

              <section className="mt-12">
                <h2 className="text-3xl font-bold text-black mb-6">USES MADE OF THE INFORMATION</h2>
                <p className="mb-4">We use information held about you in the following ways:</p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-3">Information you give to us.</h3>
                    <p className="mb-3">We will use this information:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        to carry out our obligations arising from any contracts (including the terms of promotions we may run from time to time) entered into between you and us and to provide you with the information, products and services that you request from us;
                      </li>
                      <li>
                        to provide you with information about other goods and services we offer that are similar to those that you have already purchased or enquired about;
                      </li>
                      <li>
                        to provide you, or permit selected third parties to provide you, with information about goods we feel may interest you. We (or they) will contact you by electronic means only if you have consented to this. If you do not want us to use your data in this way, or to pass your details on to third parties for marketing purposes, please tick the relevant box situated on the registration form on which we collect your data;
                      </li>
                      <li>
                        to notify you about changes to our service;
                      </li>
                      <li>
                        to ensure that content from our Site is presented in the most effective manner for you and for your computer.
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-3">Information we collect about you.</h3>
                    <p className="mb-3">We will use this information:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        to administer our Site and for internal operations, including troubleshooting, data analysis, testing, research, statistical and survey purposes;
                      </li>
                      <li>
                        to improve our Site to ensure that content is presented in the most effective manner for you and for your computer;
                      </li>
                      <li>
                        to allow you to participate in interactive features of our service, when you choose to do so;
                      </li>
                      <li>
                        as part of our efforts to keep our Site safe and secure;
                      </li>
                      <li>
                        to measure or understand the effectiveness of advertising we serve to you and others, and (only if applicable) to deliver relevant advertising to you; and
                      </li>
                      <li>
                        to make suggestions and recommendations to you and other users of our Site about goods or services that may interest you or them.
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-3">Information we receive from other sources.</h3>
                    <p>
                      We will combine this information with information you give to us and information we collect about you. We will use this information and the combined information for the purposes set out above (depending on the types of information we receive).
                    </p>
                  </div>
                </div>
              </section>

              <section className="mt-12">
                <h2 className="text-3xl font-bold text-black mb-6">DISCLOSURE OF YOUR INFORMATION</h2>
                <p className="mb-4">You agree that we have the right to share your personal information with:</p>
                
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Any member of our group, which means our subsidiaries, our ultimate holding company and its subsidiaries.</li>
                  <li>
                    Selected third parties including:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>
                        our business partners, suppliers and sub -contractors for the performance of any contract we enter into with them or you;
                      </li>
                      <li>
                        advertisers and advertising networks that require the data to select and serve relevant adverts to you and others. We do not disclose information about identifiable individuals to our advertisers, but we will provide them with aggregate information about our users (for example, we may inform them that 150 women aged under 30 have clicked on their advertisement on any given day). We may also use such aggregate information to help advertisers reach the kind of audience they want to target (for example, women in a particular US State). We may make use of the personal data we have collected from you to enable us to comply with our advertisers' wishes by displaying their advertisement to that target audience; and
                      </li>
                      <li>
                        analytics and search engine providers that assist us in the improvement and optimisation of our Site.
                      </li>
                    </ul>
                  </li>
                </ul>
                
                <p className="mb-4">We will disclose your personal information to third parties:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    In the event that we sell or buy any business or assets, in which case we may disclose your personal data to the prospective seller or buyer of such business or assets.
                  </li>
                  <li>
                    If Legend Multi Motors L.L.C, or substantially all of its assets are acquired by a third party, in which case personal data held by it about its customers will be one of the transferred assets.
                  </li>
                  <li>
                    If we are under a duty to disclose or share your personal data in order to comply with any legal obligation.
                  </li>
                </ul>
              </section>

              <section className="mt-12">
                <h2 className="text-3xl font-bold text-black mb-6">WHERE WE STORE YOUR PERSONAL DATA</h2>
                <div className="space-y-4">
                  <p>
                    All information you provide to us is stored on secure cloud storage systems provided by Tsohost.
                  </p>
                  <p>
                    Where we have given you (or where you have chosen) a password which enables you to access certain parts of our Site, you are responsible for keeping this password confidential. We ask you not to share a password with anyone.
                  </p>
                  <p>
                    We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy.
                  </p>
                  <p>
                    Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your personal data, we cannot guarantee the security of your data transmitted to our Site; any transmission is at your own risk. Once we have received your information, we will use strict procedures and security features to try to prevent unauthorised access.
                  </p>
                </div>
              </section>

              <section className="mt-12">
                <h2 className="text-3xl font-bold text-black mb-6">YOUR RIGHTS</h2>
                <div className="space-y-4">
                  <p>
                    You have the right to ask us not to process your personal data for marketing purposes. We will usually inform you (before collecting your data) if we intend to use your data for such purposes or if we intend to disclose your information to any third party for such purposes. We will not process your information and data without your express consent. You can also contact us at any time in relation to your Privacy rights by emailing us at info@legendmotorsuae.com or writing to us at Customer Services, Legend Multi Motors L.L.C, Showroom # 116, Auto Market, Block 1, Ras-Al-khor, Al Aweer, Dubai.
                  </p>
                  <p>
                    Our Site may, from time to time, contain links to and from the websites of our partner networks, advertisers and affiliates. If you follow a link to any of these websites, please note that these websites have their own privacy policies and that we do not accept any responsibility or liability for these policies. Please check those policies before you submit any personal data to those websites.
                  </p>
                </div>
              </section>

              <section className="mt-12">
                <h2 className="text-3xl font-bold text-black mb-6">ACCESS TO INFORMATION</h2>
                <p>
                  The Act gives you the right to access information held about you. Your right of access can be exercised in accordance with the Act. Any access request will be subject to a fee of 50 AED to meet our costs in providing you with details of the information we hold about you.
                </p>
              </section>

              <section className="mt-12">
                <h2 className="text-3xl font-bold text-black mb-6">CHANGES TO OUR PRIVACY POLICY</h2>
                <p>
                  Any changes we make to our Privacy Policy in the future will be posted on this page and, where appropriate, notified to you by e-mail. Please check back frequently to see any updates or changes to our Privacy Policy.
                </p>
              </section>

              <section className="mt-12">
                <h2 className="text-3xl font-bold text-black mb-6">CONTACT</h2>
                <p>
                  Questions, comments and requests regarding this Privacy Policy are welcomed and should be addressed to info@legendmotorsuae.com or (by post) to Customer Services, Legend Multi Motors L.L.C, Showroom # 116, Auto Market, Block 1, Ras-Al-khor, Al Aweer, Dubai.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
} 
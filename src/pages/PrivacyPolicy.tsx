
import React from 'react';
import { Helmet } from 'react-helmet';
import { Card } from '@/components/ui/card';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Combat Power Calculator</title>
        <meta name="description" content="Privacy Policy for Combat Power Calculator - Learn how we protect your data while using our Pokémon GO CP Calculator tool." />
        <meta name="keywords" content="Combat Power Calculator, Pokémon GO CP Calculator, privacy policy, data protection, Pokémon GO" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-12">
        <Card className="p-8 shadow-lg bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm border-white/20">
          <h1 className="text-3xl font-bold mb-6 text-center text-pogo-blue">Privacy Policy</h1>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3 text-pogo-blue">Introduction</h2>
              <p>Welcome to Combat Power Calculator. We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-pogo-blue">Information We Collect</h2>
              <p>We do not collect personally identifiable information unless you voluntarily provide it to us. The information we may collect includes:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Device information such as IP address, browser type, and operating system</li>
                <li>Usage data including page views, time spent on pages, and navigation paths</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-pogo-blue">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Provide, maintain, and improve our Combat Power Calculator</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Detect and address technical issues</li>
                <li>Protect against fraudulent or unauthorized activity</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-pogo-blue">Cookies and Tracking Technologies</h2>
              <p>Our Pokémon GO CP Calculator website may use cookies and similar tracking technologies to track activity and collect certain information. These technologies help us understand user behavior, remember preferences, and improve overall experience.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-pogo-blue">Third-Party Links</h2>
              <p>Our Combat Power Calculator website may contain links to third-party websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-pogo-blue">Data Security</h2>
              <p>We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your information. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-pogo-blue">Changes to This Privacy Policy</h2>
              <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-pogo-blue">Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at contact@combat-power-calculator.online</p>
            </section>
          </div>
        </Card>
      </div>
    </>
  );
};

export default PrivacyPolicy;

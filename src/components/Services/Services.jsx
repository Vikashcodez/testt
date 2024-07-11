import React from 'react';
import { useTranslation } from 'react-i18next';
import Footer from '../Footer/Footer';
import trade1 from "../../assets/Images/trade1.png";
import trade2 from "../../assets/Images/trade2.png";
import trade3 from "../../assets/Images/trade3.png";
import trade4 from "../../assets/Images/trade4.png";
import trade5 from "../../assets/Images/trade5.png";
import trade6 from "../../assets/Images/trade6.png";

const services = [
  { id: 1, name: 'Audit and Assurance Services', description: 'Conducting financial audits and providing assurance on financial statements.', image: trade1 },
  { id: 2, name: 'Taxation Services', description: 'Advising on tax compliance, planning, and strategies for businesses and individuals', image: trade2 },
  { id: 3, name: 'Financial Reporting', description: 'Preparing and analyzing financial reports in compliance with accounting standards.', image: trade3 },
  { id: 4, name: 'Management Consulting', description: 'Providing expertise on various management issues, such as risk management, performance improvement, and business strategy.', image: trade4 },
  { id: 5, name: 'Forensic Accounting', description: 'Investigating financial irregularities, fraud, and financial disputes.', image: trade5 },
  { id: 6, name: 'Financial Management', description: 'Offering guidance on financial planning, budgeting, and investment decisions.', image: trade5 },
  { id: 7, name: 'Financial Planning and Analysis', description: 'Developing financial plans, forecasts, and budgets to support business decisions.', image: trade6 },
  { id: 8, name: 'Performance Management', description: 'Evaluating business performance, setting KPIs, and recommending performance improvement initiatives.', image: trade1 },
  { id: 9, name: 'Risk Management', description: 'Identifying and managing financial risks, such as market risk, credit risk, and operational risk.', image: trade2 },
  { id: 10, name: 'Internal Controls', description: 'Designing and evaluating internal control systems to safeguard assets and ensure compliance with regulations.', image: trade3 },
  { id: 11, name: 'Strategic Management', description: 'Assisting in strategic planning, mergers and acquisitions, and business expansion initiatives.', image: trade4 },
  { id: 12, name: 'Financial Advisory', description: 'Offering financial advice on investments, acquisitions, mergers, and capital restructuring.', image: trade5 },
  { id: 13, name: 'Business Valuation', description: 'Determining the value of businesses for purposes such as mergers, acquisitions, or regulatory compliance.', image: trade5 },
];

const ServiceGrid = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-4 mt-20"> {/* Adjusted margin-top to create space */}
      <h1 className="text-4xl font-bold mb-4 text-center">{t('Our Services')}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map(service => (
          <div key={service.id} className="bg-[#e7dfca] p-4 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <img src={service.image} alt={service.name} className=" max-w-[100px]" />
            </div>
            <h2 className="text-xl font-semibold mb-2">{t(service.name)}</h2>
            <p>{t(service.description)}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ServiceGrid;

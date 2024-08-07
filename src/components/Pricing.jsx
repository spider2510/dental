import React from "react";
import './Pricing.css'; // Import the CSS file for styling

const pricingData = [
  { treatment: "Patient Examination", privateFee: "from £53.00", denplanCare: "Included", denplanEssentials: "Included" },
  { treatment: "Private Cosmetic Consultation", privateFee: "from £175.00", denplanCare: "Not Included", denplanEssentials: "Not Included" },
  { treatment: "Private Implant Consultation", privateFee: "from £175.00", denplanCare: "Not Included", denplanEssentials: "Not Included" },
  { treatment: "Private Endodontic Consultation", privateFee: "from £175.00", denplanCare: "Not Included", denplanEssentials: "Not Included" },
  { treatment: "CBCT Scanner & Scans", privateFee: "from £206.00", denplanCare: "Not Included", denplanEssentials: "Not Included" },
  { treatment: "Routine Xrays", privateFee: "from £18.50", denplanCare: "Included", denplanEssentials: "Included" },
  { treatment: "Non Routine Xrays", privateFee: "from £18.50", denplanCare: "Included", denplanEssentials: "Not Included" },
  { treatment: "Fillings", privateFee: "from £128.00", denplanCare: "Included", denplanEssentials: "Not Included" },
  { treatment: "Root Canal Fillings", privateFee: "from £215.00", denplanCare: "Included", denplanEssentials: "Not Included" },
  { treatment: "Crowns", privateFee: "from £574.00", denplanCare: "Lab fee only", denplanEssentials: "Not Included" },
  { treatment: "Dentures", privateFee: "from £668.00", denplanCare: "Lab fee only", denplanEssentials: "Not Included" },
  { treatment: "Hygienist consultation (45 mins)", privateFee: "£96.00", denplanCare: "Included", denplanEssentials: "Included" },
  { treatment: "Invisalign", privateFee: "From £3,638.00 to £4,995.00 for both arches", denplanCare: "N/A", denplanEssentials: "N/A" }
];

export const Pricing = () => {
  return (
    <div id="pricing" className="text-center">
      <div className="container">
        <div className="section-intro">
          
        </div>
        <div className="section-title">
          <h2> Fee Guide</h2>
          <p className="intro-text">
           <br />
            Fees correct as of February 1st 2024<br /><br />
            The fees listed below are for guidelines only and are subject to change at the discretion of the Practice.<br />
            Before any treatments take place, you will be supplied with a written treatment plan, including costs.<br /><br />
            If the practice is closed and you have an emergency, please call NHS England’s Triage Service on 111
          </p>
        </div>
        <table className="pricing-table">
          <thead>
            <tr>
              <th>Treatment</th>
              <th>Private Fee</th>
              <th>Denplan Care</th>
              <th>Denplan Essentials</th>
            </tr>
          </thead>
          <tbody>
            {pricingData.map((item, index) => (
              <tr key={index}>
                <td>{item.treatment}</td>
                <td>{item.privateFee}</td>
                <td>{item.denplanCare}</td>
                <td>{item.denplanEssentials}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="section-footer">
          <p>
            The fees listed above are for guidance only and are subject to change. Please contact us for the most up-to-date information.<br />
            If you have an emergency and the practice is closed, please call NHS England’s Triage Service on 111.
          </p>
        </div>
      </div>
    </div>
  );
};

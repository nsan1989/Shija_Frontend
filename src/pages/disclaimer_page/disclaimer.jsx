import { Container } from "react-bootstrap";
import Title from "../../components/title_component/title";
import BreadcrumbComponent from "../../components/breadcrumb_component/breadcrumb";
import { FaHome } from "react-icons/fa";

import styles from "./disclaimer.module.css";

const breadcrumbItems = [
  { href: "/", icon: <FaHome /> },
  { label: "Disclaimer" },
];

export default function DisclaimerPage() {
  Title("Disclaimer");

  return (
    <Container
      className={`disclaimer-wrapper ${styles["disclaimerWrapperStyle"]}`}
    >
      <div className="breadcrumb-content py-3">
        <BreadcrumbComponent items={breadcrumbItems} />
      </div>
      <div className="first-content mb-4">
        <div className={`title ${styles['titleStyle']}`}>
          <h3>disclaimer</h3>
        </div>
        <div className={`content ${styles['contentStyle']}`}>
          <p>
            This web site is provided for information only. The information
            found is not a substitute for professional medical care by a
            qualified doctor or other health care professional. Shija Hospitals
            is not responsible or liable, directly or indirectly, for any form
            of damages whatsoever resulting from the use (or misuse) of
            information contained in or implied by the information on this site.
            Any decision about your health or medical care based solely on
            information obtained from the web could be dangerous!
          </p>
          <p>
            Whilst we hope that you will find the sites linked to be of
            interest, Shija Hospitals accepts no responsibility of any nature
            whatsoever for linked web sites or any information contained in
            them. Any opinions expressed on the linked site are the opinions of
            the respective authors. Shija Hospitals does not assume any
            liability for the contents of any material provided on the sites.
            Reliance on any information provided on this site or the linked
            sites, its health experts, commentators or other visitors to the
            site is solely at your own risk. Shija Hospitals assumes no
            liability or responsibility for damage or injury to persons or
            property arising from use of such information.
          </p>
        </div>
      </div>
      <div className="second-content">
        <div className={`title ${styles['titleStyle']}`}>
          <h3>TERMS AND CONDITIONS OF USAGE:</h3>
        </div>
        <div className={`content ${styles['contentStyle']}`}>
          <p>
            Your access to and use of this website ("Site") is subject to your
            compliance with all applicable laws and the following terms and
            conditions. By accessing and browsing this Site, you accept, without
            limitation or qualification, the Terms and Conditions herein given:
          </p>
          <ul>
            <li>
              * Shija Hospitals may at any time revise these Terms and
              Conditions by updating this posting. Your continued use of this
              Site is contingent upon your agreement to be bound by any such
              revisions and you should therefore periodically visit this page to
              review the then-current Terms and Conditions.
            </li>
            <li>
              * As a condition of your use of this Website, you warrant to Shija
              Hospitals that you will not use this Website for any purpose that
              is unlawful or prohibited by these terms, conditions, and notices.
            </li>
            <li>
              * This Website may contain hyperlinks to Websites operated by
              parties other than Shija Hospitals. Such hyperlinks are provided
              for your reference only. Shija Hospitals does not control such
              Websites and is not responsible for their contents. Shija
              Hospitals 's inclusion of hyperlinks to such Websites does not
              imply any endorsement of the material on such Websites or any
              association with their operators.
            </li>
            <li>
              * The information contained in this site could contain technical
              inaccuracies or typographical errors. Shija Hospitals reserves the
              right to make changes and improvements to any information
              contained within its World Wide Web pages, at any time and without
              notice. Max Healthcare cannot be held responsible for any
              inconveniences caused by subsequent changes.
            </li>
            <li>
              * ALL CONTENT ON THIS WEB SITE IS PROVIDED TO YOU ON AN "AS IS"
              "AS AVAILABLE" BASIS WITHOUT WARRANTY OF ANY KIND EITHER EXPRESS
              OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT. SHIJA HOSPITALS MAKES NO WARRANTY AS TO THE
              ACCURACY, COMPLETENESS, CURRENCY, OR RELIABILITY OF ANY CONTENT
              AVAILABLE THROUGH THIS WEB SITE. YOU ARE RESPONSIBLE FOR VERIFYING
              ANY INFORMATION BEFORE RELYING ON IT. USE OF THE WEB SITE AND THE
              CONTENT AVAILABLE ON THE WEB SITE IS AT YOUR SOLE RISK.
            </li>
            <li>
              * SHIJA HOSPITALS MAKES NO REPRESENTATIONS OR WARRANTIES THAT USE
              OF THE WEB SITE WILL BE UNINTERRUPTED OR ERROR-FREE. YOU ARE
              RESPONSIBLE FOR TAKING ALL NECESSARY PRECAUTIONS TO ENSURE THAT
              ANY CONTENT YOU MAY OBTAIN FROM THE WEB SITE IS FREE OF VIRUSES OR
              TROJANS.
            </li>
            <li>
              * The materials on this Web Site belong to or are licensed to us.
              The materials are protected by Indian and foreign copyright laws.
              There are some important rules about copying these materials. You
              may e-mail, download, or print copies of the materials on this Web
              Site, but only for your personal, noncommercial use. When you
              e-mail, download, or print a copy of the materials on this Web
              Site, you must also include all copyright and other notices that
              are in the materials, including the copyright notice on the bottom
              of the page.
            </li>
            <li>
              * No license or right to use any trademark contained on this Site
              is granted whether by implication or otherwise and any use of any
              trademark contained on this site is expressly prohibited unless
              authorized in writing by the trademark holder.
            </li>
            <li>
              * This agreement is governed by the laws of India . You hereby
              consent to the exclusive jurisdiction of the Courts of MANIPUR in
              all disputes arising out of or relating to the use of this
              Website. Use of this Website is unauthorised in any jurisdiction
              that does not give effect to all provisions of these terms and
              conditions, including without limitation this paragraph. Those who
              choose to access the Web site from other locations do so on their
              own initiative and are responsible for compliance with applicable
              local laws.
            </li>
            <li>
              * None of the terms herein shall affect any of your statutory rights as a consumer.
            </li>
            <li>
              Any rights not expressly granted herein are reserved.
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

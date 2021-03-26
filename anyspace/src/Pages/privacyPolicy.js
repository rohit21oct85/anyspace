import React , { useState, useEffect } from "react";
import PageLayout from "../HOC/NewPageLayout";
import SEO from "../Components/Seo"
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { elements } from "../cons";

const PrivacyPloicy = () => {
    
    const overlay = {
        height: '100%',
        width: '100%',
        background: 'rgba(0,0,0,.5)'
    }
    const container = {
        maxWidth: '1140px'
    }

    return (

        <React.Fragment>

            <SEO />

            <div className="hero-section blog-listing">
                <div className="overlay" style={overlay}>
                <div className="container" style={container}>
                    <div className="hero-content">
                        <div className="position-div">
                            <h1 className="hero__heading">Privacy Policy</h1>
                        </div>

                        <ul className="hero-breadcrumbs">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><i className="fas fa-chevron-right"></i></li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
            <div className="blog-wrapper">
            <div className="container" style={container}>
                <div className="row">
                    <div className="col-lg-12">
                        <h2>SCOPE OF PRIVACY Policy</h2>
                        <p>This Privacy Policy explains how AWL India Private Limited processes personal information obtained via the websites, application software and mobile apps. AWL India Private Limited, and its affiliates and subsidiaries (collectively, "AWL") respect your privacy.</p>
                        <p> This Privacy Policy describes the types of personal information we collect, how we use your personal information, with whom we share it, the choices you can make about our use of your personal information and how you can <navlink to="/contact-us">contact us.</navlink></p>
                        <p> This policy is global in nature and describes our data protection practices in relation to personal information collected through our websites, through application software and mobile apps. References to "website" include AWLINDIA.COM, ANYSPAZE.COM, BOOTHMOVERS.IN, CLIENT.AWLINTERNATIONAL.COM, BLOG.ANYSPAZE.COM, AWLINDIA.COM/CAREER, and any other website produced, managed, and maintained by AWL.</p>
                        <p> References to “mobile apps” includes mobile application produced, managed, and maintained by AWL.</p>
                        <h2>INFORMATION WE COLLECT</h2>
                        <p>We process information about you that you have provided either directly (for example where you have submitted information to us on our websites) or indirectly (for example from publicly available sources, trade associations or from the cookie technology we use on our websites).</p>
                        <p>AWL collects information about you from various sources. For example, we may have a direct relationship with you, and you may choose to provide personal information to us in connection with that relationship. You may choose to submit information to us, for example, on our websites, in connection with the use of our products, services, or application software, when you participate in an offer or promotion, when you respond to a survey, request white papers, or in connection with an actual or potential business relationship with us. We also may obtain information about you from companies that use our products or services, publicly available information systems, consumer reporting agencies, agents and trade associations, and commercial information services. We also collect information from you when you browse our websites through the use of cookie technology. (See Cookie Statement).</p>
                        <h2>The types of information we may obtain are:</h2>
                        <ul><li>Users of Website</li><li> Operating system data</li><li> Weblog data</li><li> URL Clickstream and path through our website</li><li> Name and version of your browser</li><li> Mobile device unique identifier</li><li> IP Address</li><li> Website visit statistics</li></ul>
                        <h3>Customers/Shippers</h3>
                        <ul><li>Business contact information (such as job title, department and name of organization)</li><li> Contact information (such as name, postal and/or e-mail address, and phone or fax number, country) Third party contact information that support business processes completed on your behalf (such as consignee or transferee)</li><li> Information pertaining to shipments and delivery (such as origin and destination locations)</li><li> Business Financial information (such as financial account information used for payment purposes)</li><li> Usernames and passwords used to access AWL resources (such as account registration information to Online portals maintained by AWL)</li><li> IP Address, device ID and statistical information (such as throughput based on use of online tools) Survey responses</li><li> Social Media identifier(s) (only when you contribute content on our platform)</li></ul>
                        <h3>Carriers/Drivers</h3>
                        <ul><li>Business and contact information (such as name, postal and/or e-mail address, and phone or fax number, country)</li><li> Financial information (such as financial account information used for payment and credit purposes)</li><li> Government Identification (such as drivers’ license or passport)</li><li> Usernames and passwords used to access AWL resources (such as account registration information to our Carrier or Driver Apps)</li><li> Survey responses</li><li> Social Media identifier(s) (when you contribute to content on our platform)</li><li> Geo-location data (such as location data processed via the Driver apps, and/or information received via in vehicle devices)</li><li> IP Address, device ID (when using our Carrier or Driver Apps)</li></ul>
                        <h3>Applicants/Potential Employees, Contractors, and/or Contingent Workers</h3>
                        <ul><li>Information necessary to identify potential candidates for employment such as;<ol><li>Professional social media public profile data on professional sites (e.g. LinkedIn).</li><li>Browsing data from our Careers site (including IP address, website statistics, browsing preferences, clickstream data, etc.)</li><li> Contact information</li><li> Employment application data</li><li> Previous employment, education, and industry certifications</li></ol></li><li>Information necessary to make employment decisions and onboard new candidates for employment such as;<ol><li> Information required by government, state, or country laws to enable compliance with jurisdictional requirements such as diversity information, citizenship, etc.</li><li> Results of medical evaluations (only where required by law or where necessary for the job role in question)</li><li> Results of background checks</li></ol></li></ul>
                        <h2>INFORMATION WE SHARE</h2>
                        <p>We don't share personal information in unexpected or unlawful ways.</p>
                        <p>We may share the personal information we collect with:</p>
                        <ul><li>our affiliates;</li><li> regulators, governments and authorized law enforcement agencies (when required or compelled through legal mechanisms);</li><li> to other third parties when allowed or required by law (for example to prevent or investigate a possible crime, such as fraud or identity theft);</li><li> third parties to perform activities that you request;</li><li> courts, tribunals, arbitrators or other judicial committees;</li><li> our professional advisors and auditors;</li><li> a successor or potential successor organization if, for example, we transfer the ownership or operation of one of our websites to another organization or if we merge with another organization.</li></ul>
                        <p>We sometimes appoint third party vendors to perform tasks on our behalf and under our instruction. In particular, we use cloud providers that host and perform services on our behalf. These third party vendors are not allowed to use your personal information for their own purposes and they are bound to protect your personal information in a manner consistent with our own policies and practices, and relevant legislation.</p>
                        <p> You may choose to use certain features on our websites for which we work with other entities. These features, which may include social networking and geographic location tools, are operated by third parties that are not affiliated with AWL. We share information gathered from third party cookies with the providers of the technology such as; YouTube, Facebook, Twitter, and LinkedIn. These third parties may use personal information in accordance with their own privacy policies. We strongly suggest you review the third parties' privacy policies if you use the relevant features.</p>
                        <h3>DATA TRANSFERS</h3>
                        <p>We transfer your personal information outside of your home country to countries which may not offer an equivalent level of protection for personal information to the laws of your home country. When we do this, we take steps that the law requires to make sure that your personal information is properly protected.</p>
                        <p> When we transfer your personal information to other countries, we will take measures required by the law to protect that information. These measures include data transfer agreements implementing standard data protection clauses.</p>
                        <p> To obtain more information about the safeguards we have put in place, please contact us using the information below.</p>
                        <h2>YOUR RIGHTS AND CHOICES</h2>
                        <p>We want to make sure that you feel in control of your personal information and, in particular, to know how you can change your mind if you don’t want to receive our marketing emails anymore.</p>
                        <p> We will offer you certain choices about what personal information we collect from you, how we use that information, and how we communicate with you.</p>
                        <p> We typically offer you an opportunity to choose whether you want to receive certain communications from us, generally by offering an "opt-in" or an "opt-out" option, depending on applicable law, when you first provide contact information through one of our websites, software applications, and/or mobile apps. In addition, we will include an "unsubscribe" link in each electronic newsletter or promotional e-mail we send you, so that you can inform us if you do not wish to receive such communications from us in the future.</p>
                        <p> <strong>Subject to applicable law, you may have the right to:</strong></p>
                        <ul><li> request access to and receive information about the personal information we maintain about you;</li><li>update and correct inaccuracies in your personal information; and</li><li>have your personal information transferred, blocked, or deleted.</li></ul>
                        <p>We will promptly respond to such requests and may ask you for additional information to verify your identity in order to appropriately respond. In most cases, we will provide access and correct or delete any inaccurate information you discover. In some cases, however, we may limit or deny your request if we have a lawful justification. If you would like to exercise any of these rights about your personal information that we hold, please use our contact details set out under the header “How to Contact Us” below.</p>
                        <p> Please note that there are some instances where we must process your personal information in order to deliver our services. For example, when accepting the terms of use/end user license agreement for our mobile application software, we must collect data from your mobile device in order for software to work properly.</p>
                        <h2>COOKIE STATEMENT</h2>
                        <p>AWL uses cookies, pixel tags, and other technologies (“Cookies”) to automatically collect information about your interactions, such as browser type, pages viewed, links clicked, and other actions you take in connection with our websites, online ads, and email.</p>
                        <p><strong>What are Cookies?</strong></p>
                        <p> Cookies are small pieces of data (alpha-numerical files) which are downloaded to your device when you visit a website to collect information about your use of the website. Cookies are sent back to the originating website on each subsequent visit, or to another website that recognizes that cookie. Cookies are useful because they allow our websites to remember information about you to make it easier for you to use our websites. Other tracking technologies may use unique identifiers to track and facilitate your use of our websites.</p>
                        <p>You can find more information about Cookies at <a target="_blank" rel="noopener noreferrer" href="https://www.allaboutcookies.org ">https://www.allaboutcookies.org </a> and <a href="www.youronlinechoices.eu" rel="noopener noreferrer" target="_blank">www.youronlinechoices.eu</a>.</p>
                        <p><strong>Why do we use Cookies? </strong></p>
                        <p>We use Cookies for a variety of purposes, including to facilitate navigation, to display information more effectively, to personalize your experience, to understand how our websites are used, to market our products and services, to measure the success of our marketing campaigns, and for security purposes.</p>
                        <p>What Cookies do we use and how long will they stay on your device?</p>
                        <p>We categorize our cookies into four types: Necessary, Preferences, Statistics, and Marketing.</p>
                        <p>We categorize our cookies into four types: Necessary, Preferences, Statistics, and Marketing.</p>
                        <table className="table table-striped table-bordered"><thead className="thead-dark"><tr><th>Type of Cookie</th><th>Purpose</th></tr></thead><tbody><tr><td>Necessary</td><td> Necessary Cookies help make our websites usable by enabling basic functions like page navigation and access to secure areas of the website. The websites cannot function properly without these cookies.</td></tr><tr><td>Preferences</td><td> Preferences Cookies enable our websites to remember information that changes the way the website behaves or looks, like your preferred language or your preferred region.</td></tr><tr><td>Statistics</td><td> Statistics Cookies help us understand how visitors interact with our websites. They provide us information about the ways visitors use our technology, which pages they visit, which links they use, and how long they stay on each page. The information we collect from these Cookies does not identify you personally but in some cases we may be able to link the information from statistics Cookies to your personal identifiable information.</td></tr><tr><td>Marketing</td><td> Marketing Cookies are used to track visitors using our websites and across other websites. The intention is to display information relevant and engaging for you and thereby providing you a more enhanced user experience, as well as to identify future business opportunities.</td></tr><tr><td>Unclassified</td><td> Unclassified Cookies are cookies that we are in the process of classifying, together with the providers of individual cookies.</td></tr></tbody></table>
                        <p><strong>How to change your preferences so that Cookies are not set on your device</strong></p>
                        <p>Most devices allow you to block Cookies by adjusting the settings on your browser. However, if you use your browser settings to block all Cookies (including necessary Cookies, such as those allowing you to log-in) you may not be able to access all or parts of our websites or our websites may not function as effectively.</p>
                        <p> For further information about how to block Cookies, please refer to your browser 'help' section or see <a href="www.allaboutcookies.org" rel="noopener noreferrer" target="_blank">www.allaboutcookies.org</a>.</p>
                        <h2>USE OF OUR WEBSITES BY CHILDREN UNDER THE AGE OF 18</h2>
                        <p> We are proud of our websites and we strive to ensure that they do not offend people of any age. However, unless otherwise noted on a particular site, our websites are not intended for children under the age of 18 years without the permission of a parent or guardian. If you believe that a child has submitted personal information on or through our websites without the consent and supervision of a parent or guardian, please contact us using the information provided below so that we can take appropriate action.</p>
                        <h2>HOW TO CONTACT US</h2>
                        <p> If you have any questions or comments about this policy, or if you would like us to update information we have about you or your preferences, you may contact us using the information below.</p>
                        <strong>PARTNER SUPPORT TEAM</strong>
                        <p> AWL India Private Limited.</p>
                        <p>S-268, LGF, Greater Kailash 2,</p>
                        <p>New Delhi 110048. India</p>
                        <p>info@awlindia.com</p>
                        <p>Phone: (91) 9015-011-011</p>
                    </div>
                </div>

            </div>
            </div>

        </React.Fragment >
    )


}

export default PageLayout(PrivacyPloicy);
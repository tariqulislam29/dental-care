import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Faq.css'
const Faq = () => {
    return (
        <div>
            <div className="faq" >
                <div className="faq-image">
                    <img src="https://templates.hibootstrap.com/opnix/default/assets/images/faq-main.png" alt="" />
                </div>


                <div className="faq-details ">
                    <div>
                        <h2 className="text-start">Why we are the best? FAQ’s</h2>
                        <p className="text-start">The journey of a thousand (S)miles begins with one step!  </p>

                        <Accordion defaultActiveKey="0" className="w-100 ">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What type of dental care is best for you?</Accordion.Header>
                                <Accordion.Body>
                                    Cosmetic dentistry services are increasing in popularity and, as a result, provide a great opportunity for dental practices to grow their customer base. One of the most common cosmetic dentistry procedures is teeth whitening or “teeth bleaching” which is sought by people looking to brighten their smile and reduce the appearance of stains or discoloration
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>How to protect your teeth?</Accordion.Header>
                                <Accordion.Body>
                                    Teeth are covered in a hard, outer coating called enamel. Every day, a thin film of bacteria called dental plaque builds up on your teeth. The bacteria in plaque produce acids that can harm enamel and cause cavities.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Care for your teeth by quitting smoking</Accordion.Header>
                                <Accordion.Body>
                                    Smoking also has detrimental effects on your mouth. It can make your breath stink, discolor your teeth and give you smoker's tongue, lead to tooth decay, gum infections, periodontal disease, can result in tooth loss, and can even cause oral cancer. If you are still a smoker, the first step you should take to improve your oral hygiene (and your health in general) is to quit.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Use mouthwash regularly for better oral hygiene</Accordion.Header>
                                <Accordion.Body>
                                    Brush at least twice a day. Floss or clean between your teeth with interdental brushes or water flossers at least once a day, and use antimicrobial mouthrinses and tongue scrapers. Be sure to see your dental professional for regular cleanings to check the health of your teeth and gums.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Udental professional will remove plaque from your teeth </Accordion.Header>
                                <Accordion.Body>
                                    If your dental professional diagnoses you with gum disease early, scaling and root planing can reverse its effects. Your dental professional will remove plaque from your teeth and under your gums using manual tools and ultrasonic instruments. Your dental professional can smooth out the roots of your teeth to help ensure your gums reattach after the procedure.
                                </Accordion.Body>
                            </Accordion.Item>





                        </Accordion>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Faq;
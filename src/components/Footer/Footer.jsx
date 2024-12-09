import React from 'react';
import './footer.css';
import logotip from '../../images/Logo.png';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logotip} alt="Logo" className="logo-image"/>
                    <p>
                        We are a residential interior design firm located in Portland.
                        Our boutique studio offers more than just design services.
                    </p>
                    <div className="footer-socials">
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-tiktok"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>

                <div className="footer-column">
                    <h4>Services</h4>
                    <ul>
                        <li><a
                            href="https://help.reg.ru/support/partneram/bonusnaya-programma/chto-takoye-bonusnaya-programma-i-kak-na-ney-zarabatyvat">Bonus
                            program</a></li>
                        <li><a
                            href="https://medium.com/@imgeorginataylor/what-is-gift-card-what-are-its-uses-and-benefits-e8328d3d6248">Gift
                            cards</a></li>
                        <li><a
                            href="https://context.reverso.net/%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4/%D0%B0%D0%BD%D0%B3%D0%BB%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9-%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9/credit+and+payment">Credit
                            and payment</a></li>
                        <li><a
                            href="https://medium.com/@dhyaniakash2/service-contract-what-is-it-and-how-to-draft-a-perfect-one-90e81fe2a142">Service
                            contracts</a></li>
                        <li><a href="https://accountingdrive.com/non-cash-transaction/">Non-cash account</a></li>
                        <li><a href="https://payme.uz/home/main">Payment</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Assistance to the buyer</h4>
                    <ul>
                        <li><a href="https://help.hcl-software.com/commerce/9.0.0/user/tasks/tcofnd.html">Find an
                            order</a></li>
                        <li><a
                            href="https://www.translate.ru/%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4/%D0%B0%D0%BD%D0%B3%D0%BB%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9-%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9/terms%20of%20delivery">Terms
                            of delivery</a></li>
                        <li><a
                            href="https://betatransfer-merchant.com/?utm_source=yandex&utm_medium=cpc&utm_campaign=%D0%9F%D0%BE%D0%B8%D1%81%D0%BA%20%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%A2%D0%B5%D1%81%D1%82_115346490&utm_content=5506941493&utm_term=exchange&etext=2202.CsrlQGkwPopP628Gqwps2vKyNavycFalHMi8_pSHRJRJm38CCAALJvmvXZW4qWGQY25icmZ1ZnNzbnZ3c3lsZg.1eb3394fdfd74cbb2dc3b4cac4cc822b574d1be5&yclid=9665276371620069375">Exchange
                            and return of goods</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Guarantee">Guarantee</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/FAQ">FAQ</a></li>
                        <li><a href="https://medium.com/ideate-by-klemchuk-pllc/website-terms-of-use-7d8d6c65fd12">Terms
                            of site use</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;

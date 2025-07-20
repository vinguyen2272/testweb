import { Col, Row } from 'antd'
import Style from './style.module.css'
import bct from "../../assets/BCT.jpg";
import { Link } from 'react-router-dom';
import androi from "../../assets/and.jpg";
import apple from "../../assets/apple.jpg";
import footer from "../../assets/ft.jpg";
import location from "../../assets/icon/location.png";
import { FaArrowRight } from "react-icons/fa6";
import menu1 from "../../assets/country.svg";



const Footer = () => {
    return (
        <>
            <div className={Style.myFooter}>
                <div className={Style.system}>
                    <div className={Style.location}>
                        <img src={location} />
                        <p>Xem hệ thống 88 cửa hàng trên toàn quốc</p>
                    </div>

                    <button>Xem ngay <FaArrowRight /></button>
                </div>
                <img src={footer} alt="ft" />

                <div className="container">
                    <Row>
                        <Col span={10}>
                            <div className={Style.company}>
                                <div className={Style.companyTitle}>
                                    <p>Viet Hung Auto Production Trading Joint Stock Company</p>
                                </div>
                                <div className={Style.companyContent}>
                                    <p>Address: <span>13 Nghia Thuc, Ward 05, District 5, Ho Chi Minh City, Viet Nam.</span></p>
                                    <p>Tax code: <span>0305094228</span></p>
                                    <p>Phone number: <span>0283 760 7607</span></p>
                                    <p>Opening hour: <span>09:00 - 22:00 from Mon - Fri</span></p>
                                </div>
                                <img src={bct} alt='bct' />
                            </div>
                        </Col>
                        <Col span={4} className={Style.Sitemap}>
                            <p className={Style.listTitle}>Sitemap</p>
                            <ul className={Style.listInfo}>
                                <li><Link to='/'>About</Link></li>
                                <li><Link to='/'>Article</Link></li>
                                <li><Link to='/'>Cart</Link></li>
                                <li> <Link to='/'>Contact</Link></li>
                            </ul>

                        </Col>
                        <Col span={4} className={Style.Legal}>
                            <p className={Style.listTitle}>Legal</p>
                            <b>__Privacy policy</b>
                            <ul className={Style.listInfo}>
                                <li> <Link to='/'>Cookie policy</Link></li>
                                <li><Link to='/'>Delivery policy</Link></li>
                                <li> <Link to='/'>FAQs</Link></li>
                            </ul>
                        </Col>
                        <Col span={6} className={Style.Download}>
                            <p className={Style.listTitle}>Download App</p>
                            <img src={androi} alt='androi' />
                            <img src={apple} alt='apple' />
                            <div className={Style.menuItem}><img src={menu1} alt="menu" /><p>VI</p></div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Footer
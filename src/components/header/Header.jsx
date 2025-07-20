import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { Badge, Col, Row } from "antd";
import Style from './style.module.css'
import icon1 from "../../assets/Subtract.svg";
import Logo from "../../assets/logo.svg";
import SearchBox from "../searchbox/SearchBox";
import menu1 from "../../assets/country.svg";
import menu2 from "../../assets/Cart.svg";
import menu3 from "../../assets/User.svg";
import Navbar from "../navbar/Navbar";
import products from "../../../public/product.json";
import CardItem from "../cardItem/CardItem";
import { useState } from "react";



const Header = () => {
    const [hover, setHover] = useState(false);

    return (
        <>
            <div className={Style.topHeader}>
                <div className={Style.subtract}>
                    <img src={icon1} alt="icon" />
                    <p>Nhập mã <span>NEWBIE</span> giảm ngay 10% cho lần đầu mua hàng.</p>
                </div>
                <div className={Style.contact}>
                    <div className={Style.holine}>
                        <FaPhoneAlt />
                        <p>Hotline: <span>0283 760 7607</span></p>
                    </div>
                    <div className={Style.store}>
                        <MdOutlinePhoneAndroid />
                        <p>Tải ứng dụng</p>
                    </div>
                </div>
            </div>
            <div className={`${Style.mainHeader} container`}>
                <Row style={{ alignItems: 'center' }}>
                    <Col span={5}><img src={Logo} alt="logo" /></Col>
                    <Col span={13}><SearchBox
                        placeholder="Tìm sản phẩm" /></Col>
                    <Col span={6}>
                        <div className={Style.menu}>
                            <div className={Style.menuItem}><img src={menu1} alt="menu" /><p>VI</p></div>
                            <div className={Style.menuItem}
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}><Badge count={5}><img src={menu2} alt="menu" /></Badge><p>Giỏ hàng</p>
                                {hover && (
                                    <div className={Style.cardHover}>
                                        {products.slice(0, 1).map((product) => (
                                            <CardItem
                                                key={product.id}
                                                title={product.name}
                                                image={product.image}
                                                price={product.originalPrice}
                                                sale={product.discountedPrice}
                                            />
                                        ))}
                                    </div>
                                )}</div>
                            <div className={Style.menuItem}><img src={menu3} alt="menu" /><p>Tài Khoản</p></div>
                        </div>
                    </Col>
                </Row>
            </div>
            <Navbar />
        </>
    )
}

export default Header
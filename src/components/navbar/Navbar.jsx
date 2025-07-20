import { Button, Col, Row, } from 'antd';
import Style from './style.module.css';
import { IoIosMenu } from 'react-icons/io';
import { FaAngleDown } from 'react-icons/fa';
import { MdArrowForwardIos } from "react-icons/md";

import { Link } from 'react-router-dom';
import icon1 from '../../assets/time.png'
import icon2 from '../../assets/HM.svg';
import icon3 from '../../assets/truck.svg';
import icon4 from '../../assets/Refresh.svg';
import products from "../../../public/product.json";
import { useState } from 'react';
import Submenu from './submenu/Submenu';


const Navbar = () => {
    const [hoverIndex, setHoverIndex] = useState(null);
    const Products = products.slice(4, 12);
    return (
        <nav>
            <div className='container'>
                <Row style={{ alignItems: 'center' }}>
                    <Col span={4}>
                        <div className={Style.navver}>
                            <Button color="primary" variant="solid" className={`${Style.catelogy}`}>
                                <span><IoIosMenu /></span>
                                <span className={Style.text}> Danh mục sản phẩm</span>
                                <span><FaAngleDown /></span>
                            </Button>
                            {open && (
                                <ul className={Style.submenu}>
                                    {Products.map((product, index) => {
                                        return (
                                            <li key={index} className={Style.listMenu}
                                                onMouseEnter={() => setHoverIndex(index)}
                                                onMouseLeave={() => setHoverIndex(null)}>
                                                <img
                                                    src={product.image}
                                                    alt={product.category}

                                                />
                                                <span>{product.category}</span>
                                                <MdArrowForwardIos />
                                                {hoverIndex === index && (
                                                    <div style={{
                                                        position: "absolute",
                                                        top: 0,
                                                        left: "100%",
                                                        zIndex: 10,
                                                        backgroundColor: "#fff",
                                                        minWidth: "300px"
                                                    }}>
                                                        <Submenu />
                                                    </div>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </div>
                    </Col>
                    <Col span={20}>  <div className={Style.navhor}>
                        <ul className={Style.list}>
                            <li className={Style.group1}>
                                <Link to="/">
                                    Về chúng tôi</Link>
                                <Link to="/">
                                    Bài viết</Link>
                                <Link to="/">
                                    Cateloge</Link>
                                <Link to="/">
                                    Liên hệ</Link></li>
                            <li className={Style.group2}>
                                <Link to="/">
                                    <img src={icon1} alt='category' width={20} className='me-2' />
                                    <p>Hỗ trợ 24/7</p>
                                </Link>
                                <Link to="/">
                                    <img src={icon2} alt='category' width={20} className='me-2' />
                                    <p>Miễn phí vận chuyển</p>
                                </Link>
                                <Link to="/">
                                    <img src={icon3} alt='category' width={20} className='me-2' />
                                    <p>Giao hàng nhanh 2h</p>
                                </Link>
                                <Link to="/">
                                    <img src={icon4} alt='category' width={20} className='me-2' />
                                    <p>Miễn phí đổi trả 30 ngày</p>
                                </Link>
                            </li>
                        </ul>
                    </div></Col>

                </Row>

            </div>


        </nav >
    )
}

export default Navbar
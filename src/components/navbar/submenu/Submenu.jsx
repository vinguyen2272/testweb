import { Card, Col, Row } from 'antd'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import products from "../../../../public/product.json"
import Style from './style.module.css';
import Meta from 'antd/es/card/Meta';


const Submenu = () => {

    return (
        <>
            <div className={Style.wrap}>

                <Row gutter={[16, 16]}>
                    {products.slice(0, 6).map((product, index) => (
                        <Col key={index} span={8}>
                            <button className={Style.box}>
                                <img src={product.image} alt="" />
                                <p>{product.category}</p>

                            </button>
                        </Col>
                    ))}
                </Row>

                <div className={Style.bestSale}>
                    <div className={Style.title}>
                        <p>
                            Sản phẩm bán chạy
                        </p>
                        <button>
                            Xem tất cả <MdKeyboardDoubleArrowRight />
                        </button>
                    </div>
                </div>

                <div className={Style.productItems}>
                    <Row gutter={12} >
                        {products.slice(4, 8).map((product, index) => (
                            <Col span={6} key={index}>
                                <Card>
                                    {<img alt="example" src={product.image} style={{ width: '200px', height: '200px' }} />}
                                    <div className={Style.productInfo}>
                                        <Meta title={product.name} />
                                        <p className={Style.price}>{product.discountedPrice.toLocaleString('en-US')} đ</p>
                                        <p className={Style.discount}>{product.originalPrice.toLocaleString('en-US')} đ</p>

                                    </div>
                                </Card>
                            </Col>

                        ))}
                    </Row>

                </div>

            </div>
        </>
    )
}

export default Submenu


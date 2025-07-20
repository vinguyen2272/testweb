import Style from './style.module.css';
import banner from "../../assets/banner.jpg";
import Braedcrum from '../../components/breadcrum/Braedcrum';
import products from "../../../public/product.json";
import CardItem from '../../components/cardItem/CardItem';
import { Col, Row } from 'antd';
import { useRef, useState, useEffect } from 'react';

import Sidebar from '../../components/sidebar/Sidebar';
import Radiobox from '../../components/sidebar/Radiobox';
import ic1 from "../../assets/icon/ic1.png";
import ic2 from "../../assets/icon/ic2.png";
import ic3 from "../../assets/icon/ic3.png";
import ic4 from "../../assets/icon/ic4.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import RadioCustom from '../../components/radioButton/RadioCustom';



const radioFilter = [
    { label: 'Liên quan', value: '1' },
    { label: 'Mới nhất', value: '2' },
    { label: 'Bán chạy', value: '3' },
    { label: 'Nổi bật', value: '4' },

]
const Home = () => {

    const [selected, setSelected] = useState('1');

    const handleChange = (e) => {
        setSelected(e.target.value);
    };

    const loadMoreRef = useRef(null);
    const [page, setPage] = useState(1);
    const perPage = 4;

    const allProducts = products;
    const visibleProducts = allProducts.slice(0, page * perPage);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setPage((prev) => prev + 1);
                }
            },
            { threshold: 1 }
        );

        const currentRef = loadMoreRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);


    return (
        <div className={Style.home}>
            <div className="container">
                <Braedcrum />

                <div className={Style.banner}>
                    <img src={banner} alt="banner" />
                </div>
                {/* Carousel */}


                <div className={Style.wrapCarousel}>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation
                        autoplay={{ delay: 3000 }}
                        loop={true}
                        spaceBetween={20}
                        breakpoints={{
                            1200: {
                                slidesPerView: 5,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            480: {
                                slidesPerView: 1,
                            },
                        }}
                    >
                        {products.map((product) => (
                            <SwiperSlide key={product.id}>
                                <CardItem
                                    title={product.name}
                                    image={product.image}
                                    price={product.originalPrice}
                                    sale={product.discountedPrice}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>


                </div>

                {/* Product list */}

                <Row gutter={24} style={{ marginTop: '20px' }}>
                    <Col span={6}><Sidebar /></Col>
                    <Col span={18}>
                        <div className={Style.titleProductList}>
                            <p>Danh sách sản phẩm</p>
                            <div className={Style.titleRadio}>
                                <p>Sắp xếp theo</p>
                                {radioFilter.map((tag) => (
                                    <RadioCustom
                                        key={tag.value}
                                        label={tag.label}
                                        value={tag.value}
                                        name="tag"
                                        checked={selected === tag.value}
                                        onChange={handleChange}
                                    />
                                ))}
                            </div>
                        </div>
                        <Row gutter={[24, 24]}>
                            {visibleProducts.map((product) => (
                                <Col key={product.id} lg={6} sm={12} xs={24}>
                                    <CardItem
                                        title={product.name}
                                        image={product.image}
                                        price={product.originalPrice}
                                        sale={product.discountedPrice}
                                    />
                                </Col>
                            ))}
                        </Row>
                        <div ref={loadMoreRef} style={{ height: 1 }}></div>
                    </Col>
                </Row>

                <Row gutter={24}>
                    <Col lg={6} sm={12} xs={24}>
                        <div className={Style.cItems}>
                            <Row gutter={24}>
                                <Col span={4}><img src={ic1} alt='icons' /></Col>
                                <Col span={20}>
                                    <b>Miễn phí vận chuyển</b>
                                    <p>Với hoá đơn từ 1 triệu</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>

                    <Col lg={6} sm={12} xs={24}>
                        <div className={Style.cItems}>
                            <Row gutter={24}>
                                <Col span={4}><img src={ic2} alt='icons' /></Col>
                                <Col span={20}>
                                    <b>Hỗ trợ 24/7</b>
                                    <p>Đội ngũ CSKH tận tình sẵn sàng lắng nghe và phục vụ tận tâm</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>

                    <Col lg={6} sm={12} xs={24}>
                        <div className={Style.cItems}>
                            <Row gutter={24}>
                                <Col span={4}><img src={ic3} alt='icons' /></Col>
                                <Col span={20}>
                                    <b>Giao hàng nhanh 2h</b>
                                    <p>Trong vòng bán kính 10km nội thành TP HCM</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>

                    <Col lg={6} sm={12} xs={24}>
                        <div className={Style.cItems}>
                            <Row gutter={24}>
                                <Col span={4}><img src={ic4} alt='icons' /></Col>
                                <Col span={20}>
                                    <b>30 ngày đổi trả</b>
                                    <p>Hoàn tiền 100% nếu phát sinh lỗi từ NSX hoặc đơn vị vận chuyển</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Home;

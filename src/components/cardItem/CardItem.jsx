import { Card } from "antd"
import deal from "../../assets/Left.png";
import Style from './style.module.css';
import Meta from "antd/es/card/Meta";


const CardItem = ({ image, title, price, sale }) => {
    return (
        <>
            <Card>
                <div className={Style.wrap}>
                    {<img alt="product" src={image} className={Style.proImg} />}
                    <div className={Style.deal}><img src={deal} alt="deal" /><p>Giá cực sốc</p></div>
                    <Meta title={title} />
                    <p className={Style.price}>{price.toLocaleString('en-US')} đ</p>
                    <p className={Style.discount}>{sale.toLocaleString('en-US')} đ</p>
                    <button className={Style.buy}>Mua ngay</button></div>
            </Card>
        </>
    )
}

export default CardItem
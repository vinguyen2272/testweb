import Style from './style.module.css'
import icon from "../../assets/icon/end.png";
import { Collapse, ConfigProvider } from 'antd';
import CheckboxProduct from './Checkbox';
import Radiobox from './Radiobox';
import products from "../../../public/product.json";
const cateFilter = [
    { label: "Lọc gió động cơ - Air Filter", value: "air-filter", fieldValue: "Bộ lọc không khí" },
    { label: "Lọc nhiên liệu - Fuel Filter", value: "fuel-filter", fieldValue: "Lọc nhiên liệu" },
    { label: "Bộ lọc dầu", value: "oil-filter", fieldValue: "Bộ lọc dầu" },
    { label: "Chưa phân loại", value: "uncategorized", fieldValue: "Chưa phân loại" },
    { label: "Khác", value: "other", fieldValue: "Khác" },
];

const trademarkFilter = [
    { label: "AsaKashi", value: "AsaKashi", fieldValue: "AsaKashi" },
    { label: "Bosh", value: "Bosh", fieldValue: "Bosh" },
    { label: "Huyndai", value: "Huyndai", fieldValue: "Huyndai" },
]

const yearFilter = [
    { label: "2021", value: "2021", fieldValue: "2021" },
    { label: "2020", value: "2020", fieldValue: "2020" },
    { label: "2019", value: "2019", fieldValue: "2019" },
    { label: "2019", value: "2018", fieldValue: "2018" },
]

const originFilter = [
    { label: "Đức", value: "Đức", fieldValue: "Đức" },
    { label: "Nhật Bản", value: "Nhật Bản", fieldValue: "Nhật Bản" },
    { label: "Trung Quốc", value: "Trung Quốc", fieldValue: "Trung Quốc" },
]

const priceFilter = [
    { label: 'Dưới 100,000 đ', value: '1' },
    { label: '100,000 đ - 300,000 đ', value: '2' },
    { label: '300,000 đ - 500,000 đ', value: '3' },
    { label: 'Trên 500, 000 đ', value: '4' },
];
const Sidebar = () => {
    const handleCategoryChange = (selectedCategories) => {
        console.log("Chọn category:", selectedCategories);
    };
    const handleSortChange = (value) => {
        console.log("Sort theo:", value);
    };
    const items = [
        {
            key: '1',
            label: 'Danh mục sản phẩm',
            children: <CheckboxProduct data={products}
                field="category"
                options={cateFilter}
                onChange={handleCategoryChange} />,
        },
        {
            key: '2',
            label: 'Khoảng giá',
            children: <Radiobox
                options={priceFilter}
                defaultValue="asc"
                onChange={handleSortChange}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px'

                }}
            />,
        },
        {
            key: '3',
            label: 'Thương hiệu',
            children: <CheckboxProduct data={products}
                field="trademark"
                options={trademarkFilter}
                onChange={handleCategoryChange} />,
        },
        {
            key: '4',
            label: 'Năm sản xuất',
            children: <CheckboxProduct data={products}
                field="year"
                options={yearFilter}
                onChange={handleCategoryChange} />,
        }, {
            key: '5',
            label: 'Xuất xứ',
            children: <CheckboxProduct data={products}
                field="origin"
                options={originFilter}
                onChange={handleCategoryChange} />,
        },
    ];
    const onChange = key => {
        console.log(key);
    };

    return (
        <>
            <div className={Style.headSidebar}>
                <img src={icon} alt='end' />
                <p>Bộ lọc</p></div>
            <ConfigProvider
                theme={{
                    components: {
                        Collapse: {
                            headerBg: '#ffff'
                        },
                    },
                }}
            >
                <Collapse expandIconPosition="end" items={items} bordered={false} defaultActiveKey={['1']} onChange={onChange} />
            </ConfigProvider>


        </>
    )
}

export default Sidebar
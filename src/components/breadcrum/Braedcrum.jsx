import { Breadcrumb, ConfigProvider } from "antd"
import { Link } from "react-router-dom"


const Braedcrum = () => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Breadcrumb: {
                        linkColor: '#024897',
                    },
                },
            }}
        >
            <Breadcrumb
                style={{ padding: '15px 0px' }}
                items={[
                    {
                        title: 'Trang chủ',
                    },
                    {
                        title: <Link href="">Sản Phẩm</Link>,
                    },

                ]}
            />
        </ConfigProvider>
    )
}



export default Braedcrum


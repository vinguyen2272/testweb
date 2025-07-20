import { Radio } from "antd";


const Radiobox = ({ options, onChange, defaultValue, ...rest }) => {

    return (
        <>
            <Radio.Group
                options={options}
                optionType="button"
                defaultValue={defaultValue}
                onChange={(e) => onChange?.(e.target.value)
                }
                {...rest}
            /></>
    )
}

export default Radiobox
import { useMemo } from "react";

import { Checkbox } from 'antd';

const CheckboxProduct = ({ data, field, options, onChange }) => {

    const optionsWithCount = useMemo(() => {
        return options.map((option) => {
            const count = data.filter((item) => item[field] === option.fieldValue).length;
            return {
                label: (
                    <span>
                        {option.label} <span style={{ color: "#999" }}>({count})</span>
                    </span>
                ),
                value: option.value,
                fieldValue: option.fieldValue,
            };
        });
    }, [data, field, options]);

    const handleChange = (checkedValues) => {
        const selectedValues = optionsWithCount
            .filter((opt) => checkedValues.includes(opt.value))
            .map((opt) => opt.fieldValue);
        onChange && onChange(selectedValues);
    };
    return (
        <>
            <Checkbox.Group
                options={optionsWithCount}
                onChange={handleChange}
                style={{ display: "flex", flexDirection: "column", gap: 8 }}
            />
        </>
    )
}

export default CheckboxProduct
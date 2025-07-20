import Style from './style.module.css'

const RadioCustom = ({ label, value, name, checked, onChange }) => {
    return (
        <label className={Style.customRadio}>
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                className={Style.hiddenRadio}
            />
            <span className={Style.label}>{label}</span>
        </label>
    )
}

export default RadioCustom
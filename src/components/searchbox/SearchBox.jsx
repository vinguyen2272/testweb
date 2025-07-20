
import Style from './style.module.css';
import { CiSearch } from "react-icons/ci";
import { CiCamera } from "react-icons/ci";
// import { Button } from 'antd';
const SearchBox = ({ placeholder, onChange }) => {
  return (
    <>
      <div className={`${Style.search}`}>
        <input type='text'
          placeholder={placeholder}
          onChange={onChange} />
        <button className={Style.onCamera}><CiCamera /></button>
        <button className={Style.onSearch}><CiSearch /></button>
      </div>
    </>
  )
}

export default SearchBox
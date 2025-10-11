import { Select } from 'antd';

const SelectComponent = ({ options, value, onChange, placeholder, isClearable, styles }) => (
  <Select
    showSearch
    style={{ width: 190,   cursor:"pointer", marginBottom:'50px' , color: "#545454", ...styles?.control }}
    placeholder={placeholder}
    optionFilterProp="label"
    allowClear={isClearable}
    value={value}
    onChange={onChange}
    options={options}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    dropdownStyle={{ zIndex: 9999 }}
  />
);

export default SelectComponent;

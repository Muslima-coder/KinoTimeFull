// import { Select } from 'antd';
// const SelectComponent = () => (
//   <Select
//     showSearch
//     style={{ width: 200,  color: "#545454"}}
//     placeholder="Search to Select"
//     optionFilterProp="label"
//     filterSort={(optionA, optionB) =>
//       (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
//     }
//     options={[
//       {
//         value: '1',
//         label: 'Not Identified',
//       },
//       {
//         value: '2',
//         label: 'Closed',
//       },
//       {
//         value: '3',
//         label: 'Communicated',
//       },
//       {
//         value: '4',
//         label: 'Identified',
//       },
//       {
//         value: '5',
//         label: 'Resolved',
//       },
//       {
//         value: '6',
//         label: 'Cancelled',
//       },
//     ]}
//   />
// );
// export default SelectComponent;

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

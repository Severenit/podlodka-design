import '../../index.css';

import Input from './Input';

export default {
  title: 'Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;
//
export const Standart = Template.bind({});

Standart.args = {
  defaultValue: '',
  placeholder: ''
};
//
// export const Secondary = Template.bind({});
// Secondary.args = {
//   children: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };

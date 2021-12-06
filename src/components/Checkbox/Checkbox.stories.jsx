import '../../index.css';

import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;
//
export const Standart = Template.bind({});

Standart.args = {
  id: 'check',
  label: 'Label'
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

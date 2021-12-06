import '../../index.css';

import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;
//
export const Standart = Template.bind({});

Standart.args = {
  children: 'Button',
  size: 'large',
  full: false,
  colors: 'brand',
  type: 'primary'
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

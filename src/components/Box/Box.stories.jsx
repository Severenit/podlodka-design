import '../../index.css';

import Box from './Box';

export default {
  title: 'Box',
  component: Box,
};

const Template = (args) => <Box {...args} />;
//
export const Standart = Template.bind({});

Standart.args = {
  children: 'Some Text In Box...'
}

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

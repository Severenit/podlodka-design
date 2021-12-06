import '../../index.css';

import Heading from './Heading';

export default {
  title: 'Heading',
  component: Heading,
};

const Template = (args) => <Heading {...args} />;
//
export const Standart = Template.bind({});

Standart.args = {
  size: 'xl',
  children: 'Heading'
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

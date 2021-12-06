import '../../index.css';

import Text from './Text';

export default {
  title: 'Text',
  component: Text,
};

const Template = (args) => <Text {...args} />;
//
export const Standart = Template.bind({});

Standart.args = {
  type: 'typography-4',
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, ad, adipisci asperiores beatae blanditiis deleniti harum, impedit iure magnam nulla optio perferendis quisquam repellendus rerum temporibus totam voluptas voluptates voluptatum!'
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

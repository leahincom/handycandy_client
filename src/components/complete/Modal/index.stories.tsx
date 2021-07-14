import { Meta, Story } from '@storybook/react';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';
import ImageEditModal from './ImageEditModal';

export default { title: 'components/complete/EditModal', component: EditModal } as Meta;

const Template: Story = (props) => <EditModal {...props} />;

export const Basic = Template.bind({});

export const Delete = () => {
  return <DeleteModal candy='https://dummyimage.com/100x100/000/fff' />;
};

export const Edit = () => {
  return <EditModal />;
};

export const ImageEdit = () => {
  return <ImageEditModal candy='https://dummyimage.com/221x221/000/fff' />;
};

import { Meta, Story } from '@storybook/react';
import NoticeModal, { NoticeModalProps } from '.';

export default { title: 'components/common/NoticeModal', component: NoticeModal } as Meta;

const Template: Story<NoticeModalProps> = (props) => <NoticeModal {...props} />;

export const Basic = Template.bind({});
Basic.args = {
  notices: {
    notCompleted: [
      {
        content: '한강에서 라이딩하기가 1일이 지났습니다. 캔디를 선물해보세요.',
        date: '7월 16일',
        candy: 'https://dummyimage.com/35x35/000/fff',
      },
    ],
    completed: [
      {
        content: '산타마리아노벨라 엔젤디피렌체 향수를 선물했어요.',
        date: '7월 16일',
        candy: 'https://dummyimage.com/35x35/000/fff',
      },
      {
        content: '시원스쿨 프랑스어를 선물했어요.',
        date: '7월 16일',
        candy: 'https://dummyimage.com/35x35/000/fff',
      },
      {
        content: '시원스쿨 프랑스어를 선물했어요.',
        date: '7월 16일',
        candy: 'https://dummyimage.com/35x35/000/fff',
      },
    ],
  },
};

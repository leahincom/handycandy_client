import styled from 'styled-components';
import { makeStyles, TextField } from '@material-ui/core';
import { Donut } from '../../../public/assets/candy';
import Button from '../common/Button';
import MenuDropdown from './MenuDropdown';

const useStyles = makeStyles({
  root: {
    marginRight: '15px',
    paddingBottom: '5px',
  },
});

const Dialog = styled.div`
  display: flex;
  /* position: absolute;
  top: 315px;
  left: 589px; */
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #ffffff;
  border-radius: 25px;
  background-color: #ffffff;
  width: 726px;
  height: 400px;
`;

const Title = styled.h1`
  line-height: 23px;
  letter-spacing: -0.022em;
  color: #1e1e1e;
  font-family: 'NanumSquareRound', sans-serif;
  font-size: 20px;
  font-weight: 800;
  font-style: normal;
`;

const Desc = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 50px;
  letter-spacing: -0.022em;
  color: #1e1e1e;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  font-size: 28px;
  font-weight: normal;
  font-style: normal;
`;

const Line = styled.div`
  display: flex;
  align-items: center;
  line-height: 33px;
  letter-spacing: -0.022em;
  color: #1e1e1e;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  font-size: 28px;
  font-weight: normal;
  font-style: normal;
`;

const LinkBox = styled.input`
  box-sizing: border-box;
  border: 1px solid #dcdcdc;
  border-radius: 30px;
  background: #f2f2f2;
  padding: 15px 0 15px 54px;
  width: 520px;
  height: 52px;
  line-height: 23px;
  letter-spacing: -0.022em;
  color: #c1c1c1;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
`;

const ButtonBar = styled.div`
  display: flex;
  align-items: center;
`;

export interface DialogManagerProps {
  handleDialogState: () => void;
}

export default function DialogManager({ handleDialogState }: DialogManagerProps) {
  const classes = useStyles();

  const category = [
    {
      image: Donut,
      name: '행복해지고 싶은 나',
    },
  ];

  return (
    <Dialog>
      <Title>캔디 추가하기</Title>
      <Desc>
        <Line style={{ zIndex: 5 }}>
          <MenuDropdown category={category} />
          를 위한 <br />
        </Line>
        <div style={{ marginBottom: '17px' }} />
        <Line>
          <form className={classes.root} noValidate autoComplete='off'>
            <TextField id='standard-basic' />
          </form>
          캔디를 줄거예요.
        </Line>
      </Desc>
      <LinkBox placeholder='링크를 입력하세요' />
      <ButtonBar>
        <Button text='뒤로가기' size='sm' color='gray' />
        <div style={{ marginLeft: '9px' }} />
        <Button text='다음' size='sm' color='peach' />
      </ButtonBar>
    </Dialog>
  );
}

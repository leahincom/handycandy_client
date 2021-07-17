import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { makeStyles, TextField } from '@material-ui/core';
import { postNewCandy } from '../../../../pages/api/usePosts/postNewCandy';
import { getCategoryList } from '../../../../pages/api/useGets/getCategoryList';
import Button from '../../Button';
import CategoryDropdown from './Dropdown/Category';
import CandyAdded from './CandyAdded';

const useStyles = makeStyles({
  root: {
    // eslint-disable-next-line quote-props
    marginRight: '15px',
    // eslint-disable-next-line quote-props
    paddingBottom: '5px',
    '& .MuiInput-underline:after': {
      borderBottomColor: 'var(--black)',
    },
  },
});

const Title = styled.h1`
  line-height: 23px;
  letter-spacing: -0.022em;
  color: var(--black);
  font-family: var(--nanum);
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
  color: var(--black);
  font-family: var(--roboto);
  font-size: 28px;
  font-weight: normal;
  font-style: normal;
`;

const Line = styled.div`
  display: flex;
  align-items: center;
  line-height: 33px;
  letter-spacing: -0.022em;
  color: var(--black);
  font-family: var(--roboto);
  font-size: 28px;
  font-weight: normal;
  font-style: normal;
`;

const LinkBox = styled.input`
  box-sizing: border-box;
  border: 1px solid var(--gray-3);
  border-radius: 30px;
  background: var(--gray-1);
  padding: 15px 0 15px 54px;
  width: 520px;
  height: 52px;
  line-height: 23px;
  letter-spacing: -0.022em;
  color: var(--black);
  font-family: var(--roboto);
  font-size: 20px;
  font-weight: 500;
  font-style: normal;

  &::placeholder {
    color: var(--gray-5);
  }

  &:focus {
    outline: none;
  }
`;

export default function AddCandy() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [candy, setCandy] = useState('');
  const [link, setLink] = useState('');
  const [added, setAdded] = useState(false);
  const [candyId, setCandyId] = useState('');

  const queryClient = useQueryClient();
  const { isLoading, data: categoryList } = useQuery('categoryList', getCategoryList);
  const mutation = useMutation(postNewCandy, {
    onSuccess: (data) => {
      setCandyId(data.candy_id);
      queryClient.invalidateQueries('waiting');
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.id === 'standard-basic') {
      setCandy(e.target.value);
    } else {
      setLink(e.target.value);
    }
  };

  const handleClick = async () => {
    if (candy && link) {
      const category = categoryList && categoryList[selectedCategory];
      category &&
        mutation.mutate({
          category_id: category.category_id,
          candy_name: candy,
          shopping_link: link,
          candy_image_url: '',
          detail_info: '',
        });
      setAdded(true);
    } else {
      alert('링크를 입력하세요');
    }
  };

  const classes = useStyles();

  return (
    <>
      {!isLoading &&
        (!added ? (
          <>
            <Title>캔디 추가하기</Title>
            <Desc>
              <Line>
                <CategoryDropdown
                  category={categoryList}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
                를 위한 <br />
              </Line>
              <div style={{ marginBottom: '17px' }} />
              <Line>
                <form className={classes.root} noValidate autoComplete='off'>
                  <TextField
                    id='standard-basic'
                    style={{ width: '311px' }}
                    value={candy}
                    onChange={handleChange}
                    inputProps={{
                      style: {
                        fontFamily: 'var(--roboto)',
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        fontSize: '28px',
                        lineHeight: '33px',
                        letterSpacing: '-0.022em',
                        color: 'var(--black)',
                        textAlign: 'center',
                      },
                    }}
                  />
                </form>
                캔디를 줄거예요.
              </Line>
            </Desc>
            <LinkBox placeholder='링크를 입력하세요' value={link} onChange={handleChange} />
            <Button text='다음' size='sm' buttonColor='peach' color='black' onClick={handleClick} />
          </>
        ) : (
          <CandyAdded candyId={candyId} category={categoryList} selectedCategory={selectedCategory} candy={candy} />
        ))}
    </>
  );
}

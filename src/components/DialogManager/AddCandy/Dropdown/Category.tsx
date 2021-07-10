import React, { useMemo } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { CategoryAdd, ToggleButton } from '../../../../../public/assets/icons';
import AddCategory from '../../AddCategory';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    paper: {
      marginRight: theme.spacing(2),
    },
  }),
);

const ToggleIcon = styled.img<{ open: boolean }>`
  transform: ${(props) => props.open && 'rotate(180deg)'};
  transition: all 0.2s linear;
  margin-left: 25px;
`;

const Icon = styled.img`
  margin-right: 12px;
`;

export interface CategoryDropdownProps {
  category: any;
  selectedCategory: number;
  setSelectedCategory: any;
  handleDialogState: () => void;
}

export default function CategoryDropdown({
  category,
  selectedCategory,
  setSelectedCategory,
  handleDialogState,
}: CategoryDropdownProps) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [addCategory, setAddCategory] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const selectedItem = useMemo(() => category[selectedCategory], [category, selectedCategory]);

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (id?: number) => (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setSelectedCategory(id);
    setOpen(false);
  };

  const handleAddCategory = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setAddCategory(true);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      {!addCategory ? (
        <div style={{ marginRight: '15px' }} className={classes.root}>
          <Button
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup='true'
            onClick={handleToggle}
            style={{
              fontFamily: 'var(--roboto)',
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: '28px',
              lineHeight: '33px',
              letterSpacing: '-0.022em',
              color: 'var(--black)',
              borderBottomRightRadius: '0',
              borderBottomLeftRadius: '0',
              borderBottom: '1px solid #5A5A5A',
              position: 'relative',
            }}
          >
            <Icon src={selectedItem.image} width='35px' />
            {selectedItem.name}
            <ToggleIcon src={ToggleButton} alt='' open={open} />
          </Button>
          <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                  boxShadow: '0px 7px 8px rgba(0, 0, 0, 0.15)',
                  borderTopRightRadius: '0',
                  borderTopLeftRadius: '0',
                  borderBottomRightRadius: '25px',
                  borderBottomLeftRadius: '25px',
                  width: anchorRef.current!.offsetWidth,
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose()}>
                    <MenuList
                      autoFocusItem={open}
                      id='menu-list-grow'
                      onKeyDown={handleListKeyDown}
                      style={{ padding: 0 }}
                    >
                      {category.map((el: any, idx: number) => {
                        return (
                          <>
                            <MenuItem
                              onClick={handleClose(idx)}
                              key={idx}
                              style={{
                                fontFamily: 'var(--roboto)',
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                fontSize: '20px',
                                lineHeight: '23px',
                                letterSpacing: '-0.022em',
                                color: 'var(--black)',
                                padding: 0,
                                paddingBottom: '10px',
                                paddingTop: '10px',
                                justifyContent: 'flex-start',
                                paddingRight: '25px',
                              }}
                            >
                              <Icon src={el.image} width='35px' style={{ marginLeft: '25px' }} />
                              {el.name}
                            </MenuItem>
                          </>
                        );
                      })}
                      <hr
                        style={{
                          border: '1px solid var(--gray-2)',
                        }}
                      />
                      <MenuItem
                        onClick={handleAddCategory}
                        style={{
                          fontFamily: 'var(--roboto)',
                          fontStyle: 'normal',
                          fontWeight: 'normal',
                          fontSize: '20px',
                          lineHeight: '23px',
                          letterSpacing: '-0.022em',
                          color: 'var(--black)',
                          padding: 0,
                          paddingBottom: '10px',
                          paddingTop: '10px',
                          borderBottomRightRadius: '25px',
                          borderBottomLeftRadius: '25px',
                        }}
                      >
                        <Icon src={CategoryAdd} width='35px' style={{ marginLeft: '25px' }} />
                        카테고리 추가하기
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      ) : (
        <AddCategory handleDialogState={handleDialogState} />
      )}
    </>
  );
}

import React, { useMemo } from 'react';
import Image from 'next/dist/client/image';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { ToggleButton } from '../../../../../public/assets/icons';

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

const ToggleIcon = styled.div<{ open: boolean }>`
  display: flex;
  align-items: center;
  transform: ${(props) => props.open && 'rotate(180deg)'};
  transition: all 0.2s linear;
  margin-left: 25px;
  height: 100%;
`;

const Icon = styled.div`
  margin-right: 12px;
  margin-left: 25px;
`;

export interface CategoryDropdownProps {
  category: any;
  selectedCategory: number;
  setSelectedCategory: any;
}

export default function CategoryDropdown({ category, selectedCategory, setSelectedCategory }: CategoryDropdownProps) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [, setAddCategory] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const selectedItem = useMemo(() => category[selectedCategory], [category, selectedCategory]);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (id: number) => (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setSelectedCategory(id);
    setOpen(false);
  };

  const handleAddCategory = (_e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
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
          fontSize: '24px',
          lineHeight: '33px',
          letterSpacing: '-0.022em',
          color: 'var(--black)',
          borderBottomRightRadius: '0',
          borderBottomLeftRadius: '0',
          position: 'relative',
        }}
      >
        <Icon>
          <Image src={selectedItem.image} width='35px' height='35px' alt='' />
        </Icon>
        {selectedItem.name}
        <ToggleIcon open={open}>
          <Image src={ToggleButton} alt='' />
        </ToggleIcon>
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
              <ClickAwayListener onClickAway={handleClose(selectedCategory)}>
                <MenuList autoFocusItem={open} id='menu-list-grow' onKeyDown={handleListKeyDown} style={{ padding: 0 }}>
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
                          <Icon>
                            <Image src={el.image} width='35px' height='35px' alt='' />
                          </Icon>
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
                  ></MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}

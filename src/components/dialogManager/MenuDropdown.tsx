import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Image from 'next/dist/client/image';
import { CategoryAdd, ToggleButton } from '../../../public/assets/icons';
import { borderRadius } from '@material-ui/system';

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

const Icon = styled.img`
  margin-right: 12px;
`;

export interface MenuDropdownProps {
  category: any;
}

export default function MenuDropdown({ category }: MenuDropdownProps) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
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
          fontFamily:
            '-apple-system, BlinkMacSystemFont, `Segoe UI`, Roboto, Oxygen, Ubuntu, Cantarell, `Open Sans`, `Helvetica Neue`, sans-serif',
          fontStyle: 'normal',
          fontWeight: 'bold',
          fontSize: '28px',
          lineHeight: '33px',
          letterSpacing: '-0.022em',
          color: '#1E1E1E',
          width: '308px',
          position: 'relative',
        }}
      >
        <Icon src={category[0].image} width='35px' />
        {category[0].name}
        <Image src={ToggleButton} alt='' style={{ marginLeft: '25px' }} />
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
              width: '308px',
              borderTop: '1px solid #5A5A5A',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id='menu-list-grow' onKeyDown={handleListKeyDown}>
                  {category.map((el: any, idx: number) => {
                    return (
                      <>
                        {/* <div style={{ marginTop: '10px' }} /> */}
                        <MenuItem
                          onClick={handleClose}
                          key={idx}
                          style={{
                            fontFamily:
                              '-apple-system, BlinkMacSystemFont, `Segoe UI`, Roboto, Oxygen, Ubuntu, Cantarell, `Open Sans`, `Helvetica Neue`, sans-serif',
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            fontSize: '20px',
                            lineHeight: '23px',
                            letterSpacing: '-0.022em',
                            color: '#1E1E1E',
                            padding: 0,
                            paddingBottom: '10px',
                            paddingTop: '10px',
                            justifyContent: 'flex-start',
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
                      border: '1px solid #E9E9E9',
                    }}
                  />
                  <MenuItem
                    onClick={handleClose}
                    style={{
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, `Segoe UI`, Roboto, Oxygen, Ubuntu, Cantarell, `Open Sans`, `Helvetica Neue`, sans-serif',
                      fontStyle: 'normal',
                      fontWeight: 'normal',
                      fontSize: '20px',
                      lineHeight: '23px',
                      letterSpacing: '-0.022em',
                      color: '#1E1E1E',
                      padding: 0,
                      paddingBottom: '10px',
                      paddingTop: '10px',
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
  );
}

import React from 'react';
import Image from 'next/dist/client/image';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import styled from 'styled-components';
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
  position: absolute;
  right: 25px;
  align-items: center;
  transform: ${(props) => props.open && 'rotate(180deg)'};
  transition: all 0.2s linear;
  height: 100%;
`;

export interface DateDropdownProps {
  dropdownList: number[];
  basis: number;
  setBasis: any;
}

export default function DateDropdown({ dropdownList, basis, setBasis }: DateDropdownProps) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (id: number) => (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }
    setBasis(id);
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
          background: 'white',
          borderRadius: '17px',
          border: '1px solid #DCDCDC',
          position: 'relative',
          fontFamily: 'var(--nanum)',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '24px',
          lineHeight: '36px',
          letterSpacing: '-0.022em',
          paddingRight: '25px',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          color: 'var(--black)',
          width: '155px',
          height: '57px',
        }}
      >
        {basis}
        <ToggleIcon open={open}>
          <Image src={ToggleButton} alt='' width='12px' height='6px' />
        </ToggleIcon>
      </Button>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
              background: 'var(--white)',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              borderRadius: '13px',
              width: anchorRef.current!.offsetWidth,
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose(basis)}>
                <MenuList
                  autoFocusItem={open}
                  id='menu-list-grow'
                  onKeyDown={handleListKeyDown}
                  style={{ padding: 0, overflowY: 'scroll', height: '309px' }}
                >
                  {dropdownList.map((el, idx) => (
                    <MenuItem
                      onClick={handleClose(el)}
                      key={idx}
                      style={{
                        fontFamily:
                          '-apple-system, BlinkMacSystemFont, `Segoe UI`, Roboto, Oxygen, Ubuntu, Cantarell, `Open Sans`, `Helvetica Neue`, sans-serif',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: '22px',
                        lineHeight: '26px',
                        letterSpacing: '-0.022em',
                        color: 'var(--black)',
                        padding: '10px 30px',
                        paddingBottom: '10px',
                        paddingTop: '10px',
                        justifyContent: 'flex-start',
                        flex: 'none',
                        order: 0,
                        flexGrow: 0,
                        borderRadius: '13px',
                      }}
                    >
                      {el}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}

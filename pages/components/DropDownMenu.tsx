import * as React from 'react';
import MenuUnstyled, { MenuUnstyledActions } from '@mui/base/MenuUnstyled';
import MenuItemUnstyled, {
  menuItemUnstyledClasses,
} from '@mui/base/MenuItemUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from '@mui/system';
import { Button, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Check } from 'phosphor-react';

const StyledListbox = styled('div')(
  ({ theme }) => `
  margin: 20px 0;
  min-width: 255px;
  background: ${theme.palette.mode === 'dark' ? '#fff' : '#fff'};
  border-radius: 0.75em;
  color: theme.palette.succes.main;
  overflow: auto;
  outline: 0px;
  box-shadow: 0 4px 8px 7px rgba(0,0,0, .08);
`,
);

const StyledMenuItem = styled(MenuItemUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 16px 24px;
  cursor: default;
  user-select: none;
  color: theme.palette.success.main;
  border-bottom: solid 1px #ddd;
  cursor: pointer;
  outline: 0;

  .check {
    float: right;
    color: theme.palette.primary.main
  }

  &:last-of-type {
    border-bottom: none;
  }

  &:hover:not(.${menuItemUnstyledClasses.disabled}) {
    color: ${theme.palette.primary.main};
  }
  `,
);

const TriggerButton = styled(Button)(
  ({ theme }) => ({
    height: '72px',
    width: '194px',
    fontSize: '14px',
    padding: 0,
    backgroundColor: theme.palette.success.main,
    color: theme.palette.info.main,
    textTransform: 'none',
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: theme.palette.success.main
    }
  })
)

const Popper = styled(PopperUnstyled)`
  z-index: 1;
`;

interface MenuSectionProps {
  children: React.ReactNode;
}

const MenuSectionRoot = styled('li')`
  list-style: none;
`;

function MenuSection({ children }: MenuSectionProps) {
  return (
    <MenuSectionRoot>
      <div>{children}</div>
    </MenuSectionRoot>
  );
}

export default function DropDownMenu() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const isOpen = Boolean(anchorEl);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const menuActions = React.useRef<MenuUnstyledActions>(null);
  const [selectedMenuOption, setSelectedMenuOption] = React.useState<string>('Most Upvotes')
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isOpen) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleButtonKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      setAnchorEl(event.currentTarget);
      if (event.key === 'ArrowUp') {
        menuActions.current?.highlightLastItem();
      }
    }
  };

  const close = () => {
    setAnchorEl(null);
    buttonRef.current!.focus();
  };
  const createHandleMenuClick = (optionName: string) => {
    return (e: React.MouseEvent<HTMLLIElement>) => {
      let elements = document.querySelectorAll('.dropdownMenuItem'); 
      elements.forEach((element: any) => {
        element.classList.remove('active');
      });
      // TO DO: Add menu item selection and sorting for items
      (e.target as Element).classList.add('active')
      setSelectedMenuOption(optionName)
      close();
    };
  };

  return (
    <div>
      <TriggerButton
        type="button"
        onClick={handleButtonClick}
        onKeyDown={handleButtonKeyDown}
        ref={buttonRef}
        aria-controls={isOpen ? 'wrapped-menu' : undefined}
        aria-expanded={isOpen || undefined}
        aria-haspopup="menu"
      >
        <Typography variant='body2'>Sort by:</Typography>&nbsp;<Typography variant="h4">{selectedMenuOption}</Typography><KeyboardArrowDownIcon />
      </TriggerButton>
      <MenuUnstyled
        actions={menuActions}
        open={isOpen}
        onClose={close}
        anchorEl={anchorEl}
        components={{ Root: Popper, Listbox: StyledListbox }}
        componentsProps={{ listbox: { id: 'simple-menu' } }}
      >
        <MenuSection>
          <StyledMenuItem onClick={createHandleMenuClick('Most Upvotes')} className="dropdownMenuItem">
            Most Upvotes {selectedMenuOption === 'Most Upvotes' && <div className='check'><Check size={18} weight="bold" color="#AD1FEA"/></div>}
          </StyledMenuItem>
          <StyledMenuItem onClick={createHandleMenuClick('Least Upvotes')} className="dropdownMenuItem">
            Least Upvotes {selectedMenuOption === 'Least Upvotes' && <div className='check'><Check size={18} weight="bold" color="#AD1FEA"/></div>}
          </StyledMenuItem>
          <StyledMenuItem onClick={createHandleMenuClick('Most Comments')} className="dropdownMenuItem">
            Most Comments {selectedMenuOption === 'Most Comments' && <div className='check'><Check size={18} weight="bold" color="#AD1FEA"/></div>}
          </StyledMenuItem>
          <StyledMenuItem onClick={createHandleMenuClick('Least Comments')} className="dropdownMenuItem">
            Least Comments {selectedMenuOption === 'Least Comments' && <div className='check'><Check size={18} weight="bold" color="#AD1FEA"/></div>}
          </StyledMenuItem>
        </MenuSection>
      </MenuUnstyled>
    </div>
  );
}

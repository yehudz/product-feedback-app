import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

let mobileView: boolean

const PrimaryButton = styled(Button)(({ theme }) => ({
  height: '44px',
  minWidth: '158px',
  fontWeight: 'bold',
  fontSize: '14px',
  borderRadius: '10px',
  textTransform: 'none',
  color: '#fff',
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: '#C75AF6',
  },
}));

export default PrimaryButton
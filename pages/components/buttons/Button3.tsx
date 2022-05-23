import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const Button3 = styled(Button)(({ theme }) => ({
  height: '44px',
  minWidth: '158px',
  borderRadius: '10px',
  fontWeight: 'bold',
  fontSize: '14px',
  textTransform: 'none',
  color: '#fff',
  backgroundColor: theme.palette.success.main,
  '&:hover': {
    backgroundColor: '#656EA3',
  },
}));

export default Button3
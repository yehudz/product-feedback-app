import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const Button4 = styled(Button)(({ theme }) => ({
  height: '44px',
  width: '158px',
  borderRadius: '10px',
  fontWeight: 'bold',
  fontSize: '14px',
  textTransform: 'none',
  backgroundColor: theme.palette.warning.dark,
  '&:hover': {
    backgroundColor: '#E98888',
  },
}));

export default Button4
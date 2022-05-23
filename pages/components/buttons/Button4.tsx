import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const Button4 = styled(Button)(({ theme }) => ({
  height: '44px',
  minWidth: '158px',
  borderRadius: '10px',
  fontWeight: 'bold',
  fontSize: '14px',
  textTransform: 'none',
  color: '#fff',
  backgroundColor: theme.palette.warning.dark,
  marginBottom: '16px',
  '&:hover': {
    backgroundColor: '#CFD7FF',
  },
}));

export default Button4
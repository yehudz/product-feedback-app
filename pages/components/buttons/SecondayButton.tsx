import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const SecondaryButton = styled(Button)(({ theme }) => ({
  height: '44px',
  width: '158px',
  borderRadius: '10px',
  fontWeight: 'bold',
  fontSize: '14px',
  textTransform: 'none',
  backgroundColor: theme.palette.secondary.main,
  '&:hover': {
    backgroundColor: '#7C91F9',
  },
}));

export default SecondaryButton
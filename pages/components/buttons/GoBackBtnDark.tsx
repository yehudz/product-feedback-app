import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const GoBackBtnDark = styled(Button)(({ theme }) => ({
  height: '44px',
  width: '158px',
  fontWeight: 'bold',
  fontSize: '14px',
  borderRadius: '10px',
  color: theme.palette.info.main,
  textTransform: 'none',
  backgroundColor: theme.palette.success.main,
  '&:hover': {
    backgroundColor: '#373F68',
    textDecoration: 'underline',
  },
}));

export default GoBackBtnDark
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const GoBackBtnLight = styled(Button)(({ theme }) => ({
  height: '44px',
  width: '158px',
  fontWeight: 'bold',
  fontSize: '14px',
  color: theme.palette.success.main,
  borderRadius: '10px',
  textTransform: 'none',
  backgroundColor: theme.palette.info.light,
  '&:hover': {
    backgroundColor: 'transparent',
    textDecoration: 'underline',
  },
}));

export default GoBackBtnLight
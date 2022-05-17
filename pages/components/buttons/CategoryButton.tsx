import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const CategoryButton = styled(Button)(({ theme }) => ({
  height: '30px',
  minWidth: '48px',
  fontWeight: '600',
  fontSize: '13px',
  borderRadius: '10px',
  color: "#4661E6",
  textTransform: 'none',
  backgroundColor: "#F2F4FF",
  '&:hover': {
    backgroundColor: '#CFD7FF',
  },
  "&.active": {
    color: '#fff',
    backgroundColor: '#4661E6',
  }
}));

export default CategoryButton
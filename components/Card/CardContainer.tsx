import { styled } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Typography, Box, Stack } from "@mui/material"
import { CardProps } from '../../typings/common.types';
import InputField from '../inputs/InputField';
import DropDownMenu from '../DropDownMenu';
import PrimaryButton from '../buttons/PrimaryButton';
import Button3 from '../buttons/Button3'
import Button4 from '../buttons/Button4'
export const CardWrapper = styled(Card)(({ theme }) => ({
 backgroundColor: '#fff',
 width: '90%',
 minHeight: '200px',
 borderRadius: '10px'
}));

const CardContainer = (
  {
    text, 
    icon, 
    title,
    titleLabel,
    category,
    categoryLabel,
    detail,
    detailLabel,
    menuItems,
    setFeedbackTitle,
    setCategorySelection,
    setMessage,
    saveFeedbackApiCall,
    request,
    isEdit,
    statusMenuItems,
    setStatus,
    showDeleteWarning,
    saveButtonText
  }: CardProps)=> {
  return (
    <CardWrapper elevation={0} sx={{overflow: 'visible'}}>
      <CardContent sx={{paddingTop: 6, position: 'relative'}}>
        <img src={icon} className="topIcon"/>
        <CardHeader 
          title={<Typography 
          variant="h2" 
          color="success.main">
            {text}
          </Typography>}>
        </CardHeader>
        <Box p={2}>
          <Typography variant='subtitle1' color='success.main' gutterBottom>{title}</Typography>
          <Typography variant='body2' color="success.main" fontSize={13} gutterBottom>{titleLabel}</Typography>
          <InputField setValue={setFeedbackTitle} multiLine={false} defaultValue={request?.title}/>
        </Box>
        <Box p={2}>
          <Typography variant='subtitle1' color='success.main' gutterBottom>{category}</Typography>
          <Typography variant='body2' color="success.main" fontSize={13} gutterBottom>{categoryLabel}</Typography>
          <DropDownMenu 
            menuItems={menuItems} 
            mobile={true} 
            sortDropdown={false} 
            setCategorySelection={setCategorySelection}
            savedCategoryOption={request?.category}
          />
        </Box>
        {isEdit && <Box p={2}>
          <Typography variant='subtitle1' color='success.main' gutterBottom>Update Status</Typography>
          <Typography variant='body2' color="success.main" fontSize={13} gutterBottom>Change feature state</Typography>
          <DropDownMenu 
            menuItems={statusMenuItems} 
            mobile={true} 
            sortDropdown={false} 
            setCategorySelection={setStatus}
            savedCategoryOption={request?.status}
          />
        </Box>}
        <Box p={2}>
          <Typography variant='subtitle1' color='success.main' gutterBottom>{detail}</Typography>
          <Typography variant='body2' color="success.main" fontSize={13} gutterBottom>{detailLabel}</Typography>
          <InputField setValue={setMessage} multiLine={true} defaultValue={request?.description}/>
        </Box>
        <Stack p={2} gap={2}>
          <PrimaryButton fullWidth={true} onClick={async ()=> await saveFeedbackApiCall()}>{saveButtonText ? 'Save Changes' : 'Add Feedback'}</PrimaryButton>
          <Button3 fullWidth={true}>Cancel</Button3>
          {isEdit && <Button4 fullWidth={true} onClick={showDeleteWarning}>Delete</Button4>}
        </Stack>
      </CardContent>
    </CardWrapper>
  )
}

export default CardContainer
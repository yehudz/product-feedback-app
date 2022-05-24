import { styled } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Typography, Box, Stack } from "@mui/material"
import { CardProps } from '../../../typings/common.types';
import { InputField } from '../inputs/InputField';
import DropDownMenu from '../DropDownMenu';
import PrimaryButton from '../buttons/PrimaryButton';
import Button3 from '../buttons/Button3'
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
    saveFeedbackApiCall
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
          <InputField setValue={setFeedbackTitle} multiLine={false}/>
        </Box>
        <Box p={2}>
          <Typography variant='subtitle1' color='success.main' gutterBottom>{category}</Typography>
          <Typography variant='body2' color="success.main" fontSize={13} gutterBottom>{categoryLabel}</Typography>
          <DropDownMenu menuItems={menuItems} mobile={true} sortDropdown={false} setCategorySelection={setCategorySelection}/>
        </Box>
        <Box p={2}>
          <Typography variant='subtitle1' color='success.main' gutterBottom>{detail}</Typography>
          <Typography variant='body2' color="success.main" fontSize={13} gutterBottom>{detailLabel}</Typography>
          <InputField setValue={setMessage} multiLine={true}/>
        </Box>
        <Stack p={2} gap={2}>
          <PrimaryButton fullWidth={true} onClick={async ()=> await saveFeedbackApiCall()}>Add Feedback</PrimaryButton>
          <Button3 fullWidth={true}>Cancel</Button3>
        </Stack>
      </CardContent>
    </CardWrapper>
  )
}

export default CardContainer
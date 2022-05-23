import { styled } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Typography, Box } from "@mui/material"
import { CardProps } from '../../../typings/common.types';
import { InputField } from '../inputs/InputField';
import DropDownMenu from '../DropDownMenu';
import { useState } from 'react';
const CardWrapper = styled(Card)(({ theme }) => ({
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
    menuItems
  }: CardProps)=> {
    const [value, setValue] = useState<string>()
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
          <InputField setValue={setValue} multiLine={false}/>
        </Box>
        <Box p={2}>
          <Typography variant='subtitle1' color='success.main' gutterBottom>{category}</Typography>
          <Typography variant='body2' color="success.main" fontSize={13} gutterBottom>{categoryLabel}</Typography>
          <DropDownMenu menuItems={menuItems} mobile={true} sortDropdown={false}/>
        </Box>
        <Box p={2}>
          <Typography variant='subtitle1' color='success.main' gutterBottom>{detail}</Typography>
          <Typography variant='body2' color="success.main" fontSize={13} gutterBottom>{detailLabel}</Typography>
          <InputField setValue={setValue} multiLine={true}/>
        </Box>
      </CardContent>
    </CardWrapper>
  )
}

export default CardContainer
import { styled } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Typography, Box } from "@mui/material"
import { CardProps } from '../../../typings/common.types';
import { InputField } from '../inputs/InputField';
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
    detailLabel
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
            <InputField setValue={setValue}/>
        </Box>
      </CardContent>
    </CardWrapper>
  )
}

export default CardContainer
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import {makeStyles} from '@mui/styles'
import {Request} from '@prisma/client'
import { FeedbackCard } from '../FeedbackView/FeedbackCard';
interface RoadmapViewProps {
  requests: Request[]
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const useStyles = makeStyles((theme) => ({
  tabStyle: {
    '& .Mui-selected': {
      color: '#000 !important',
      fontWeight: 700
    },
    '& .MuiTab-textColorInherit': {
      color: theme.palette.success.main,
      fontWeight: 700
    },
    '& .MuiTabs-indicator': {
      height: '4px'
    }
  }
}));

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function RoadmapMobileView({requests}: RoadmapViewProps) {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const planned = requests.filter(request=> {
    if (request.status === 'Planned') return request
  })

  const inProgress = requests.filter(request=> {
    if (request.status === 'In-Progress') return request
  })

  const live = requests.filter(request=> {
    if (request.status === 'Live') return request
  })

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          centered variant="fullWidth"
          textColor="inherit"
          className={classes.tabStyle}
        >
          <Tab className={classes.tabStyle} label={`Planned (${planned.length})`} {...a11yProps(0)} sx={{textTransform: 'none'}} disableRipple/>
          <Tab className={classes.tabStyle} label={`In-Progress (${inProgress.length})`} {...a11yProps(1)} sx={{textTransform: 'none'}} disableRipple/>
          <Tab className={classes.tabStyle} label={`Live (${live.length})`} {...a11yProps(2)} sx={{textTransform: 'none'}} disableRipple/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {planned.map(item=> {
          return(
            <FeedbackCard request={item} />
          )
        })}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {inProgress.map(item=> {
          return(
            <FeedbackCard request={item} />
          )
        })}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {live.map(item=> {
          return(
            <FeedbackCard request={item} />
          )
        })}
      </TabPanel>
    </Box>
  );
}

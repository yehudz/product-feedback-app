import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import {makeStyles} from '@mui/styles'

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

export default function RoadmapMobileView() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // Dummy data
  const planned = 2
  const inProgress = 3
  const live = 1
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
          <Tab className={classes.tabStyle} label={`Planned (${planned})`} {...a11yProps(0)} sx={{textTransform: 'none'}} disableRipple/>
          <Tab className={classes.tabStyle} label={`In-Progress (${inProgress})`} {...a11yProps(1)} sx={{textTransform: 'none'}} disableRipple/>
          <Tab className={classes.tabStyle} label={`Live (${live})`} {...a11yProps(2)} sx={{textTransform: 'none'}} disableRipple/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}

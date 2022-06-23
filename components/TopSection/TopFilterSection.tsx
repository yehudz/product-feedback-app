import { Box } from "@mui/material"
import CategoryFiltersPanel from "../CategoryFiltersPanel/CategoryFiltersPanel"

export const TopFilterSection = ()=> {
  return(
    <Box height={'100%'}>
      <CategoryFiltersPanel />
    </Box>
  )
}
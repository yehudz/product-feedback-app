import { Grid } from "@mui/material"
import CategoryButton from "../buttons/CategoryButton"
import PanelStyles from '../../../styles/Panel.module.scss'
import appContext from "../../context/appContext"
import { useContext, useEffect, useState } from "react"
const CategoryFiltersPanel = ()=> {
  const {selectedPanelFilterOption, setSelectedPanelFilterOption} = useContext(appContext)
  const filtersMenu = [
      {name: 'All', selected: true}, 
      {name: 'UI', selected: false}, 
      {name: 'UX', selected: false}, 
      {name: 'Enhancement', selected: false}, 
      {name: 'Bug', selected: false}, 
      {name: 'Feature', selected: false}
    ]
    
  // Sets the menu for category filter panel
  const [menu, setMenu] = useState(filtersMenu)

  function selectOption(index: number) {
    setSelectedPanelFilterOption(index)
    let updatedMenu = filtersMenu.map((filter, i)=> {
      if (i === index) return {
        name: filter.name,
        selected: true
      }
      return {
        name: filter.name,
        selected: false
      }
    })
    setMenu(updatedMenu)
  }

  useEffect(()=> {
    if (!selectedPanelFilterOption) return
    selectOption(selectedPanelFilterOption)
  }, [])

  return(
    <Grid container className={PanelStyles.container} gap={1.5}>
      {menu?.map((filter, i)=> {
        return(
          <Grid item key={filter?.name}>
            <CategoryButton 
              className={filter?.selected === true ? 'active' : ''} 
              onClick={()=> selectOption(i)}
            >
              {filter?.name}
            </CategoryButton>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default CategoryFiltersPanel
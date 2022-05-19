import { Typography } from "@mui/material"
import MobileNavStyles from '../../../styles/MobileNavStyles.module.scss'
import DropDownMenu from "../DropDownMenu"
import PrimaryButton from "../buttons/PrimaryButton"
import { Plus } from "phosphor-react"

export const MobileOptionsMenu = ()=> {
  const menuItems = ['Most Upvotes', 'Least Upvotes', 'Most Comments', 'Least Comments']
  return (
    <div className={MobileNavStyles.optionsMenuContainer}>
      <DropDownMenu menuItems={menuItems} sortDropdown={true} mobile={true}/>
      <PrimaryButton variant="contained" startIcon={<Plus size={14} weight="bold"/>}>Add Feedback</PrimaryButton>
    </div>
  )
}
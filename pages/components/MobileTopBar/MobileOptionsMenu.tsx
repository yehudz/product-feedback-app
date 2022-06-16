import MobileNavStyles from '../../../styles/MobileNavStyles.module.scss'
import DropDownMenu from "../DropDownMenu"
import PrimaryButton from "../buttons/PrimaryButton"
import Link from 'next/link'
const MobileOptionsMenu = ()=> {
  const menuItems = ['Most Upvotes', 'Least Upvotes', 'Most Comments', 'Least Comments']
  return (
    <div className={MobileNavStyles.optionsMenuContainer}>
      <DropDownMenu menuItems={menuItems} sortDropdown={true} mobile={true}/>
      <Link href='/createNewFeedback' passHref>
        <PrimaryButton 
          variant="contained" 
          sx={{height: '40px', width: '135px', fontSize: '13px'}}
        >
          + Add Feedback
        </PrimaryButton>
      </Link>
    </div>
  )
}

export default MobileOptionsMenu
import MobileNavMenuStyles from '../../../styles/MobileNavMenu.module.scss';
import { CategoryFiltersPanel } from '../CategoryFiltersPanel/CategoryFiltersPanel';
const MobileNavMenu = ()=> {
  return(
    <div className={MobileNavMenuStyles.container}>
      <div className={MobileNavMenuStyles.wrapper}>
        <CategoryFiltersPanel />
      </div>
      <div className={MobileNavMenuStyles.overlay}></div>
    </div>
  )
}

export default MobileNavMenu
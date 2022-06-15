import MobileNavMenuStyles from '../../../styles/MobileNavMenu.module.scss';
import { CategoryFiltersPanel } from '../CategoryFiltersPanel/CategoryFiltersPanel';
import { RoadmapPanel } from '../RoadmapPanel/RoadmapPanel';
const MobileNavMenu = ()=> {
  return(
    <div className={MobileNavMenuStyles.container}>
      <div className={MobileNavMenuStyles.wrapper}>
        <CategoryFiltersPanel />
        <RoadmapPanel />
      </div>
      <div className={MobileNavMenuStyles.overlay}></div>
    </div>
  )
}

export default MobileNavMenu
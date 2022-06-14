import MobileNavMenuStyles from '../../../styles/MobileNavMenu.module.scss';

const MobileNavMenu = ()=> {
  return(
    <div className={MobileNavMenuStyles.container}>
      <div className={MobileNavMenuStyles.wrapper}></div>
      <div className={MobileNavMenuStyles.overlay}></div>
    </div>
  )
}

export default MobileNavMenu
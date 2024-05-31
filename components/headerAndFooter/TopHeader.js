import DateAndTime from "./TopHeaderComponents/DateAndTime";
import SocialIcons from "./TopHeaderComponents/SocialIcons";
import Fatiha from "./TopHeaderComponents/Fatiha";
import styles from '../../styles/components/headerAndFooter/TopHeader.module.scss';

const TopHeader = () => (
  <div className={`container-fluid ${styles.topHeader}`}>
<div className={`row d-flex justify-content-center align-items-center ${styles.row}`}>
      <div className="col-12 col-sm-6 col-md-3 d-none d-lg-block">
        <DateAndTime />
      </div>
      <div className="col-12 col-md-6">
        <Fatiha />
      </div>
      <div className="col-12 col-sm-6 col-md-3 d-none d-lg-block">
        <SocialIcons />
      </div>
    </div>
  </div>
);

export default TopHeader;

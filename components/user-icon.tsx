import styles from "./user-icon.module.css";
import utilStyles from "../styles/utils.module.css";
export default function UserIcon() {
  return (
    <img
      src="/images/profile.jpg"
      className={`${styles.profileImage} ${utilStyles.borderCircle}`}
      alt="Gabe O'Leary"
    />
  );
}

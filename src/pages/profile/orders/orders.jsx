
import ProfileNav from '../components/profile-nav/profile-nav';
import styles from '../profile.module.scss';

function OrdersPage() {
  return (
    <div className={styles.container}>
      <ProfileNav/>
      <div className="text text_type_main-large">
        Здесь будут ваши заказы
      </div>
    </div>
  );
}

export default OrdersPage;
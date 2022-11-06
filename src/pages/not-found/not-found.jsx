// eslint-disable-next-line
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import notFoundGif from '../../images/not-found.gif';
import styles from './not-found.module.scss';

function NotFoundPage() {
  return (
    <div className={styles.content}>
      <img className={styles.image} src={notFoundGif} alt="404" />
      <div className={styles.description}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.text}>Ты не должен здесь быть</p>
        <Link to="/">
          <Button type="primary" size="medium">
            Вернуться на главную
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
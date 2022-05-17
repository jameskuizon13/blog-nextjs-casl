import styles from './index.module.css';

const Header = () => {
  return (
    <header className={styles.container}>
      <strong>Blogs</strong>

      <button>Login</button>
    </header>
  );
};

export default Header;

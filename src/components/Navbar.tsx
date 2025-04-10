import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Guia Ejercicios</div>
      <div className={styles.links}>
        <Link href="/">Inicio</Link>
        <Link href="/espalda">Espalda</Link>
        <Link href="/pectorales">Pectorales</Link>
        <Link href="/pierna">Pierna</Link>
        {/* Agrega más grupos musculares según sea necesario */}
      </div>
    </nav>
  );
};

export default Navbar;
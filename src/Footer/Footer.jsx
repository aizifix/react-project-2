import styles from './Footer.module.css'

function Footer() {

  const leftFooters = [
    { id: 1, value: "About", href: "#" },
    { id: 2, value: "Advertising", href: "#" },
    { id: 3, value: "Business", href: "#" },
    { id: 4, value: "How Search Works", href: "#" },
  ];

  const rightFooters = [
    { id: 1, value: "Privacy", href: "#" },
    { id: 2, value: "Terms", href: "#" },
    { id: 3, value: "Settings", href: "#" },
  ];

  const a = {
    fontSize: "0.9rem",
  };

  return (
    <>

      <footer className={styles.footer}>
        <div className={styles.topFooter}>
          <p style={a}>Practice 2</p>
        </div>
        <div className={styles.bottomFooter}>
          <ul className={styles.leftUl}>
            {leftFooters.map((leftFooter, index) => (
              <li key={leftFooter.id}>
                <a className={styles.a} href={leftFooter.href}>{leftFooter.value}</a>
              </li>
            ))}
          </ul>
          <ul className={styles.rightUl}>
            {rightFooters.map((rightFooter, index) => (
              <li key={rightFooter.id}>
                <a className={styles.a} href={rightFooter.href}>{rightFooter.value}</a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer
import styles from './Button.module.css'

function Button() {

  const buttons = [
    {
      id: 1,
      value: "Google Search",
      href: "#"
    },
    {
      id: 2,
      value: "I'm Feeling Lucky",
      href: "#"
    },
  ];

  const subButtons = [
    {
      id: 1,
      value: "Filipino",
      href: "#",
    },
    {
      id: 2,
      value: "Cebuano",
      href: "#",
    }

  ];

  const buttonContainer = {
    display: "flex",
    marginTop: "2.5rem",
  };

  return (
    <>
      <div>
        <ul style={buttonContainer}>
          {buttons.map((button, index) => (
            <li key={button.id}>
              <a className={styles.button} href="#">
                {button.value}
              </a>
            </li>
          ))}
        </ul>
        <ul>
          <p className={styles.subContainer}>
            Google offered in:
            {subButtons.map((subButton, index) => (
              <span className={styles.spanArea} key={subButton.id}>
                <a className={styles.a} href={subButton.href}>{subButton.value}</a>
              </span>
            ))}
          </p>
        </ul>
      </div>
    </>
  );

}

export default Button;
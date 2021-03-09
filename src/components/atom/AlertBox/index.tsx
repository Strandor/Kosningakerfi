import styles from "./AlertBox.module.css";

export const AlertBox = () => {
  return (
    <div className={styles.outer}>
      <h3>✅ Við höfum sent þetta inn</h3>
      <p>Þú ert einu skrefi nær. Við höfum vistað gögnin fyrir kosningar</p>
    </div>
  );
};

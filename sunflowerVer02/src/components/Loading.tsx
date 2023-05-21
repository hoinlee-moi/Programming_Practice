import styles from "../styles/loading.module.css";
const Loading = () => {
  return (
    <div className={styles.ListLoading}>
      <svg>
        <circle cx="50%" cy="50%" r="25"></circle>
      </svg>
    </div>
  );
};
export default Loading;

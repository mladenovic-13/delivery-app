import styles from "../../styles/Add.module.css";

const AddButton = ({ setClose }) => {
  return (
    <div onClick={(e) => setClose(false)} className={styles.mainAddButton}>
      ADD NEW PIZZA
    </div>
  );
};

export default AddButton;

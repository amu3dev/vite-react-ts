import styles from "./NewButton.module.css";

interface ButtonProps {
  type?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  children: React.ReactNode;
  onClick: () => void;
}

const NewButton = ({ type, children, onClick }: ButtonProps) => {
  return (
    <div>
      <button className={[styles.btn, [type]].join(" ")} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default NewButton;

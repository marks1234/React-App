import styles from "./Button.module.css";

interface Props {
	children: string;
	colour?: "primary" | "secondary" | "danger" | "white";
	onClick?: () => void;
}

const Button = ({ children, onClick, colour = "danger" }: Props) => {
	return (
		<button
			className={[styles.btn, styles.button, styles["btn-" + colour]].join(" ")}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import styles from "./Like.module.css";
import { useState } from "react";

interface Props {
	onLike: () => void;
}

const Like = ({ onLike }: Props) => {
	const [state, setState] = useState(true);


	return (
		<button
			className={[styles["invisible-button"]].join("")}
			onClick={() => {
				onLike();
				return state ? setState(false) : setState(true);
			}}
		>
			{state ? (
				<AiOutlineHeart size={40} />
			) : (
				<AiFillHeart size={40} color='red' />
			)}
		</button>
	);
};

export default Like;

import { useState } from "react";
import "./ListGroup.css";
import styles from "./ListGroup.module.css";
import styled from "styled-components";

console.log(styles);

const List = styled.ul`
	list-style: none;
	padding: 50px;
	background-color: yellow;
`;

interface ListItemProps {
	active: boolean;
}

const ListItem = styled.li<ListItemProps>`
	border-style: dotted;
	background: ${(props) => (props.active ? "blue" : "none")};
	cursor: pointer;
`;

// {items: [] heading :string}
interface Props {
	items: string[];
	heading: string;
	// (item: string) => void
	onSelectItem?: (item: string) => void;
}

const ListGroup = (props: Props) => {
	const { items, heading, onSelectItem } = props;

	// Hook
	const [selectedIndex, setSelectedIndex] = useState(-10);
	// const arr = useState(-1);
	// arr[0] // variable (selectedIndex)
	// arr[1] // updater function

	return (
		<>
			<h1>
				{heading}: {items[selectedIndex]}
			</h1>
			{/* {items.length === 0 ? <p>No Items found</p> : null} */}
			{items.length === 0 && <p>No Items found</p>}
			{/* <ul className={[styles.listGroup, styles.container].join(" ")}> */}
			<List>
				{items.map((value, index) => (
					<ListItem
						active={index === selectedIndex}
						key={index}
						// className={
						// 	selectedIndex === index
						// 		? "list-group-item active"
						// 		: "list-group-item"
						// }
						onClick={() => {
							setSelectedIndex(index);
						}}
					>
						{value}
					</ListItem>
				))}
			</List>
		</>
	);
};

export default ListGroup;

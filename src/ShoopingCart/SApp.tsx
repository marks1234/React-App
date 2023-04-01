import ShoppingForm from "./components/ShoppingForm";
import ShoppingResults from "./components/ShoppingResults";
import { useState } from "react";
import produce from "immer";
import ShoppingFilter from "./components/ShoppingFilter";

interface FormData {
	description: string;
	amount: number;
	category: string;
}

const SApp = () => {
	const [mockArray, setMockArray] = useState([
		{
			description: "Museum tickets",
			amount: 15,
			category: "Entertainment",
		},
		{ description: "Apples", amount: 3, category: "Grocery" },
		{ description: "Trash bill", amount: 20, category: "Utility" },
		{
			description: "Sports event tickets",
			amount: 45,
			category: "Entertainment",
		},
		{ description: "Tomatoes", amount: 3, category: "Grocery" },
		{ description: "Cable bill", amount: 60, category: "Utility" },
		{
			description: "Amusement park tickets",
			amount: 35,
			category: "Entertainment",
		},
	]);
	const [category, setCategory] = useState("all categories");

	const handleDelete = (item: FormData) => {
		setMockArray(
			produce((draft) => {
				const mock = mockArray.indexOf(item);
				draft.splice(mock, 1);
			})
		);
	};

	const handleAdd = (item: FormData) => {
		console.log(item);
		setMockArray(
			produce((draft) => {
				draft.push(item);
			})
		);
	};

	const onSelectCategory = (data: string) => setCategory(data);

	return (
		<>
			<ShoppingForm addItem={handleAdd} />
			<ShoppingFilter onSelectCategory={onSelectCategory} />
			<ShoppingResults
				itemsArray={mockArray}
				category={category}
				onDelete={handleDelete}
			/>
		</>
	);
};

export default SApp;

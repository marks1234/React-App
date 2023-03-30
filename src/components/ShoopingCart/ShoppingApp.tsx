import ShoppingForm from "./ShoppingForm";
import ShoppingResults from "./ShoppingResults";
import { useState } from "react";
import produce from "immer";
import { z } from "zod";

const mySchema = z.object({
	description: z.string(),
	amount: z.number(),
	category: z.string(),
});

type FormData = z.infer<typeof mySchema>;

const ShoppingApp = () => {
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

	return (
		<>
			<ShoppingForm addItem={handleAdd} />
			<ShoppingResults
				itemsArray={mockArray}
				category={category}
				setCategory={setCategory}
				onDelete={handleDelete}
			/>
		</>
	);
};

export default ShoppingApp;

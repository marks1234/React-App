import { useForm } from "react-hook-form";

interface Props {
	onSelectCategory: (data: string) => void;
}

const ShoppingFilter = ({ onSelectCategory }: Props) => {
	const { register, handleSubmit } = useForm();

	return (
		<div>
			<select
				{...register("categories", {
					onChange: handleSubmit((data) => onSelectCategory(data.categories)),
				})}
				defaultValue='All Categories'
				className='form-select mt-4'
				id='category'
			>
				<option value={"all categories"}>All Categories</option>
				<option value={"Grocery"}>Grocery</option>
				<option value={"Utility"}>Utility</option>
				<option value={"Entertainment"}>Entertainment</option>
			</select>
		</div>
	);
};

export default ShoppingFilter;

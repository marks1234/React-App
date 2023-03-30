import React from "react";
import { z } from "zod";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
	description: z.string().trim(),
	amount: z.number().positive(),
	category: z
		.string()
		.trim()
		.refine((check) => check !== "Choose..."),
});

type FormData = z.infer<typeof schema>;

interface Props {
	addItem: (item: FormData) => void;
}

const ShoppingForm = ({ addItem }: Props) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { isValid },
	} = useForm<FormData>({ resolver: zodResolver(schema) });

	const onSubmit = (data: FormData) => {
		addItem(data);
		reset();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label htmlFor='description' className='form-label'>
					Description
				</label>
				<input
					{...register("description")}
					id='description'
					type='text'
					className='form-control'
				/>
			</div>
			<div>
				<label htmlFor='amount' className='form-label'>
					Amount
				</label>
				<input
					{...register("amount", { valueAsNumber: true })}
					id='amount'
					type='text'
					className='form-control'
				/>
			</div>
			<div>
				<label htmlFor='category' className='form-label'>
					Category
				</label>
				<select
					{...register("category")}
					defaultValue='Choose...'
					className='form-select'
					id='category'
				>
					<option>Choose...</option>
					<option value={"Grocery"}>Grocery</option>
					<option value={"Utility"}>Utility</option>
					<option value={"Entertainment"}>Entertainment</option>
				</select>
			</div>
			<button
				disabled={!isValid}
				className='btn btn-primary mt-2'
				type='submit'
			>
				{}
				Submit
			</button>
		</form>
	);
};

export default ShoppingForm;

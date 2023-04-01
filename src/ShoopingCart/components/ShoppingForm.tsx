import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
	description: z
		.string({ required_error: "Has to have any description" })
		.trim()
		.min(3, { message: "Has to have at least 3 Characters" }),
	amount: z
		.number({ invalid_type_error: "Has to be a number!" })
		.positive({ message: "Has to be a positive number!" }),
	category: z
		.string()
		.trim()
		.refine((check) => check !== "Choose...", {
			message: "Choose... is not a valid category!",
		}),
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
		formState: { errors, isValid },
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
					{...register("description"), {}}
					id='description'
					type='text'
					className='form-control'
				/>
				{errors.description && (
					<p className='text-danger'>{errors.description?.message}</p>
				)}
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
				{errors.amount && (
					<p className='text-danger'>{errors.amount?.message}</p>
				)}
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
				{errors.category && (
					<p className='text-danger'>{errors.category.message}</p>
				)}
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

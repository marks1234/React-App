import React, { useState } from "react";
import { produce } from "immer";
import { useForm } from "react-hook-form";

const Form = () => {
	const { register } = useForm();
	console.log(register("name"));

	const [person, setPerson] = useState({
		name: "",
		age: 0,
	});

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				console.log(person);
			}}
		>
			<div className='mb-3'>
				<label htmlFor='name' className='form-label'>
					Name
				</label>
				<input
					onChange={(event) =>
						setPerson(
							produce((draft) => {
								draft.name = event.target.value;
							})
						)
					}
					value={person.name}
					id='name'
					type='text'
					className='form-control'
				/>
			</div>
			<div className='mb-3'>
				<label htmlFor='age' className='form-label'>
					Age
				</label>
				<input
					onChange={(event) =>
						setPerson(
							produce((draft) => {
								draft.age = +event.target.value;
							})
						)
					}
					value={person.age}
					id='age'
					type='number'
					className='form-control'
				/>
			</div>
			<button className='btn btn-primary' type='submit'>
				Submit
			</button>
		</form>
	);
};

export default Form;

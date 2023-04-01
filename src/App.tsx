import React from "react";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import ProductList from "./components/ProductList(useEffect)";

interface User {
	id: number;
	name: string;
}

const App = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [err, setErr] = useState<string>();

	useEffect(() => {
		// const fetchUsers = async () => {
		// 	try {
		// 		const res = await axios.get<User[]>(
		// 			"https://jsonplaceholder.typicode.com/users"
		// 		);
		// 		setUsers(res.data);
		// 	} catch (err) {
		// 		setErr((err as AxiosError).message);
		// 	}
		// };

		// fetchUsers();
		// get -> promise -> res / err
		const controller = new AbortController();

		axios
			.get<User[]>("https://jsonplaceholder.typicode.com/users", {
				signal: controller.signal,
			})
			.then((res) => setUsers(res.data))
			.catch((err) => setErr(err));

		return () => controller.abort();
	}, []);

	return (
		<>
			{err ? (
				<p className='text-danger'>{err}</p>
			) : (
				<ul>
					{users.map((user) => (
						<li key={user.id}>
							<p>{user.name}</p>
						</li>
					))}
				</ul>
			)}
		</>
	);
};

export default App;

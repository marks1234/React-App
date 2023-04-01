import { z } from "zod";

const schema = z.array(
	z.object({
		description: z.string(),
		amount: z.number(),
		category: z.string(),
	})
);

type ItemsArray = z.infer<typeof schema>;

interface Product {
	description: string;
	amount: number;
	category: string;
}

interface Props {
	itemsArray: ItemsArray;
	category: string;
	onDelete: (id: Product) => void;
}

const ShoppingResults = ({ itemsArray, category, onDelete }: Props) => {
	const filteredTable = () => {
		if (category === "all categories") return itemsArray;
		return itemsArray.filter((item) => item.category === category);
	};

	const renderIntoMoney = (num: number) => {
		let formatting_options = {
			style: "currency",
			currency: "GBP",
			mimimumFractionDigits: 3,
		};
		let poundString = new Intl.NumberFormat("en-GB", formatting_options);
		return poundString.format(num);
	};

	const renderTable = () =>
		filteredTable().map((product, index) => {
			return (
				<tr key={index}>
					<td>{product.description}</td>
					<td>{renderIntoMoney(product.amount)}</td>
					<td>{product.category}</td>
					<td style={{ width: "5%" }}>
						<button
							onClick={() => onDelete(product)}
							className='btn btn-outline-danger p-1'
						>
							Delete
						</button>
					</td>
				</tr>
			);
		});

	return (
		<>
			<div>
				<table className='table table-bordered mt-1'>
					<thead>
						<tr>
							<th scope='col'>Description</th>
							<th scope='col'>Amount</th>
							<th scope='col'>Category</th>
							<th scope='col'></th>
						</tr>
					</thead>
					<tfoot>
						{renderTable()}
						<tr>
							<th>Total</th>
							<th colSpan={3}>
								{renderIntoMoney(
									filteredTable().reduce(
										(prevValue, presValue) => (prevValue += presValue.amount),
										0
									)
								)}
							</th>
						</tr>
					</tfoot>
				</table>
			</div>
		</>
	);
};

export default ShoppingResults;

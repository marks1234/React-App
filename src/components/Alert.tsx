import { ReactNode } from "react";

interface Props {
	// text: string;
	// ReactNode LETS US PASS MULTIPLE CHILDREN
	children?: ReactNode;
	onClose: () => void;
}

const Alert = ({ children,onClose }: Props) => {
	return (
		<div
			className='alert alert-primary alert-dismissible fade show'
			role='alert'
		>
			<strong>{children}!</strong> You should check in on some of those
			fields below.
			<button
				onClick={onClose}
				type='button'
				className='btn btn-close'
				data-bs-dismiss='alert'
				aria-label='Close'
			></button>
		</div>
	);
};

export default Alert;

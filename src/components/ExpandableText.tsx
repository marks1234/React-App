import { useState } from "react";
import Button from "./Button";
import { ReactNode } from "react";

interface Props {
	children: string[] | string;
	maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
	const [extendState, setExtendState] = useState(false);

	if (typeof children === "string" && children.length < maxChars) {
		return <p>{children}</p>;
	}

	const renderChildren = () => {
		if (typeof children === "string") return <p>{children}</p>;
		if (extendState) return children.map((value, i) => <p key={i}>{value}</p>);
		else return <p>{children.join("").slice(0, maxChars) + "..."}</p>;
	};

	return (
		<div>
			{renderChildren()}{" "}
			<Button onClick={() => setExtendState(!extendState)} colour='white'>
				{extendState ? "Less" : "More"}
			</Button>
		</div>
	);
};

{/* <ExpandableText maxChars={99}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id sapien
				molestie, pharetra dolor non, finibus lectus. Vivamus eleifend vitae leo
				et ullamcorper. Proin posuere cursus enim, nec dapibus erat dictum ut.
				Pellentesque vitae justo arcu. Aenean egestas massa vitae gravida
				molestie. Integer imperdiet non sem sed eleifend. Duis lobortis maximus
				convallis. Maecenas eu nulla nec elit commodo rhoncus. Donec ut dolor ac
				leo suscipit vestibulum. Suspendisse varius vestibulum urna, id mollis
				ligula vestibulum non. Quisque aliquam urna sit amet scelerisque
				maximus. Quisque leo odio, fringilla vitae aliquam et, fringilla
				pulvinar urna. Aenean non euismod lectus.
				{}
				Vivamus lacinia sapien sed elit condimentum finibus. Curabitur et
				iaculis ex. Etiam eu lacus ex. Aenean at vulputate sapien. Vivamus
				aliquet odio hendrerit nulla mollis bibendum. In ac nunc dui. Nunc nisl
				est, accumsan eu imperdiet posuere, suscipit ut odio. Donec eget viverra
				purus, a maximus mi. Donec risus dolor, accumsan in eros ut, rhoncus
				aliquam nisl. Vestibulum ante ipsum primis in faucibus orci luctus et
				ultrices posuere cubilia curae; Aliquam ut est eros. Sed ut velit
				euismod, facilisis elit sed, porta metus. Aliquam erat volutpat.
				Suspendisse in venenatis arcu. Sed sed lectus a erat porta sollicitudin.
				{}
				Curabitur ultricies volutpat risus at bibendum. Proin sagittis blandit
				condimentum. Nulla facilisi. Sed vestibulum tincidunt lobortis. Nullam
				feugiat diam tellus, id condimentum turpis convallis in. Orci varius
				natoque penatibus et magnis dis parturient montes, nascetur ridiculus
				mus. Morbi neque risus, laoreet nec accumsan quis, ultrices eget felis.
				Curabitur consectetur orci et nunc volutpat, ac sodales velit vulputate.
				{}
				Nam eu posuere nulla. Vivamus vel lorem maximus lacus hendrerit tempus.
				Praesent placerat, risus id suscipit cursus, ex velit bibendum turpis,
				sed blandit augue risus at elit. Nulla scelerisque eget nisl eu
				fringilla. Donec rutrum tempor faucibus. Maecenas vel vehicula augue,
				vitae rutrum diam. Suspendisse elementum vitae orci vel ultricies.
				Quisque non erat venenatis, pellentesque risus ut, faucibus libero.
				Nulla feugiat tempus leo ut suscipit. Proin a leo diam. Fusce orci orci,
				scelerisque in bibendum quis, gravida sit amet eros. Aliquam non justo
				cursus, laoreet arcu ac, venenatis nulla. Pellentesque habitant morbi
				tristique senectus et netus et malesuada fames ac turpis egestas. Nulla
				facilisi. Proin in diam orci. Nulla facilisis, massa ac condimentum
				interdum, urna ipsum placerat est, vitae vestibulum purus tellus ac
				nulla.
			</ExpandableText> */}

export default ExpandableText;

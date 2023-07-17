export default function (props: { className?: string; children: any }) {
	return (
		<li className={`w-fit ${props.className}`}>
			<a href="#">{props.children}</a>
		</li>
	);
}

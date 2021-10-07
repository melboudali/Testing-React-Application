import { Container } from "react-bootstrap";
import Todo from "../../components/Todo/Todo";

export default function TodoPage() {
	return (
		<div>
			<Container fluid>
				<Todo />
			</Container>
		</div>
	);
}

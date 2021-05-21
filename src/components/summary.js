import styles from "./global.module.css";
import React, { useState } from "react";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";

import Header from "./header";

const TableRow = ({ data, idx }) => {
	let tax_ = (data.price / 100) * data.tax_pct;
	const [cellData, setCellData] = useState({
		...data,
		tax: tax_,
		total: (data.price + tax_) * data.quantity,
	});

	const increment = () => {
		let new_q = cellData.quantity + 1;
		setCellData({
			...cellData,
			quantity: new_q,
			total: (data.price + tax_) * new_q,
		});
	};
	const decrement = () => {
		let new_q = cellData.quantity - 1;
		setCellData({
			...cellData,
			quantity: new_q,
			total: (data.price + tax_) * new_q,
		});
	};

	return (
		<>
			<tr>
				<td>{idx}</td>
				<td>{cellData.name}</td>
				<td>{cellData.category}</td>
				<td>{`${cellData.price} ${cellData.currency}`}</td>
				<td>{`${cellData.tax} ${cellData.currency}`}</td>
				<td>
					<span style={{ cursor: "pointer" }} onClick={() => decrement()}>
						-
					</span>{" "}
					{cellData.quantity}{" "}
					<span style={{ cursor: "pointer" }} onClick={() => increment()}>
						+
					</span>
				</td>
				<td>{`${cellData.total} ${cellData.currency}`}</td>
			</tr>
		</>
	);

	// data.total = data
};

const SummaryComponent = ({ user, summary }) => {
	return (
		<>
			<Header />
			<Container className={styles.container}>
				<h1>Order Summary</h1>
				<Row style={{ marginTop: `2rem` }}>
					<Col sm={12} md={9}>
						<Card className={styles.card}>
							<Card.Body>
								<Card.Title>
									<h2 style={{ textDecoration: `underline` }}>
										Restaurant Details
									</h2>
								</Card.Title>

								{summary.order && (
									<>
										<Row style={{ margin: `1.5rem auto` }}>
											<Col sm={3} md={{ span: 3, offset: 2 }}>
												<h5 style={{ color: "#a9b8c4" }}>Name:</h5>
											</Col>
											<Col>
												<h5>{summary.order.restaurant.name}</h5>
											</Col>
										</Row>
										<Row style={{ margin: `1.5rem auto` }}>
											<Col sm={3} md={{ span: 3, offset: 2 }}>
												<h5 style={{ color: "#a9b8c4" }}>Street:</h5>
											</Col>
											<Col>
												<h5>{summary.order.restaurant.street}</h5>
											</Col>
										</Row>
										<Row style={{ margin: `1.5rem auto` }}>
											<Col sm={3} md={{ span: 3, offset: 2 }}>
												<h5 style={{ color: "#a9b8c4" }}>City:</h5>
											</Col>
											<Col>
												<h5>{summary.order.restaurant.city}</h5>
											</Col>
										</Row>
										<Row style={{ margin: `1.5rem auto` }}>
											<Col sm={3} md={{ span: 3, offset: 2 }}>
												<h5 style={{ color: "#a9b8c4" }}>State:</h5>
											</Col>
											<Col>
												<h5>{summary.order.restaurant.state}</h5>
											</Col>
										</Row>
										<Row style={{ margin: `1.5rem auto` }}>
											<Col sm={3} md={{ span: 3, offset: 2 }}>
												<h5 style={{ color: "#a9b8c4" }}>Zip Code:</h5>
											</Col>
											<Col>
												<h5>{summary.order.restaurant.zipcode}</h5>
											</Col>
										</Row>
									</>
								)}
							</Card.Body>
						</Card>

						<Card className={`${styles.card} my-5 my-md-5`}>
							<Card.Body>
								<Card.Title>
									<h3 style={{ textDecoration: "underline" }}>Order Details</h3>
								</Card.Title>
								<div>
									<Table
										responsive
										hover
										style={{
											backgroundColor: `rgba(255,255,255,0.1)`,
											color: "azure",
											fontSize: `1.2rem`,
										}}
									>
										{summary.order && (
											<tbody>
												<tr>
													<th>#</th>
													<th>Name</th>
													<th>Category</th>
													<th>Price</th>
													<th>Tax </th>
													<th>Quantity</th>
													<th>Total</th>
												</tr>
												{summary.order.items.map((item, idx) => {
													return <TableRow key={idx} data={item} idx={idx} />;
												})}
											</tbody>
										)}
									</Table>
								</div>
							</Card.Body>
						</Card>
					</Col>
					<Col sm={12} md={3} className={`pd-5`}>
						<Card className={`${styles.card} my-5 my-md-0`}>
							<Card.Img variant="top" src="myAvatar.svg" />
							<Card.Body>
								<Card.Title>{user.name}</Card.Title>
								<Card.Subtitle className="mb-2" style={{ color: "#a9b8c4" }}>
									{user.phone}
								</Card.Subtitle>
								<Card.Text>{user.address}.</Card.Text>
								<Button variant="primary">Procees to Checkout</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default SummaryComponent;

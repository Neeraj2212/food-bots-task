import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "./profile.module.css";
const Header = () => {
	return (
		<div>
			<Navbar
				variant="dark"
				style={{ padding: `1rem` }}
				className={styles.header}
			>
				<Container>
					<Navbar.Brand href="/">FOOD BOTS</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link href="/profile">Profile</Nav.Link>
						<Nav.Link href="/summary">Summary</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;

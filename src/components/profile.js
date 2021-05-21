import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./global.module.css";
import Header from "./header";

const ProfileComponent = ({ user }) => {
	return (
		<div>
			<Header />
			<Container className={styles.container}>
				<Row>
					<Col sm={12} md={6} style={{ padding: `1rem` }}>
						<div
							style={{ height: `100%` }}
							className={`${styles.pic} ${styles.col}`}
						>
							<img
								src={"/myAvatar.svg"}
								alt="avatar"
								className={`img-fluid ${styles.avatar}`}
							/>
							<h3 style={{ marginTop: `1.5rem` }}>{user.name}</h3>
						</div>
					</Col>
					<Col sm={12} md={6} style={{ padding: `1rem` }}>
						<div style={{ height: `100%` }} className={styles.col}>
							<div style={{ borderLeft: `8px solid white `, padding: `1rem` }}>
								<em style={{ fontSize: "2rem" }}>"{user.about}"</em>
							</div>

							<div className={styles.about}>
								<p>
									<i className="fa fa-phone fa-lg"></i> {user.phone}
								</p>
								<p>
									<i className="fa fa-home fa-lg"></i> {user.address}
								</p>
							</div>
						</div>
					</Col>
				</Row>
				<Row className={styles.secondRow}>
					<Col
						sm={12}
						md={6}
						style={{
							paddingTop: `1rem`,
						}}
					>
						<div className={styles.col}>
							<h3 style={{ textDecoration: `underline` }}>Likes</h3>
							{user.likes &&
								user.likes.map((like) => {
									return (
										<span
											className={`badge rounded-pill bg-primary `}
											style={{ fontSize: `1.5rem`, margin: `5px` }}
										>
											{like}
										</span>
									);
								})}
						</div>
					</Col>
					<Col
						sm={12}
						md={6}
						style={{
							paddingTop: `1rem`,
						}}
					>
						<div className={styles.col}>
							<h3 style={{ textDecoration: `underline` }}>Dislikes</h3>
							{user.dislikes &&
								user.dislikes.map((dislike) => {
									return (
										<span
											className={`badge rounded-pill bg-danger `}
											style={{ fontSize: `1.5rem`, margin: `5px` }}
										>
											{dislike}
										</span>
									);
								})}
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default ProfileComponent;

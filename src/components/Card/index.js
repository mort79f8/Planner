import React, { useRef, useState } from "react";
import DeleteCard from "../DeleteCard";
import styles from "./styles.module.css";

function Card({ card,cards,setCards }) {
	const [offset, _setOffset] = useState({ x: 0, y: 0 });
	const [pos, setPos] = useState({ x: card.position.x, y: card.position.y });
	const cardRef = useRef(null);

	const offsetRef = useRef(offset);
	const setOffset = (data) => {
		offsetRef.current = data;
		_setOffset(data);
	};

	const drag = (e) => {
		document.addEventListener("mouseup", () =>
			document.removeEventListener("mousemove", drag)
		);
		const cardRect = cardRef.current.getBoundingClientRect();

		let x = e.clientX - offsetRef.current.x;
		let y = e.clientY - offsetRef.current.y;

		let wHeight = Math.floor(window.innerHeight);
		let wWidth = Math.floor(window.innerWidth);
		let cHeight = cardRect.height;
		let cWidth = cardRect.width;

		if (y < 60) y = 60;
		else if (y + cHeight > wHeight) y = wHeight - cHeight - 1;

		if (x < 100) x = 100;
		else if (x + cWidth > wWidth) x = wWidth - cWidth - 1;

		setPos({
			x: x,
			y: y,
		});

		let tempCards = cards
		let tempCard = tempCards.find(c => c.id === card.id)
		tempCard.position.x = x
		tempCard.position.y = y
		setCards(tempCards)
	};

	return (
		<div
			className={styles.card}
			ref={cardRef}
			style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
			onMouseDown={(e) => {
				if (e.button === 0) {
					setOffset({ x: e.clientX - pos.x, y: e.clientY - pos.y });
					drag(e)
					document.addEventListener("mousemove", drag);
				}
			}}
		>
			<h1 className={styles.header}>{card.header}</h1>
			{card.elements.map((element, index) => {
				let Tag = element.tag;
				return <Tag key={index}>{element.content}</Tag>
			})}
			<DeleteCard card={card} cards={cards} setCards={setCards} className={styles.deleteCardBtn}/>
		</div>
	);
}

export default Card;

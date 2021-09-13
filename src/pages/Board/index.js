import React, { useEffect, useState } from 'react';
import AddCard from '../../components/AddCard';
import Card from '../../components/Card';

// eslint-disable-next-line
import styles from './styles.module.css';

function Board({ board, boards, setBoards }) {
  const [cards, setCards] = useState(board.cards)

  useEffect(() => {
    let tempBoards = boards
    let tempBoard = tempBoards.find(b => b.id === board.id )
    tempBoard.cards = cards
    setBoards(tempBoards)
    // eslint-disable-next-line
  },[cards])

  return (
    <>
      <AddCard setCards={setCards} cards={cards} />
      {cards.map((card) => {
        return (
          <Card card={card}
            cards={cards}
            setCards={setCards}
            key={card.id}
            style={{ left: `${card.position.x}px`, top: `${card.position.y}px` }}
          />
        )
      })}
    </>
  );
};

export default Board;

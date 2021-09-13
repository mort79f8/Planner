import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import styles from './styles.module.css';

function DeleteCard({ card, cards, setCards }) {
  const deleteCardHandler = () => {
    let tempCards = cards.filter((c) => c.id !== card.id)
    setCards(tempCards)
  }

  return (
    <FontAwesomeIcon icon={faTimesCircle} className={styles.deleteCardBtn} title="Delete" onClick={() => {deleteCardHandler()}}/>
  );
};

export default DeleteCard;

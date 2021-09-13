import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import Modal from '../Modal';

import styles from './styles.module.css';

function BoardNavigation({ boards, setBoards, selectedBoard, setSelectedBoard }) {
  const modalRef = useRef();
  const [newBoard, setNewBoard] = useState({
    name:"",
    category:"",
    cards:[]
  })

  const addBoard = () => {
    setBoards([...boards, { ...newBoard }])
    setSelectedBoard(newBoard);
  }

  return (
    <>
      <nav className={styles.boardNav}>
        <ul>
          {boards.map((board,i) => {
            return <li key={i} className={selectedBoard?.id === board.id ? styles.active : null} onClick={() => {setSelectedBoard(board)}}>{board.name}</li>
          })}
          <li onClick={() => modalRef.current.openModal()}><FontAwesomeIcon icon={faPlus} /></li>
        </ul>
      </nav>
      <Modal ref={modalRef}>
        <div className={styles.modalContent}>
          
        <form onSubmit={(e) => e.preventDefault()}>
          <h2>Add board</h2>
            <label>
              Name
              <input type="text" onChange={(e) => {
                let temp = newBoard;
                temp.name = e.target.value;
                setNewBoard(temp);
              }} />
            </label>
            <label>
              Category
              <input type="text" onChange={(e) => {
                let temp = newBoard;
                temp.category = e.target.value;
                setNewBoard(temp);
              }} />
            </label>

            <button onClick={() => addBoard()}>
              Add Board
            </button>
          </form>


        </div>
      </Modal>
    </>
  );
};

export default BoardNavigation;

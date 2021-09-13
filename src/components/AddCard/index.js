import React, { useRef, useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";
import Modal from "../Modal";


function AddCard({ setCards, cards }) {
  const modalRef = useRef();
  const [newCard, setNewCard] = useState(
    {
      header: "Header",
      id: 2,
      position: {
        x: 200,
        y: 200
      },
      elements: [
        {
          name: "Firstname",
          tag: "h3",
          content: ""
        },
        {
          name: "Lastname",
          tag: "h3",
          content: ""
        }
      ]
    }
  )

  const addCard = () => {
    setCards([...cards, { ...newCard }])
  }

  const elementSwitch = (element, index) => {
    switch (element.tag) {
      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "h5":
      case "h6":
      case "p":
        return <input type="text" onChange={(e) => {
          let temp = newCard;
          let item = temp.elements[index];

          item.content = e.target.value;

          temp.elements[index] = item;

          setNewCard(temp)
        }} />
      default:
        break;
    }
  }

  return (
    <>
      <Modal ref={modalRef}>
        <div className={styles.modalContent}>
          <h1>Hello World</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <label>
              Header
              <input type="text" onChange={(e) => {
                let temp = newCard;
                temp.header = e.target.value;
                setNewCard(temp);
              }} />
            </label>

            {newCard.elements.map((element, index) => {
              return (
                <div className={styles.elementContainer} key={index}>
                  <label>{element.name}</label>
                  {elementSwitch(element, index)}
                </div>)
            })}
          <button onClick={() => addCard()}>
            Add Card
          </button>
          </form>
        </div>
      </Modal>

      <div className={styles.btnContainer}>

        <div className={styles.addCardBtn} onClick={() => modalRef.current.openModal()}>
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <div className={styles.tooltip}>
          <h2>CREATE NEW</h2>
        </div>
      </div>
    </>
  );
}

export default AddCard;

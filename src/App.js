import { useEffect, useState } from 'react';
import './App.css';
import BoardNavigation from './components/BoardNavigation';
import Board from './pages/Board';

const App = () => {
  
  const [boards, setBoards] = useState([
    {
      id: 0,
      name: "Hannibal's questline",
      category: "Questline",
      cards: [
        {
          header: "Header",
          id: 1,
          position: {
            x: 300,
            y: 100
          },
          elements: [
            {
              tag: "h3",
              content: "Hello world"
            },
            {
              tag: "p",
              content: "Min hund hedder Klaus"
            }
          ]
        }
      ]
    },
    {
      id: 1,
      name: "Nickolai's questline",
      category: "Questline",
      cards: [
        {
          header: "Nickolai",
          id: 1,
          position: {
            x: 300,
            y: 100
          },
          elements: [
            {
              tag: "h3",
              content: "Hello world"
            },
            {
              tag: "p",
              content: "Min hund hedder Klaus"
            }
          ]
        }
      ]
    }
  ])
  const [selectedBoard, setSelectedBoard] = useState(null)
  useEffect(() => {
  },[selectedBoard])

  return (
    <>
      <BoardNavigation boards={boards} setBoards={setBoards} selectedBoard={selectedBoard} setSelectedBoard={setSelectedBoard}/>
      {selectedBoard && <Board key={selectedBoard.id} board={selectedBoard} boards={boards} setBoards={setBoards}/>}
      
    </>
  );
}

export default App;
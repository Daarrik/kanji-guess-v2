import { useState, useEffect, useContext } from "react";
import { CharBox, KanjiContext, GuessContext } from "../";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { DraggableLocation, DropResult } from "react-beautiful-dnd";
import "./BoxInput.css";
import { readConfigFile } from "typescript";

const reorder = (list: ItemType[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const move = (source: Array<string>, destination: Array<string>, droppableSource: DraggableLocation, droppableDestination: DraggableLocation) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result: any = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;
  return result;
};

const grid = 5;

interface StateType {
  items: ItemType[]; 
  selected: ItemType[];
}
interface ItemType {
  id: string;
  char: string;
}

const BoxInput = () => {
  const { reading } = useContext(KanjiContext);
  const { guess, setGuess } = useContext(GuessContext);
  
  const [state, setState] = useState<StateType>({items: reading.split('').map((char, idx) => ({id: idx.toString(), char: char})), selected: []});

  const getListStyle = (isDraggingOver: boolean) => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    border: "1px solid",
    margin: "1px",
    display: "flex",
    width: reading.length * 30 + reading.length + 1 + "px",
    height: "50px",
    alignItems: "center",
    overflow: "auto",
  });

  useEffect(() => {
    console.log(guess)
  }, [guess])
  
  const getList = (id: keyof StateType) => state[id];
  
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    
    if (source.droppableId === destination.droppableId) {
      const items: ItemType[] = reorder(
        // @ts-ignore
        getList(source.droppableId),
        source.index,
        destination.index
      );
      
    setState({...state, [source.droppableId]: items});
    if (source.droppableId === "selected") {
      const guessArray = items.map(item => item.char);
      setGuess(guessArray.join(''))
    }
    } else {
      const result: StateType = move(
        // @ts-ignore
        getList(source.droppableId),
        // @ts-ignore
        getList(destination.droppableId),
        source,
        destination
      );
      setState({ items: result.items, selected: result.selected });
      const guessArray = result.selected.map(item => item.char);
      setGuess(guessArray.join(''))
    }
  };

  return (
    <div className="box-input">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="items" direction="horizontal">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {state.items.map((item, idx) => (
                <Draggable key={item.id} draggableId={item.id} index={idx}>
                  {(provided) => (
                    <div className="char-box"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {item.char}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="selected" direction="horizontal">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {state.selected.map((item, idx) => (
                <Draggable key={item.id} draggableId={item.id} index={idx}>
                  {(provided) => (
                    <div className="char-box"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {item.char}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default BoxInput;

import { useState, useEffect, useContext } from "react";
import { KanjiContext, GuessContext } from "../";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { DraggableLocation, DropResult } from "react-beautiful-dnd";
import "./BoxInput.css";

const reorder = (
  list: Array<ItemType>,
  startIndex: number,
  endIndex: number
) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const move = (
  source: Array<string>,
  destination: Array<string>,
  droppableSource: DraggableLocation,
  droppableDestination: DraggableLocation
) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result: any = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;
  return result;
};

const optionBoxStyle = {
  display: "flex",
  border: "2px solid var(--text-color)",
  marginTop: "5px",
  padding: "5px",
  minWidth: "50px",
  height: "50px",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
};

const selectedBoxStyle = (isDraggingOver: boolean) => ({
  background: isDraggingOver ? "lightblue" : "none",
  display: "flex",
  border: "none",
  borderBottom: "2px solid var(--text-color)",
  marginTop: "20px",
  padding: "5px",
  minWidth: "75px",
  height: "50px",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
});

interface StateType {
  items: Array<ItemType>;
  selected: Array<ItemType>;
}
interface ItemType {
  id: string;
  char: string;
}

const BoxInput = () => {
  const { reading } = useContext(KanjiContext);
  const { guess, setGuess } = useContext(GuessContext);

  const [state, setState] = useState<StateType>({
    items: reading
      .split("")
      .map((char, idx) => ({ id: idx.toString(), char: char })),
    selected: [],
  });

  useEffect(() => {
    console.log(guess);
  }, [guess]);

  // Need to figure out indexing
  // @ts-ignore
  const getList = (id: string) => state[id];

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items: Array<ItemType> = reorder(
        getList(source.droppableId),
        source.index,
        destination.index
      );

      setState({ ...state, [source.droppableId]: items });
      if (source.droppableId === "selected") {
        const guessArray = items.map((item) => item.char);
        setGuess(guessArray.join(""));
      }
    } else {
      const result: StateType = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination
      );
      setState({ items: result.items, selected: result.selected });
      const guessArray = result.selected.map((item) => item.char);
      setGuess(guessArray.join(""));
    }
  };

  return (
    <div className="box-input">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="items" direction="horizontal">
          {(provided) => (
            <div
              className="items"
              ref={provided.innerRef}
              style={optionBoxStyle}
            >
              {state.items.map((item, idx) => (
                <Draggable key={item.id} draggableId={item.id} index={idx}>
                  {(provided) => (
                    <div
                      className="char-box jp-font"
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
        <h4 className="en-font">drag</h4>
        <Droppable droppableId="selected" direction="horizontal">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={selectedBoxStyle(snapshot.isDraggingOver)}
            >
              {state.selected.map((item, idx) => (
                <Draggable key={item.id} draggableId={item.id} index={idx}>
                  {(provided) => (
                    <div
                      className="char-box jp-font"
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
        <h4 className="en-font">your guess</h4>
      </DragDropContext>
    </div>
  );
};

export default BoxInput;

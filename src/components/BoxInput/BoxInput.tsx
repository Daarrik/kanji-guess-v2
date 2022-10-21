import { useState, useContext } from "react";
import { KanjiContext, GuessContext } from "../";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { move, reorder, shuffle } from "./reorder";
import { ItemType, StateType } from "./types";
import "./BoxInput.css";

const selectedBoxStyle = (isDraggingOver: boolean) => ({
  boxShadow: isDraggingOver ? "inset 0px -50px rgba(0, 18, 32, .25)" : "none",
});

const BoxInput = () => {
  const { reading, incorrectGuesses } = useContext(KanjiContext);
  const { setGuess } = useContext(GuessContext);

  const [state, setState] = useState<StateType>(() => {
    let items: ItemType[] = reading
      .split("")
      .concat(incorrectGuesses)
      .map((char, idx) => ({ id: idx.toString(), char: char }));
    items = shuffle(items);
    return {
      items,
      selected: [],
    };
  });

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
      const items: ItemType[] = reorder(
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
            <div className="option-box" ref={provided.innerRef}>
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
              className="selected-box"
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

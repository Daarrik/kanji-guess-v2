import { useState, useEffect, useContext } from "react";
import { CharBox, KanjiContext, GuessContext } from "../";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { DraggableLocation, DropResult } from "react-beautiful-dnd";

const reorder = (list: Array<string>, startIndex: number, endIndex: number) => {
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

const getListStyle = (isDraggingOver: boolean, isEmpty: boolean) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  display: "flex",
  padding: grid,
  overflow: "auto",
  minHeight: isEmpty ? "45px" : "NaN"
});

interface StateType {
  items: string[]; 
  selected: string[];
}

interface NewStateType {
  items?: string[]; 
  selected?: string[];
}

const BoxInput = () => {
  const { reading } = useContext(KanjiContext);
  const { guess, setGuess } = useContext(GuessContext);
  
  const [state, setState] = useState<StateType>({items: reading.split(''), selected: []});

  useEffect(() => {
    setGuess(state.selected.join(''));
  }, [state])

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
      const items: string[] = reorder(
        // @ts-ignore
        getList(source.droppableId),
        source.index,
        destination.index
      );
      
    setState({...state, [source.droppableId]: items});
    if (source.droppableId === "selected") {
      setGuess(items.join(''))
    }
    } else {
      const result = move(
        // @ts-ignore
        getList(source.droppableId),
        // @ts-ignore
        getList(destination.droppableId),
        source,
        destination
      );
      setState({ items: result.items, selected: result.selected });
      setGuess(result.selected.join(''))
    }
  };

  return (
    <div className="box-input">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="items" direction="horizontal">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver, false)}
            >
              {state.items.map((item, idx) => (
                <Draggable key={idx} draggableId={item+idx} index={idx}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {item}
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
              style={getListStyle(snapshot.isDraggingOver, false)}
            >
              {state.selected.map((item, idx) => (
                <Draggable key={idx} draggableId={item+idx} index={idx}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      // style={getItemStyle(
                      //   snapshot.isDragging,
                      //   provided.draggableProps.style
                      // )}
                    >
                      {item}
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

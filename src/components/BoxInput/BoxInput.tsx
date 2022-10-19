import { useState, useContext } from "react";
import { CharBox, KanjiContext, GuessContext } from "../";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const reorder = (list: any, startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const move = (source: any, destination: any, droppableSource: any, droppableDestination: any) => {
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

const BoxInput = () => {
  const { reading } = useContext(KanjiContext);
  const { guess } = useContext(GuessContext);
  
  const [state, setState] = useState<{items: string[], selected: string[]}>({items: reading.split(''), selected: []});
  
  const kanaList: any = {
    droppable: "items",
    droppable2: "selected",
  };
  const getList = (id: any) => kanaList[id];
  
  const onDragEnd = (result: any) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items: any = reorder(
        getList(source.droppableId),
        source.index,
        destination.index
      );

      let state = { items };

      if (source.droppableId === "droppable2") {
        setState({...state, selected: items})
      }
    } else {
      const result = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination
      );
      if (result.droppable) {
        setState({ ...state, items: result.droppable });
      }
      if (result.droppable2) {
        setState({ ...state, selected: result.droppable2 });
      }
    }
  };

  return (
    <div className="box-input">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver, false)}
            >
              {state.items.map((item, idx) => (
                <Draggable key={idx} draggableId={item} index={idx}>
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
        <Droppable droppableId="droppable2" direction="horizontal">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver, false)}
            >
              {state.selected.map((item, idx) => (
                <Draggable key={idx} draggableId={item} index={idx}>
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
        {reading.split("").map((kana, idx) => <CharBox key={idx} kana={kana} />)}
      </DragDropContext>
    </div>
  );
};

export default BoxInput;

import React, { useState, useEffect } from "react";
import data from "./data";

const RoomContext = React.createContext();

const RoomProvider = (props) => {
  const [context, setContextRoom] = useState({
    rooms: [],
    sortedRooms: [],
    featured: [],
    loading: true,
  });

  //Function to pretend fetching the data from external source with a delay
  useEffect(() => {
    const fetching = setTimeout(() => {
      setContextRoom({...context, rooms: data, loading: false})
    }, 2000);
    return () => {
      clearInterval(fetching)
      
    }
  }, [])

  console.log(context)



  return (
    <RoomContext.Provider value={{ ...context }}>
      {props.children}
    </RoomContext.Provider>
  );
};

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };

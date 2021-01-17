import React, { useState } from "react";

const RoomContext = React.createContext();

const RoomProvider = (props)=> {
  const [contextRoom, setContextRomm] = useState("toto")
 
    return (
      <RoomContext.Provider value={contextRoom}>
        {props.children}
      </RoomContext.Provider>
    );
  
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };

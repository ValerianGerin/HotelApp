import React, { useState, useEffect } from "react";
import items from "./data";

const RoomContext = React.createContext();

const RoomProvider = (props) => {
  const [context, setContextRoom] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
  });

  //Format Data to have less nested object
  const formatData = (data) => {
    let tempItems = data.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      let room = { ...item.fields, images, id };
      return room;
    });

    return tempItems;
  };
  //Function to pretend fetching the data from external source with a delay
  useEffect(() => {
    let rooms = formatData(items);

    let featuredRooms = rooms.filter((room) => room.featured === true);

    setTimeout(() => {
      setContextRoom({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
      });
    }, 2000);
  }, []);

  return (
    <RoomContext.Provider value={{ ...context }}>
      {props.children}
    </RoomContext.Provider>
  );
};

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };

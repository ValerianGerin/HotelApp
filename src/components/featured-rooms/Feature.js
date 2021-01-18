import React, { useContext } from "react";
import { RoomContext } from "../../Context";
import { Loading, Room, Title } from "../index";

const Feature = () => {
  const { loading, featuredRooms } = useContext(RoomContext);

  return (
    <section className="featured-rooms">
      <Title title="featured-rooms" />
      <div className="featured-rooms-center">
        {loading ? (
          <Loading />
        ) : (
          featuredRooms.map((room) => <Room key={room.id} room={room} />)
        )}
      </div>
    </section>
  );
};

export default Feature;

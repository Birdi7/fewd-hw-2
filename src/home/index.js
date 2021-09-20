import { useEffect, useState } from "react";
import { getInfo } from "../servers";
import { DataEntryWrapper } from "./index.styles";

function DataEntry({ id, name, email, avatar, address, description }) {
  const entry = (
    <div>
      <p>ID — {id}</p>
      <p>{name}</p>
      <p>{email}</p>
      <img src={avatar} alt="avatar" />
      <p>{address}</p>
      <p>{description}</p>
    </div>
  );
  return <DataEntryWrapper> {entry}</DataEntryWrapper>;
}

function Home() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    getInfo()
      .then(({ data }) => setInfo(data))
      .catch((_) => {
        setInfo([]);
      });
  }, []);

  console.log("info", info);

  return (
    <div>
      <h1> Home page</h1>

      {!info && <h2> No content </h2>}

      {info && info.map(DataEntry)}
    </div>
  );
}

export default Home;

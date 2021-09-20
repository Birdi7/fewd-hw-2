import { getInfo } from "../servers";

function DataEntry({ id, name, email, avatar, address, description }) {
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{email}</p>
      <p>{avatar}</p>
      <p>{address}</p>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const info = getInfo();

  console.log("info", info);

  return (
    <div>
      <h1> Home page</h1>
      {/*         
        {!info && (
            <h2> No content </h2>
        )} */}

      {/* {info && (
            info.map((val) =>  { DataEntry(...val) } )
        )} */}
    </div>
  );
}

export default Home;

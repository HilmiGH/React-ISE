import { useState, useEffect } from 'react';
import Coba from './Coba';



function Pacar() {
  const [pacarSaya, setPacarSaya] = useState(0);
  const [] = useState();
  if(pacarSaya<0){
    return setPacarSaya(0)
  }
  function handleClick() {
    setPacarSaya(pacarSaya - 1);
  }
  const pacar = ['Adit', 'Andre', 'Zega'];

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fungsi async untuk mengambil data dari API
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []); 

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <>
      <div className="bg-black w-full h-screen flex items-center">
        <div className="bg-white w-[500px] mx-auto  p-5 ">
          <Coba customName="Niman" />
          <h1>Pacar saya sebanyak : {pacarSaya} orang</h1>
          <div className="flex flex-row gap-3">
            <button className="bg-slate-300 w-1/2" onClick={handleClick}>
              -
            </button>
            <button className="bg-slate-300 w-1/2" onClick={() => setPacarSaya(pacarSaya + 1)}>
              +
            </button>
          </div>
          <h1 className="font-bold">Nama Pacar Saya : </h1>
          <ol>
            {pacar.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ol>

          {/* Map */}
          {/* {data.map((datas) =>(
            <li key={datas}>{datas}</li>
          ))} */}
          <h1 className="font-bold">Judul Film Kesukaan Pacar Saya : </h1>
          {data.slice(0,3).map((data)=>(
            <li key={data.id}>{data.title}</li>
          ))}
        </div>
      </div>
    </>
  );
}

export default Pacar;

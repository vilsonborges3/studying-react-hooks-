import React, { useState, useEffect, useMemo } from 'react';

function App() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  function handleAdd(){
    setTech([...tech, newTech]);
    setNewTech('');
  }

  useEffect(() => {
    /**
     * Running once as a 'did mount' 
     * looking for localStorage data when 
     * the component is created
     */
    const storageTech = localStorage.getItem('tech');

    if(localStorage){
      setTech(JSON.parse(storageTech));
    }
  }, []);


  useEffect(() =>{
    /** 
     * Monitoring data from 
     * the 'tech' variable 
     * as a 'did update'
    */
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  const techSize = useMemo(() => tech.length, [tech]);
  return (
    <>
      <ul>
        {tech.map(tec => (
          <li key={tec}>{tec}</li>
        ))}
      </ul>
      <br/>
      <strong>Você tem {techSize} tecnologias</strong>
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
          Adicionar
      </button>
    </>
  );
}

export default App;

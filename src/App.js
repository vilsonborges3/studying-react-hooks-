import React, { useState, useEffect } from 'react';

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

  return (
    <>
      <ul>
        {tech.map(tec => (
          <li key={tec}>{tec}</li>
        ))}
      </ul>
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
          Adicionar
      </button>
    </>
  );
}

export default App;

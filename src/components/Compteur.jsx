import React, { useState, useEffect } from 'react';
import useTitle from "../hooks/useTitle.js"; 

function Compteur(props) {
  const [valeur, setValeur] = useState(0);
  const [nom, setNom] = useState("");
  const [employes, setEmployes] = useState([])

  const gererIncrementation = () => {
    setValeur(valeur + 1);
  }

  const recupererLeNom = (e) => {
   setNom(e.target.value)
  }

useTitle(`${nom} a cliqué ${valeur} fois`)

  // ComponentDidMount
  // ComponentDidUpadte
  // ComponentWillUnmount


  return (
    <>
      <input type="text" onChange={recupererLeNom}/>
      <p>{nom} a cliqué {valeur} fois</p>
      <button onClick={gererIncrementation}>Incrementer</button>
    </>
  )
}

export default Compteur;
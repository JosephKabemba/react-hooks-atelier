import PropTypes from "prop-types";

const Employe = ({nom, age, sexe}) => {
  
  return (
    <div>
      <p>{nom}</p>
      <p>{age}</p>
      <p>{sexe}</p>
    </div>
  )
}

Employe.defaultProps = {
  nom: "Sacré",
  age: 0,
  sexe: "Non défini"
}

Employe.propTypes = {
  nom: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  sexe: PropTypes.string
}

export default Employe;
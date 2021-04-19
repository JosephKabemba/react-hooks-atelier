import {useEffect} from 'react';

function useTitle(title){
    useEffect(() => {
    document.title = title

    return () => {
      console.log("Opérations de nettoyage")
    }
  })

}

export default useTitle;
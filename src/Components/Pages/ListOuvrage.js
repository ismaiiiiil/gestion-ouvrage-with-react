import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearRechercheAction, rechercheOuvrageAction } from '../../reducer/action';

const ListOuvrage = () => {
    const [code, setCode] = useState("");

    const ouvragesList = useSelector((data) => data.ouvrages);
    const categories = useSelector((data) => data.categories);
    const ouvragesRecherche = useSelector((data) => data.ouvragesRecherche);

    const ouvrages = ouvragesRecherche ? ouvragesRecherche : ouvragesList;

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(code);
        dispatch(rechercheOuvrageAction(parseInt(code)))
    }
    const handlerClear = () => {
        dispatch(clearRechercheAction());
    }

    return (
        <div className='container w-75 mt-5'>
            <form onSubmit={handleSubmit} className="row w-50 my-5 ms-3" >
                <input type="number" name="code" value={code} 
                onChange={(e) => setCode(e.target.value)}
                className='form-control' placeholder='Recherche Par code ...' />
                <button className='btn btn-primary col-3 mt-3'>Recherche</button>
                {
                    ouvragesRecherche &&
                    (
                        <button onClick={handlerClear} className='btn btn-danger mx-3 col-3 mt-3'>Annuler</button>
                    )
                }
            </form>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Titre</th>
                        <th>Categorie</th>
                        <th>Nombre Exemplaire</th>
                        <th>Date Entree</th>
                        <th>Code Exemplaire </th>
                        <th>Type d'ouvrage </th>
                    </tr>
                </thead>
                <tbody>
                { ouvrages.length ?
                    (
                        ouvrages.map((ouvrage, index) => {
                            const categorie = categories.find((c) => c.id === parseInt(ouvrage.categorie))
                            return (
                                <tr key={index}>
                                    <td>{ouvrage.code}</td>
                                    <td>{ouvrage.titre}</td>
                                    <td>{categorie.titre}</td>
                                    <td>{ouvrage.nbrExemplaire}</td>
                                    <td>{ouvrage.dateEntree}</td>
                                    <td>{ouvrage.codeExemplaire}</td>
                                    <td>{ouvrage.typeOuvrage}</td>
                                </tr>
                            );
                        })
                    )
                    :
                    <tr>
                        <td colSpan={7} className="text-center fw-bold text-danger">Not data found</td>
                    </tr>
                }
                </tbody>
            </table>
        </div>
    );
}

export default ListOuvrage;

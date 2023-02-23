import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearFilterOuvrageAction, filterOuvrageAction, deleteOuvrageAction } from '../../reducer/action';
import {Link} from "react-router-dom";

const MAJ = () => {
    
    const [id, setId] = useState(1);

    const ouvragesList = useSelector((data) => data.ouvrages);
    const categories = useSelector((data) => data.categories);
    const ouvrageFilter = useSelector((data) => data.ouvrageFilter);

    const ouvrages = ouvrageFilter ? ouvrageFilter : ouvragesList;

    const dispatch = useDispatch();

    const handleFilter = () => {
        var option = document.querySelectorAll("#option")[0]; 
        // console.log(id);
        if(isNaN(id) && parseInt(id) === option.value) {       
            dispatch(filterOuvrageAction(parseInt(id)))
        } else {
            const idSelect = option !== undefined ? option.value : 0;
            if(idSelect !==  0) {
                dispatch(filterOuvrageAction(parseInt(id)))
            }
        }
    }
    const handlerClear = () => {
        dispatch(clearFilterOuvrageAction());
    }

    const handlerDelete = () => {
        if(isNaN(id)) {
            dispatch(deleteOuvrageAction(id));
            setId(id + 1);
        } else {
            var option = document.querySelectorAll("#option")[0];
            const idSelect = option !== undefined ? option.value : 0;
            if(idSelect !==  0) {
                dispatch(deleteOuvrageAction(parseInt(idSelect)));
                setId(parseInt(idSelect) + 1);
            }
        }
    }

    return (
        <div className='container w-75 mt-5'>
            <div  className="row w-50 my-5 ms-3" >
                <select name="id" 
                    onChange={(e) => setId(e.target.value)}
                    className='form-control'  >
                    {
                        ouvragesList.map((ouvrage, index) => {
                            return (
                                <option id="option" value={ouvrage.id} key={index}>
                                    {ouvrage.code}
                                </option>
                            )
                        })
                    }
                </select>
                <div className='d-flex mt-3'>
            
                {
                    ouvrages.length > 0 &&
                    (
                        <>
                        <button onClick={handlerDelete} className='btn btn-danger col-3 mt-3'>Delete</button>

                        <Link to={`/edit-ouvrage/${id}`} className='btn btn-warning col-3 mx-3 mt-3'>Modifier</Link>
                        <button
                            onClick={handleFilter}
                            type="submit" className='btn btn-primary col-3 mt-3'>Recherche</button>
                        </>
                    )
                }
                {
                    ouvrageFilter &&
                    (
                        <button onClick={handlerClear} className='btn btn-secondary mx-3 col-3 mt-3'>Annuler</button>
                    )
                }
                </div>
            </div>
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
                { ouvrages.length > 0 ?
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

export default MAJ;

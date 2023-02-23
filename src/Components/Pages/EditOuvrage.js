import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateOuvrageAction } from "../../reducer/action";
import {Link, useNavigate, useParams} from "react-router-dom";
import "./Form.css";

const EditOuvrage = () => {
    var categories = useSelector((data) => data.categories);
    var ouvrages = useSelector((data) => data.ouvrages);

    const {id} = useParams();
    const ouvrageEdit = ouvrages.find(o => o.id === parseInt(id));
    
    const [code, setCode] = useState(ouvrageEdit.code);
    const [titre, setTitre] = useState(ouvrageEdit.titre);
    const [categorie, setCategorie] = useState(ouvrageEdit.categorie);
    const [nbrExemplaire, setNbrExemplaire] = useState(ouvrageEdit.nbrExemplaire);
    const [dateEntree, setDateEntree] = useState(ouvrageEdit.dateEntree);
    const [codeExemplaire, setCodeExemplaire] = useState(ouvrageEdit.codeExemplaire);
    const [typeOuvrage, setTypeOuvrage] = useState(ouvrageEdit.typeOuvrage);

    const [ error, setError ] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (
            code &&
            titre &&
            categorie &&
            nbrExemplaire &&
            dateEntree &&
            codeExemplaire &&
            typeOuvrage
        ) {
            dispatch(
                updateOuvrageAction({
                    id:parseInt(id),
                    code: parseInt(code),
                    titre,
                    categorie: parseInt(categorie),
                    nbrExemplaire,
                    dateEntree,
                    codeExemplaire,
                    typeOuvrage,
                })
            );
            navigate('/mod-sup-fil')
            handleClear();
            setError("");
        } else {
            setError("Tous Les Champs obligatoire");
        }
    };
    const handleClear = () => {
        setCode("");
        setTitre("");
        setCategorie("");
        setNbrExemplaire("");
        setDateEntree("");
        setCodeExemplaire("");
        setTypeOuvrage("");
    };

    return (
        <div className="container mt-5">
        {
            error && (<div className="alert alert-danger" role="alert">{error}</div>)
        }
            <form onSubmit={handleSubmit}>
                <h2>Modifier Ouvrage</h2>
                <div className="form-group">
                    <input
                        type="number"
                        name="code"
                        value={code}
                        placeholder="Entrer Code d'ouvrage"
                        onChange={(e) => setCode(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="titre"
                        value={titre}
                        placeholder="Entrer titre d'ouvrage"
                        onChange={(e) => setTitre(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <select name="categorie"
                        value={categorie}
                        onChange={(e) => setCategorie(e.target.value)}
                    >
                    {
                        categories.map((c, index) => {
                            return (
                                <option key={index} value={c.id}>
                                    {c.titre}
                                </option>
                            );
                        })
                    }
                    </select>
                </div>
                <div className="form-group">
                    <input
                        type="number"
                        name="nbrExemplaire"
                        value={nbrExemplaire}
                        placeholder="Entrer nbr Exemplaire d'ouvrage"
                        onChange={(e) => setNbrExemplaire(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="date"
                        name="dateEntree"
                        value={dateEntree}
                        placeholder="Entrer date d'entrer d'ouvrage"
                        onChange={(e) => setDateEntree(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        name="codeExemplaire"
                        value={codeExemplaire}
                        placeholder="Entrer code d'exemplaire d'ouvrage"
                        onChange={(e) => setCodeExemplaire(e.target.value)}
                    />
                </div>

                <div className="form-check">
                    <div className="row">
                        <div className="col-6 ">
                            <label htmlFor="Livre" className="form-check-label">
                                Livre
                            </label>
                            <input
                                type="radio"
                                className="form-check-input"
                                name="typeOuvrage"
                                value="Livre"
                                id="Livre"
                                checked={typeOuvrage === "Livre" ? true : false}
                                onChange={(e) => setTypeOuvrage(e.target.value)}
                            />
                        </div>
                        <div className="col-6">
                            <label htmlFor="Magasine" className="form-check-label">
                                Magasine
                            </label>
                            <input
                                type="radio"
                                className="form-check-input"
                                name="typeOuvrage"
                                value="Magasine"
                                checked={typeOuvrage === "Magasine" ? true : false}
                                onChange={(e) => setTypeOuvrage(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-warning ">Modifier Ouvrage</button>
                    <Link to="/mod-sup-fil" className="btn btn-secondary mx-3 mt-2">
                        Annuler
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default EditOuvrage;

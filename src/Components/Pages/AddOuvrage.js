import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addOuvrageAction } from "../../reducer/action";
import {Link} from "react-router-dom";
import "./Form.css";

const AddOuvrage = () => {
    const [code, setCode] = useState("");
    const [titre, setTitre] = useState("");
    const [categorie, setCategorie] = useState(1);
    const [nbrExemplaire, setNbrExemplaire] = useState("");
    const [dateEntree, setDateEntree] = useState("");
    const [codeExemplaire, setCodeExemplaire] = useState("");
    const [typeOuvrage, setTypeOuvrage] = useState("");

    const [ error, setError ] = useState("");
    const [ valid, setValid ] = useState("");

    var categories = useSelector((data) => data.categories);
    var ouvrages = useSelector((data) => data.ouvrages);

    const indexOuvrages = ouvrages.length + 1;

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
                addOuvrageAction({
                    id: indexOuvrages,
                    code: parseInt(code),
                    titre,
                    categorie,
                    nbrExemplaire,
                    dateEntree,
                    codeExemplaire,
                    typeOuvrage,
                })
            );

            handleClear();
            setError("");
            setValid("Stagiaire est ajouter avec success");
        } else {
            setValid("");
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
        {
            valid && (<div className="alert alert-success" role="alert">{valid}</div>)
        }
            <form onSubmit={handleSubmit}>
                <h2>Add Ouvrage</h2>
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
                        categories.map((categorie, index) => {
                            return (
                                <option key={index} value={categorie.id}>{categorie.titre}</option>
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
                    <button type="submit">Add Ouvrage</button>
                    <Link to="/" className="btn btn-secondary mx-3 mb-1">
                        Annuler
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default AddOuvrage;

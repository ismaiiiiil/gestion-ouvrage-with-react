export const addOuvrageAction = (ouvrage) => {
    return {type:"Add_Ouvrage", payload:ouvrage};
}

export const updateOuvrageAction = (ouvrage) => {
    return {type:"Update_Ouvrage", payload:ouvrage};
}

export const deleteOuvrageAction = (idOuvrage) => {
    return {type:"Delete_Ouvrage", payload:idOuvrage};
}

export const filterOuvrageAction = (idOuvrage) => {
    return {type:"Filter_Ouvrage", payload:idOuvrage};
}

export const clearFilterOuvrageAction = () => {
    return {type:"Clear_Filter"};
}

export const rechercheOuvrageAction = (numOuvrage) => {
    return {type:"Recherche_Ouvrage", payload:numOuvrage};
}

export const clearRechercheAction = () => {
    return {type:"Clear_Recherche"}
}


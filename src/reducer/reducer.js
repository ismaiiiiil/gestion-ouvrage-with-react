const initialState = {
    ouvrages: [
        {
            id:1,
            code:784,
            titre:"FULL STACK",
            categorie:1,
            nbrExemplaire:45,
            dateEntree:'2002-11-04',
            codeExemplaire:457,
            typeOuvrage:"Livre"
        },
        {
            id:2,
            code:984,
            titre:"FRONT END",
            categorie:1,
            nbrExemplaire:49,
            dateEntree:'2002-04-04',
            codeExemplaire:486,
            typeOuvrage:"Magasine"
        },
        {
            id:3,
            code:234,
            titre:"économiques",
            categorie:2,
            nbrExemplaire:45,
            dateEntree:'2002-11-04',
            codeExemplaire:645,
            typeOuvrage:"Livre"
        },
        {
            id:4,
            code:454,
            titre:"commerce",
            categorie:3,
            nbrExemplaire:49,
            dateEntree:'2002-04-04',
            codeExemplaire:475,
            typeOuvrage:"Magasine"
        }
    ],
    categories: [
        {id:1, titre:"science"},
        {id:2, titre:"economie"},
        {id:3, titre:"philosophie"},
        {id:4, titre:"financement"},
        {id:5, titre:"développement"}
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "Add_Ouvrage" :
            return {
                ...state,
                ouvrages:[...state.ouvrages, action.payload]
            }
        
        case "Update_Ouvrage":
            const data = action.payload;
            const ouvrage = state.ouvrages.find(o => o.id === parseInt(data.id));
            if(ouvrage) {
                ouvrage.code = data.code;
                ouvrage.titre = data.titre;
                ouvrage.categories = data.categories;
                ouvrage.nbrExemplaire = data.nbrExemplaire;
                ouvrage.dateEntree = data.dateEntree;
                ouvrage.codeExemplaire = data.codeExemplaire;
                ouvrage.typeOuvrage = data.typeOuvrage;
            }
            return state;

        case "Filter_Ouvrage":
            return {...state, 
                    ouvrageFilter:[
                        ...state.ouvrages.filter(o => o.id === parseInt(action.payload))
                    ]            
            };

        case "Clear_Filter":
            return {...state, ouvrageFilter:null };

        case "Recherche_Ouvrage":
            return {...state,
                    ouvragesRecherche:[
                        ...state.ouvrages.filter(o => o.code === parseInt(action.payload))
                    ]
            };

        case "Clear_Recherche":
            return {...state, ouvragesRecherche:null};

        case "Delete_Ouvrage":
            return {
                ...state,
                ouvrages:[
                    ...state.ouvrages.filter(o => o.id !== parseInt(action.payload))
                ]
            }
        
        default :
            return state;
    }
}

export default reducer;
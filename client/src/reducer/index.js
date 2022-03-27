
const initialState = {
    countries: [],
    copyCountries: [],
    activities: [],
    details: []
}

function rootReducer (state = initialState, action){
    switch(action.type) {
        case 'GET_COUNTRIES':
            return{
                ...state,
                countries: action.payload,//en mi estado countries, mando todo del getcount
                copyCountries: action.payload              
            }

        case 'GET_ACTIVITIES':
            return{
                ...state,
                activities: action.payload
            }

        case 'ORDER_BY_NAME':
            let orderName = action.payload === 'Desc' ?
            state.countries.sort(function (a, b){
                if(a.name > b.name) {
                    return 1;
                }
                if(b.name > a.name) {
                    return -1;
                }
                return 0;
            }) : action.payload === "Asc" ?
            state.countries.sort(function (a, b) {
                if (a.name > b.name) {
                    return -1
                }
                if(b.name > a.name) {
                    return 1;
                }
                return 0
            }) : state.countries.sort(() => Math.random()-0.5)
            return{
                ...state,
                countries: orderName
            }

        case 'FILTER_BY_CONTINENT':
            const allCountries = state.copyCountries//uso otro state para no interferir con los otros
            const continentFilter = action.payload === 'Continent' ? allCountries : allCountries.filter(e => e.region === action.payload)
            return{
                ...state,
                countries: continentFilter
            }

        case 'SORT_POPULATION':
            let sortPopu = action.payload === 'Lower' ?
            [...state.countries].sort(function (a, b){
                return (a.population - b.population);
            }) :
            [...state.countries].sort(function (a, b){
                return (b.population - a.population)
            })
            return{
                ...state,
                countries: sortPopu
            }

        case 'FILTER_ACTIVITY':

            let allCountries2 = state.copyCountries;
            let actFilter = action.payload === 'All'? allCountries2 : allCountries2.filter(country => {
                let activity = country.activities.map(act => act.name)
                return activity.includes(action.payload) ? country : null
            })

            return{
                ...state,
                countries: actFilter
            }

        case 'GET_NAME_COUNTRIES':
            return{
                ...state,
                countries: action.payload
            }

        case 'GET_DETAILS':
            return{
                ...state,
                details: action.payload
            }

        case 'POST_ACTIVITY':
            return state

        default:
            return state;
    }

}


export default rootReducer;
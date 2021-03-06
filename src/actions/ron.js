import { getFacts } from '../services/ronApi';

export const FETCH_FACTS_LOADING = 'FETCH_FACTS_LOADING';
export const FETCH_FACTS = 'FETCH_FACTS';

export const fetchFactsWithPromise = count => ({
  type: FETCH_FACTS,
  loadStart: FETCH_FACTS_LOADING,
  payload: getFacts(count)
});

// export const fetchFacts = count => dispatch => {
//   dispatch({
//     type:FETCH_FACTS_LOADING 
//   });
//   return getFacts(count)
//     .then(facts => {
//       dispatch({
//         type: FETCH_FACTS,
//         payload: facts
//       });
//     });
// };

import { get, post } from "../../../shared/http"

// export const requestGrid = (): any[] => {
//     get('https://api.pokemontcg.io/v1/cards')
//     .then(data => {
//         console.log('cards', data.data.cards)
//         return data.data.cards
//     })
//     .catch(reason => {})
//     return []
// }

export const requestGrid = async (): Promise<any> => {
    return await get('https://api.pokemontcg.io/v1/cards')
}

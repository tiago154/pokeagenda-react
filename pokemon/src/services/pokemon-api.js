const baseUrl = process.env.REACT_APP_POKEMON_API;

// const calculateOffSet = (offset, limit, forward) => {
//     if (offset === 0 && !forward) return offset;
//     return forward ? offset + limit : offset - limit;
// };

const request = async urlRequest => {
    const response = await fetch(urlRequest);
    if (response.status === 200) {
        const json = await response.json();
        return json;
    }
};

export const getPokemon = async name => {
    if (!name) return '';
    const urlRequest = `${baseUrl}/${name.toLowerCase()}`;
    return await request(urlRequest);
};

export const paginatePokemon = async (limit, offset) => {
    const urlRequest = `${baseUrl}?limit=${limit}&offset=${offset}`;
    return await request(urlRequest);
};



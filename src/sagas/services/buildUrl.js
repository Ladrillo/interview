export default function buildUrl(page, search, planetIds) {
    let baseUrl          = `http://localhost:3008/people?_page=${page}`;
    let searchSegment    = `&q=${search}`;
    let homeworldSegment = '';

    if (search && search.length > 3 && planetIds.length > 0) {
        planetIds.forEach(id => {
            homeworldSegment = `${homeworldSegment}&homeworld=${id}`;
        });

        return baseUrl + homeworldSegment;
    }

    return baseUrl + searchSegment;
}

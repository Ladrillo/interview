/**
 * Builds the URL used to GET FAVORITE people
 *
 * @param {Object} array of ids of favorited people
 * @return {string} url to GET the full list of favorite people
 */
export default function buildUrlFavorites(ids) {
    let baseUrl   = `http://localhost:3008/people?`;
    let idSegment = '';

    if (ids.length > 0) {
        ids.forEach(id => {
            idSegment = `${idSegment}&id=${id}`;
        });

        return baseUrl + idSegment;
    }

    return baseUrl + 'id=999'; // TO-DO: fix this hack
}

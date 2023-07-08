export function getPageCount(totalElements, limit) {
    return Math.ceil(totalElements / limit);
}

export default class SearchService {
    static async getAllUniversities (limit = 500) {
        const url = `http://universities.hipolabs.com/search?limit=${limit}`;
        const result = await fetch(url);
        let data = await result.json();
        return data;
    }
    static async getUnivercitiesByKeyword(keyword, searchQuery, limit =500) {
        const url = `http://universities.hipolabs.com/search?${keyword}=${searchQuery}&limit=${limit}`;
        const result = await fetch(url);
        const data = await result.json();
        return data;
    }
    static async getUnivercitiesByKeywords(searchQuery1, searchQuery2) {
        const url = `http://universities.hipolabs.com/search?country=${searchQuery1}&&name=${searchQuery2}`;
        const result = await fetch(url);
        const data = await result.json();
        return data;
    }
}
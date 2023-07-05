
export default class SearchService {
    static async getAllUniversities () {
        const url = 'http://universities.hipolabs.com/search?';
        const result = await fetch(url);
        const data = await result.json();
        return data;
    }
    static async getUnivercitiesByKeyword(keyword, searchQuery) {
        const url = `http://universities.hipolabs.com/search?${keyword}=${searchQuery}`;
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
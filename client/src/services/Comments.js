import Api from './Api'

export class Comments extends Api{

    constructor(){
        super();
        this.route = 'comment'
    }
    async addComment(data){
        const res = await this.post(this.route,data);
        return res
    }
    async getComments(){
        const res = await this.get(this.route);
        return res
    }
    async getLastActivity(email){
        const url  = `${this.route}/last-comment/${email}`;
        const res = await this.get(url);
        return res
    }
    async filter(query){

        const queryString = {
            params: {
                query:query
            }
        };

        const res = await this.get(this.route,queryString);
        return res
    }
}
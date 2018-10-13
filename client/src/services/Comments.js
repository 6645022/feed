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
    async getComments(filter = null){
        const res = await this.get(this.route);
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
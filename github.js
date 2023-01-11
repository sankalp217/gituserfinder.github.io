class Github{

    constructor(){
        this.client_id = '7546f974609bd39f7628';
        this.client_secret = '64cf298674f967f6ed50bf71fc9429a1c4f65167';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile= await profileResponse.json();
        const repos= await reposResponse.json();

        return{
            profile,
            repos
        }
    }
}
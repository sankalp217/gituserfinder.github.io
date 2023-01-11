class UI{

    constructor(){
        this.profile=document.getElementById('profile');
        //this.repos=document.getElementById('repos');
    }

    showProfile(user){
        this.profile.innerHTML=`
        
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn d-block btn-primary btn-block mb-4">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge bg-primary">Public Repos:${user.public_repos}</span>
                    <span class="badge bg-mine">Public gists:${user.public_gists}</span>
                    <span class="badge bg-success">followers:${user.followers}</span>
                    <span class="badge bg-info">Following:${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item"><b>Username :</b> ${user.name}</li>
                        <li class="list-group-item"><b>Bio :</b> ${user.bio}</li>
                        <li class="list-group-item"><b>Location :</b> ${user.location}</li>
                        <li class="list-group-item"><b>Member-since :</b> ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Letest Repos</h3>
        <div id="repos"></div>

        `;
    }

    showrepos(repos){

        let output = '';

        repos.forEach(function (repo) {
            output +=`
            
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <span>Name : <a href="${repo.html_url}" target="_blank">${repo.name}</a></span>
                    </div>
                    <div class="col-md-6">
                        <span class="badge bg-primary">Stars : ${repo.stargazers_count}</span>
                        <span class="badge bg-secondary">Watchers : ${repo.watchers_count}</span>
                        <span class="badge bg-success">Forks : ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
            `;
        });

        //output repos
        document.getElementById('repos').innerHTML=output;
        //this.repos.innerHTML=output;
    }

    showalert(message,classname){
        //clear any remaining alerts
        this.clearalert();
        const alertpopup=document.getElementById('alert');
        const alerttag=`
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
            Sorry, user not found..!
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`;
        alertpopup.innerHTML=alerttag;

        //this.profile.innerHTML= ` `;
        this.clearProfile();

        //timeout after 3 sec
        setTimeout(() =>{
            this.clearalert();
            //document.getElementById('alert').remove();
        },2000);


        //clear remaining alerts
        // this.clearalert();

        // const div= document.createElement('div');
        // div.className=classname;

        // div.appendChild(document.createTextNode(message));

        // const container=document.querySelector('.searchContainer');
        // const search=document.querySelector('.search');
        // container.insertBefore(div,search);

        // //set timeout
        // setTimeout(() => {
        //     this.clearalert();
        // },2000);

        // this.clearProfile();
    }

    clearalert(){
        const currentalert= document.querySelector('.alert');
        
        if(currentalert){
            currentalert.remove();
        }
    }

    //clear profile
    clearProfile(){
        this.profile.innerHTML= ` `;
    }
}

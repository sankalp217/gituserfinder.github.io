//initiate class
const github = new Github;

const ui = new UI;

//search input
const username =document.getElementById('searchUser');

//search input event listener
username.addEventListener('keyup',function(e){
    
    //get input text
    const usertext=e.target.value;

    if(usertext !== ''){

        console.clear();
        //make http call
        github.getUser(usertext)
        .then(function(data){
            
            if(data.profile.message ==='Not Found'){

                //show alert:user not found
                console.log('user not found');
                console.log(data);
                //ui.showalert('User not found','alert alert-danger');
                ui.showalert();
                

            }else{
                //show profile
                console.log(data);
                ui.showProfile(data.profile);

                //show repos
                ui.showrepos(data.repos);

            }
        })
        
        console.log(usertext);
        
    }
    else{
        console.clear();
        console.log('Empty');
        
        //clear profile
        ui.clearProfile();
    }


});
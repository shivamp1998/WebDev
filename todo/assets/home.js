var btn = document.getElementById('add-btn');
var date = document.getElementById('date');

btn.addEventListener('click', function(){
    let d = new Date();
    let full_date = `${d.getFullYear()}-${"0" + (d.getMonth() + 1)}-${d.getDate()}`;
    if (date.value < full_date) {
        alert("This Date Already Past!");
        return;
    }    
});



document.addEventListener('click', function(e){
    let trgt = e.target;
    if(trgt.className == "checkbox"){
        let checkid = trgt.id;
        let list = document.getElementsByClassName('list-val');
        for(let i=0; i< list.length; i++){
            let listid = list[i].id;
            if(checkid == listid){
                let data = list[i].getAttribute('data-value');
                if(data == "true"){
                    list[i].style.textDecoration = "none";
                    list[i].setAttribute('data-value',"false");
                    return;
                }
                list[i].style.textDecoration = "line-through";
                list[i].setAttribute('data-value',"true");
            }
        }
    }


})




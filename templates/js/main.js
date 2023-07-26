function main(){
    var url = window.location.href
    if(url == "https://1mxthxs.github.io/writers_blog/pages/authors.html" || url == "https://1mxthxs.github.io/writers_blog/pages/login.html"){
        window.location.href = "https://1mxthxs.github.io/writers_blog/"
    }
    else{
        window.location.href = "/"
    }
}
function link(link){
    var url = window.location.href;
    if(url == "https://1mxthxs.github.io/writers_blog/pages/authors.html" || url == "https://1mxthxs.github.io/writers_blog/pages/login.html"){
        window.location.href = "https://1mxthxs.github.io/writers_blog/" + link;
    }
    else{
        window.location.href = link;
    }
}
var blacklist = ["Trump", "trump", "Republican", "Democrat", "Candidate", "candidate", "politics", "Politics", "Election", "election", "government", "war", "president", "President"]

function loadImage() {
    alert("Image is loaded");
}

function w3_open() {
    document.getElementById("main").style.marginLeft = "25%";
    document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
  }
  function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
  }

function catChoose(cat) {
    switch(cat) 
    {
        case 'business':
            cat = "business";
            break;
        case 'entertainment':
            cat = "entertainment";
            break;
        case 'health':
            cat = "health";
            break;
        case 'science':
            cat = "science";
            break;
        case 'sports':
            cat = "sports";
            break;
        case 'technology':
            cat = "technology";
            break;
        case 'default':
            cat = "default"
            break;
    }

    console.log(cat);

var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&pageSize=100&category='+
          cat +
          '&apiKey=49f60504b97b4536908bec624481a25a';


$.getJSON(url, function(a) 
{
    // console.log(a.articles[0].url);
    
    $('.card').empty();
    for(i=0; i <= a.articles.length; i++)
    {

        var titulo = a.articles[i].title;
        var descricao = a.articles[i].description;
        var autor = a.articles[i].author;
        var link = a.articles[i].url;
        var linkDaImagem = a.articles[i].urlToImage;
        var dataPublicacao = a.articles[i].publishedAt;

        var trump = false;

        function fileExists(linkDaImagem){

            var http = new XMLHttpRequest();
        
            http.open('HEAD', linkDaImagem, false);
            http.send();
        
            return "";
        
        }

        for (j = 0; j <= blacklist.length; j++)
        {
            if(titulo.includes(blacklist[j]))
            {
                trump = true;
                break;
            }
        }

        if (linkDaImagem != null && linkDaImagem.includes("https") && descricao != null && autor != null && !trump ){
        $('.card').prepend('<div class="item"><h2>' + titulo + '</h2>' +
        '<p class="publishedAt">' + dataPublicacao + '</p>' +
                //caracter of scape: "quotes" and '+'
        '<img src="' + linkDaImagem +'">' + 
        '<p>' + descricao + '</p>' +
        '<p>' + autor + '</p>' +
                //caracter of scape: "quotes" and '+'
        '<a href="'+ link +'">Read more</a></div>');}
    }
}
);}
catChoose('entertainment');

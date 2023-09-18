document.querySelector("#go").addEventListener("click", async function(){
    
    //declare arrays with parts of speech and empty arrays
    let speech = ["verb", "adjective", "noun"]
    let promises = []
    let words = []

    //make call to api and retrieve promises
    speech.map((part) => {
        promises.push( fetch(`https://random-words-api.vercel.app/word/${part}`) )
    })

    const data = await Promise.all(promises);

    //convert JSON and retrieve promises
    data.map((obj) => {
        words.push(obj.json())
    })

    const objs = await Promise.all(words)

    //Sentence construction ... maybe a more elegant way to go about this but idgaf
    sentence =  `To <i>${objs[0][0].word}</i> a <u>${objs[1][0].word}</u> ${objs[2][0].word}`
    document.querySelector("#passionText").innerHTML = sentence

    $('#urPassion').textfill({
        maxFontPixels: 132,
        innerTag: 'p',
        success: function() {
            console.log("yay!")
        },
        fail: function() {
            alert("awwww")
        }
    })

    //Show sentence and handle reverse
    slideUp.play()
    slideUp.finished.then(() => {
        slideUp.reverse();
      })

})

document.querySelector("#restart").addEventListener("click", function(){
    slideUp.play()
    slideUp.finished.then(() => {
        slideUp.reverse();
      })
})

document.querySelector("#download").addEventListener("click", function(){
    var element = document.getElementById('urPassion');

    html2canvas(element).then((canvas) => {
        const base64image = canvas.toDataURL("image/png");
        var anchor = document.createElement('a');
        anchor.setAttribute("href", base64image);
        anchor.setAttribute("download", "my-image.png")
        anchor.click();
        anchor.remove()
    });

})

document.querySelector("#share").addEventListener("click", function(e){

    // html2canvas(element).then((canvas) => {
    //     const base64image = canvas.toDataURL("image/png");
    //     var anchor = document.createElement('a');
    // });

    // document.getElementById("share").setAttribute("data-url", "https://pbs.twimg.com/media/F5nn1fhXMAAQ4dE?format=jpg&name=900x900")

    // var share = $('#after').append('<a data-sharer="twitter" data-title="My Passion" data-hashtags="Passion" data-url="/">Share on Twitter</a>');
    // share.click();
    // var anchor = document.createElement('a') 
    // anchor.setAttribute("data-sharer", "twitter")
    // anchor.setAttribute("data-title", "My Passion")
    // anchor.setAttribute("data-url", "/")
    // anchor.click()
    // anchor.remove()

    // window.Sharer.init();
    e.stopPropagation();

    var menu = $("#social-options");

    if( menu.css('display') == 'none' ){
        $('#social-options').css('display', 'block');
    } else {
        $('#social-options').css('display', 'none');
    }
})

$("body").click(function(){
    var menu = $("#social-options");

    if( menu.css('display') == 'block' ){
        $('#social-options').css('display', 'none');
    }
})

let slideUp = anime({
    targets: '#title, #after',
    translateY: -1050,
    autoplay: false
});


$(document).ready(function(){
    console.log("hey")

    $('#urPassion').textfill({
        maxFontPixels: 148,
        innerTag: 'p',
        success: function() {
            console.log("yay!")
        },
        fail: function() {
            alert("awwww")
        }
    })
})






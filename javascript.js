const origin = "file://wsl%24/Ubuntu-18.04/home/aaron/digi_proj/passion/index.html"

const pass = "bcfpvm9ifbrs3pa6gp9djaw3of2dt3k6glnbthfnmswkrldre"

// const request = `https://random-word-api.herokuapp.com/word/${part}`
const headersList = {'Access-Control-Allow-Origin': 'file://wsl%24/Ubuntu-18.04/home/aaron/digi_proj/passion/index.html',
                    'Access-Control-Allow-Methods': 'GET, POST',
                    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'}

document.querySelector("#go").addEventListener("click", async function(){
    
    //declare arrays with parts of speech and empty arrays
    let speech = ["verb", "adjective", "noun"]
    let promises = []
    let words = []

    //make call to api and retrieve promises
    speech.map((part) => {
        promises.push( fetch( `https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=${part}&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=1&api_key=${pass}`))
    })

    const data = await Promise.all(promises);

    //convert JSON and retrieve promises
    data.map((obj) => {
        // console.log(obj)
        words.push(obj.json())
    })

    const objs = await Promise.all(words)

    console.log(objs)

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

    $("body").toggleClass("blue");
    $("body").toggleClass("pink");

    //Show sentence and handle reverse
    slideUp.play()
    slideUp.finished.then(() => {
        slideUp.reverse();
      })

})

document.querySelector("#info-button").addEventListener("click", function(){
    $("#info").show()
    $("#Passion").hide()
    $("#info-button").hide()
    $("#go").hide()
})

document.querySelector("#info-close").addEventListener("click", function(){
    $("#info").hide()
    $("#Passion").show()
    $("#info-button").show()
    $("#go").show()
})

document.querySelector("#restart").addEventListener("click", function(){
    slideUp.play()
    slideUp.finished.then(() => {
        slideUp.reverse();
        $("body").toggleClass("blue");
        $("body").toggleClass("pink");
      })
})

document.querySelector("#download").addEventListener("click", function(){
    var element = document.getElementById('body');

    html2canvas(element).then((canvas) => {
        const base64image = canvas.toDataURL("image/png");
        var anchor = document.createElement('a');
        anchor.setAttribute("href", base64image);
        anchor.setAttribute("download", "my-image.png")
        anchor.click();
        anchor.remove()
    });

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






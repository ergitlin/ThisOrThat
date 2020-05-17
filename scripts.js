var dict = {
    "Red": 0,
    "Giraffe": 0,
    "Rock": 0,
    "Tree": 0,
    "Clothes Hangers": 0,
    "Bear": 0,
    "Grapes": 0,
    "Harmony": 0,
    "Oxygen": 0,
    "Carbon Dioxide": 0,
    "The Queen": 0,
    "Arsenic": 0,
    "Thrift Stores": 0,
    "Penguin": 0,
    "Cake": 0,
    "Apple": 0,
    "Ladybug": 0,
    "Library": 0,
    "Step Parents": 0,
    "Revolution": 0,
    "Stars": 0,
    "Constellations": 0,
    "The Necronomicon": 0,
    //"The Person Reading This": 0,
    "Me": 0,
    "Anarchy": 0,
    "Sewers": 0,
    "Nail Polish": 0,
    "Poland": 0,
    "Denmark": 0,
    "Lightbulb": 0,
    "Sugar": 0,
    "Nails": 0,
    "Iron": 0,
    "Grass": 0,
    "Lakes": 0,
    "Emily": 0,
    //"The Forbidden Texts": 0,
    "Bottles": 0,
    "Stalactite": 0,
    "Art": 0,
    "Clara": 0,
    "The Sun": 0,
    "The Moon": 0,
    "Tinsel": 0,
    //"Three Raccoons in a Trench Coat": 0,
    "Lobsters": 0,
    "Joey": 0,
    "The Night": 0,
    "Spoons": 0,
    "Eclipse": 0,
    "C++": 0,
    "Hannah": 0,
    "Rainjacket": 0,
    "Copyright": 0,
    "Vine": 0,
    "Gifts": 0,
    "Computer": 0,
    "Calculator": 0,
    "Bowl": 0,
    "Fork": 0,
    "Documentation": 0,
    "Souls": 0,
    "Lead": 0,
    "Shelves": 0,
    "Pants": 0,
    "Shirts": 0,
    "Hat": 0,
    "Crayons": 0,
    "Markers": 0,
    "Watercolor": 0,
    "Diamonds": 0,
    "Crime": 0,
    "Balloon": 0,
    "Bugspray": 0,
    "Skeleton": 0,
    "Rags": 0,
    "Laden Swallows": 0,
    "Kazoos": 0,
    "A Single Grain of Rice": 0,
    "Teeth": 0,
    "Moss": 0,
    "Glass": 0,
    "Wheat Thins": 0,
    "Foxes": 0,
    "Antartica": 0,
    "Cards Against Humanity": 0,
    "You": 0,
    "Javascript": 0,
    "Frogs": 0,
    "The Apocalypse": 0,
    "Soup": 0,
    "Too Many Legs": 0,
    "String": 0,
    "Pocket Sand": 0,
    //"No Fewer Than Nine Eyes": 0,
    "Minecraft Steve": 0,
    "The President": 0,
    "Poisonous Gas": 0,
    "Script": 0
};



window.onload = function() {

}

function clickItem(itemNum){
    //get two new items
    var wordNum1 = wordGrab();
    var wordNum2 = wordGrab();

    //update the items with the new information
    updateItems(wordNum1, wordNum2);
}

function updateItems(wordNum1, wordNum2){
    //declare word1 and word2 which are
    var word1 = document.getElementById('wrd1');
    var word2 = document.getElementById('wrd2');

    console.log(Object.keys(dict)[wordNum1]);
    console.log(wordNum1);
    word1.innerHTML = Object.keys(dict)[wordNum1];
    word2.innerHTML = Object.keys(dict)[wordNum2];

    //declare image1 and image2 which are
    var image1 = document.getElementById('img1');
    var image2 = document.getElementById('img2');

    flickerImg();
    //image1.src = "https://images-na.ssl-images-amazon.com/images/I/71APeLt-jaL._AC_SL1088_.jpg";
    //image2.src = "https://cdn.cancercenter.com/-/media/ctca/images/others/blogs/2019/08-august/04-blog-grapefruit-juice-l.jpg?h=630&la=en&w=1200&hash=38967FA3C9D017D66A4C360D4185099B";
}
//Things we need to do:

//update the count for the word
function updateCount(){

}

//get 2 new words
function wordGrab(){
    //get a random number between 0 and dict.length
    return(Math.floor((Math.random() * Object.keys(dict).length) + 1));
}

//finds image for those words
function image69(){

}
//sets image1 and image2 to be those images, and the text to be that text
//this is done in update items I think


function flickerImg(){
    var keyword1 = document.getElementById('wrd1').innerHTML;
    console.log(keyword1);
    var keyword2 = document.getElementById('wrd2').innerHTML;
    console.log(keyword2);

    $(document).ready(function(){

        $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
                  {
            text: keyword1,
            tags: keyword1,
            tagmode: "any",
            format: "json",
            content_type: 1
        },
                  function(data) {
            var rnd = Math.floor(Math.random() * data.items.length);
            console.log("R", rnd);

            var image_src = data.items[rnd]['media']['m'].replace("_m", "_b");

            var image1 = document.getElementById('img1');

            image1.src = image_src;
        });

    });

    $(document).ready(function(){

        $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
                  {
            text: keyword2,
            tags: keyword2,
            tagmode: "any",
            format: "json",
            content_type: 1
        },
                  function(data) {
            var rnd = Math.floor(Math.random() * data.items.length);

            var image_src = data.items[rnd]['media']['m'].replace("_m", "_b");

            var image2 = document.getElementById('img2');

            image2.src = image_src;

        });

    });
}
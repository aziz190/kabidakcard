var selectedImage = "Sample_1";
lang = "Ar";

function showImage(id) {
    selectedImage = "Sample_" + id;
    $('#imgCard' + lang).attr("src", "cards/" + selectedImage + ".jpg");
    $("#imgCard" + lang).show();
    $("#canvas" + lang).hide();
}

function addTextToImage(imagePath, text, selectedImage) {

    var canvas = document.getElementById("canvas" + lang);
    var ctx = canvas.getContext("2d");
    // Draw Image function
    var img = new Image();
    img.src = imagePath;
    img.onload = function () {
        // ctx.font = "46px Dubai";
        if (selectedImage == "Sample_1") {
            ctx.fillStyle = "white";
        }

        // if (selectedImage == "Sample_2") {
        //     ctx.fillStyle = "#eae2cd";
        // }

        // if (selectedImage == "Sample_3") {
        //     ctx.fillStyle = "#eae2cd";
        // }

        // if (selectedImage == "Sample_4") {
        //     ctx.fillStyle = "#6f7476";
        // }


        // first pass draw everything
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        // draw the coloring (white-ish) layer, without blur
        ctx.filter = "none"; // remove filter
        ctx.textAlign = "center";

        if (selectedImage == "Sample_1") {
            ctx.font = "40px GE SS Two Bold";
            ctx.fillText(text, (canvas.width / 2) + 50, 1010);
        }
        // if (selectedImage == "Sample_2") {
        //     ctx.font = "35px Dubai";
        //     ctx.fillText(text, canvas.width / 2, 860);
        // }

        // if (selectedImage == "Sample_3") {
        //     ctx.fillText(text, canvas.width / 2, 800);
        // }
        // if (selectedImage == "Sample_4") {
        //     ctx.fillText(text, canvas.width / 2, 550);
        // }
    };

}

function reviewImage() {
    $("#imgCard" + lang).hide();
    $("#canvas" + lang).show();
    addTextToImage("cards/" + selectedImage + ".jpg", $("#MyName" + lang).val(), selectedImage);

}

$(document).ready(function () {

});


downloadIMG = function (el) {
    // get image URI from canvas object
    var canvas = document.getElementById("canvas" + lang);
    var imageURI = canvas.toDataURL("image/png");
    el.href = imageURI;
};
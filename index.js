function uploadVideo() {
    var video = document.querySelector('video');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();

    reader.addEventListener("load", function () {
        video.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}
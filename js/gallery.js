function ShowGallery(id) {
    $("#"+id).removeClass('gallery-hidden');
    $("body").addClass("disable-scroll");
}

function HideGallery(id) {
    $("#"+id).addClass('gallery-hidden');
    $("body").removeClass("disable-scroll");
}
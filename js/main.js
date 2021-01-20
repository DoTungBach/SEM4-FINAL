// Check session
$(document).ready(function() {
    var userId = sessionStorage.getItem("user_id");
    var userName = sessionStorage.getItem("user_name");



    if(userId != null){
        $('#check_session').remove();
        $('#logined').html('<button style="border:none;background:none;" class="userAcc">'+userName+'</button>')
        // https://api-finalpj.herokuapp.com/v1/user/'+userId+'
    }

    
})

var ngdung = $('#logined');
var danhsach = $('.option-list')[0];

$('#logined').click(function(){
    $('.option-list').toggleClass("option-list-out");
});
//checksession
function checkSession(){
    if(sessionStorage.getItem("user_id") != null){
        return true;
    }else{
        return false;
    }
}

// Lấy URL param
function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};
function logout() {
    sessionStorage.clear();
    window.location.assign('index.html');
}
function trangCaNhan(){
    window.location.assign('user.html');
}
function upmusic(){
    window.location.assign('dangnhac.html');
}
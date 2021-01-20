loadListNhac();

function loadListNhac(page,size){
    api_danhSachNhacTheoTacGia(page,size,getUrlParameter('id')).done(function(result) {
        var html;
        $.each(result.data, function(i, nhac) {  
            html += '<tr>';
            html += '<td>' + (i + 1) + '</td>';
            html += '<td><a href="nhac.html?id='+nhac.id+'">' + nhac.name + '</a></td>';
            html += '<td>' + nhac.price + '</td>';
            html += '</tr>';
        });
        $('#nhac').html(html);
    });
}

api_UserDetail(getUrlParameter('id')).done(result => {
    $('#ten_nguoi_dung').html(result.data.name);
    $('#imgProfile').attr('src', result.data.avatar);
})
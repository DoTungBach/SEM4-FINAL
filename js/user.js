// Thay đổi ảnh đại diện
$('#btnChangePicture').on('click', function () {
    $('#profilePicture').click();
});
$('#profilePicture').on('change', function () {
    api_updateAvatar(file_upload(this.files[0]), sessionStorage.getItem("user_id")).done(result => toastr.success(result.message));
    loadDuLieuNguoiDung();
});

// Load danh sách bài nhạc của người dùng
// $('#danhsachnhac-tab').on('click', function () {
    // loadListNhac();
// })

// Append dữ liệu người dùng
loadDuLieuNguoiDung();
function loadDuLieuNguoiDung() {
    api_UserDetail(sessionStorage.getItem("user_id")).done(function(result){
        $('#imgProfile').attr('src', get_file(result.data.avatar));
        $('#hovaten').html(result.data.name);
        $('#ngaysinh').html(result.data.dob);
        $('#sodienthoai').html(result.data.phone);
        $('#email').html(result.data.email);
        $('#socmt').html(result.data.identification);


        // Append dữ liệu nhạc của người dùng
        var html;
        $.each(result.data.songs, function(i, nhac) {  
            html += '<tr>';
            html += '<td>' + (i + 1) + '</td>';
            html += '<td><a href="nhac.html?id='+nhac.id+'">' + nhac.name + '</a></td>';
            html += '<td>' + nhac.price + '</td>';
            html += '<td><button class="btn btn-link" id="editbtn" onclick="append_idnhac_edit(';
            html += "'"+nhac.id+"'";
            html += ')" data-toggle="modal" data-target="#modalsuafile"><i class="far fa-edit"></i></button>';
            html += '<button class="btn btn-link" id="delbtn"><i class="far fa-times-circle"></i></button></td>';
            html += '</tr>';
        });
        $('#nhac').html(html);


        //load danh sach lich su mua hang
        var html1;
        $.each(result.data.transactions, function(i, v) {  
            html1 += '<tr>';
            html1 += '<td>' + (i + 1) + '</td>';
            html1 += '<td><a href="nhac.html?id='+v.song.id+'">' + v.song.name + '</a></td>';
            html1 += '<td>$' + v.song.price + '</td>';
            html1 += '<td>' + v.song.createAt + '</td>';
            html1 += '<td>' + v.payment + '</td>';
            html1 += '<td><a href="' + get_file(v.song.main) +'"><i class="fas fa-download"></i></a></td>';
            html1 += '</tr>';
        });
        $('#lichsumh').html(html1);
    })
}


// Append dữ liệu cũ vào modal chỉnh sửa bài nhạc
function append_idnhac_edit(id){
    $('#id_bai_nhac_edit').val("");
    $('#id_bai_nhac_edit').val(id);
    $('#id_tac_gia').val("");
    $('#mainUrlEdit').val("");
    $('#demoUrlEdit').val("");
    $('#theLoaiSelectEdit').empty();

    api_layNhacTheoId(id).done(result => {
        $('#tenBaiEdit').val(result.data.name);
        $('#giaTienEdit').val(result.data.price);
        $('#id_tac_gia').val(result.data.creator.id);
        $('#mainUrlEdit').val(result.data.main);
        $('#demoUrlEdit').val(result.data.demo);

        api_danhSachTheLoai().done(res => {
           $('#theLoaiSelectEdit').append('<option disabled selected value="">Thể loại</option>');
           $.each(res.data, function(i,v) {
                if (result.data.category.id == v.id) {
                    $('#theLoaiSelectEdit').append('<option value="'+v.id+'" selected>'+v.name+'</option>');
                }else{
                    $('#theLoaiSelectEdit').append('<option value="'+v.id+'">'+v.name+'</option>');

                }
           }) 
        })
    })
}

// Lưu dữ liệu đã chỉnh sửa
function saveEditNhac(){
    var main = $('#mainEdit')[0].files[0];
    var demo = $('#demoEdit')[0].files[0];
    var mainUrl;
    var demoUrl;
    if(!$('#mainEdit').val()) {
        if(!$('#demoEdit').val()) {
            mainUrl = $('#mainUrlEdit').val();
            demoUrl = $('#demoUrlEdit').val();
        } else {
            mainUrl = $('#mainUrlEdit').val();
            demoUrl = file_upload(demo);
        }
    } else {
        if(!$('#demoEdit').val()) {
            mainUrl = file_upload(main);
            demoUrl = $('#demoUrlEdit').val();
        } else {
            mainUrl = file_upload(main);
            demoUrl = file_upload(demo);
        }
    }
    api_suaBaiNhac($('#id_bai_nhac_edit').val(), $('#tenBaiEdit').val(), $('#id_tac_gia').val(), $('#theLoaiSelectEdit').val(), $('#giaTienEdit').val(), mainUrl, demoUrl).done(function(result) {
        if (result.data == null) {
            toastr.error(result.message);
        }else{
            toastr.success(result.message);
            $('#modalsuafile').modal('hide');
            loadDuLieuNguoiDung();
        } 
    });
}
function file_get_server() {
    return $.get({
        url: 'https://apiv2.gofile.io/getServer',
        async: false
    })
}

function file_api_upload(server, fd) {
    return $.post({
        url: 'https://'+ server +'.gofile.io/uploadFile',
        method: 'post',
        contentType: false,
        processData: false,
        data: fd,
        async: false
    })
}

function get_file(code) {
    if(code != null) {
        var download_url = null;
        $.get({
            url: 'https://apiv2.gofile.io/getUpload',
            data: {
                c: code 
            },
            async: false
        }).done(result => {
            var obj = result.data.files;
            download_url = obj[Object.keys(obj)[0]].link;
        });
        return download_url;
    }
}

function file_upload(file) {
    var code = null;
    var fd = new FormData();
    fd.append('email', 'minhndth1809026@fpt.edu.vn');
    fd.append('file', file);

    file_get_server().done(function(result) {
        file_api_upload(result.data.server, fd).done(function(res) {
            code = res.data.code;
        })
    })
    return code;
}

// function delete_file(code) {
//     $.get({
//         url: 'https://apiv2.gofile.io/deleteUpload',
//         data:{
//             c: code,
//             token: '7b8c9798ae64834615458185d6e5103fcd46ebf73f63ee0134a974a02b61954f'
//         }
//     }).done(result => load_file());
// }

// function load_file() {
//     $.get({
//         url: 'https://apiv2.gofile.io/getUploadsList',
//         data: {
//             token: '7b8c9798ae64834615458185d6e5103fcd46ebf73f63ee0134a974a02b61954f'
//         },
//         dataType:'json'
//     }).done(function(result) {
//         var html;
//             $.each(result.data, function(k, i) {
//                 html+='<tr>';
//                 $.each(i.files, function(p ,j) {
//                     html += '<td>' + j.name + '</td>';
//                     html+='<td>' + i.code + '</td>';
//                     html+='<td>' + i.adminCode + '</td>';
//                     html+='<td><a href="https://gofile.io/d/' + i.code +'">Link</a></td>';
//                     html+='<td><a href="https://' + i.server + '.gofile.io/download/'+ i.code + '/' + j.name +'">Link</a></td>';
//                     html+='<td><button onclick="delete_file('
//                     html+="'" + i.code + "',";
//                     html+="'" + i.adminCode + "'";
//                     html+= ')">Del</button></td>' 
//                 })
//                 html+='</tr>'
//             })
//             $('#list').html(html);
//     }) 
// }
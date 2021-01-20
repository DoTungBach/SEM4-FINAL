function api_danhSachNguoiDung(page,size){
	$.ajax({
		url:'https://api-finalpj.herokuapp.com/v1/user',
		data:{
			page: page,
			size: size
		},
		success:function(data){
			return data;
		}
		
	})
}

function themNguoiDung(email,pwd,phone,dob,iden,name){
	return $.post({
		// url:'https://api-finalpj.herokuapp.com/v1/user',
		url:'https://sem4-finalpj-api.herokuapp.com/user/register',
		contentType:'application/json',
		data:JSON.stringify({
			email:email,
			password:pwd,
			phone:phone,
			dob:dob,
			identification:iden,
			name:name
		})
	})
}

function api_checkEmail(email){
	return $.get({
		// url:'https://api-finalpj.herokuapp.com/v1/user/check-email',
		url:'https://sem4-finalpj-api.herokuapp.com/user/check',
		data:{
			email:email
		}
	})
}

function api_danhSachTheLoai() {
	return $.get({
		// url:'https://api-finalpj.herokuapp.com/v1/category'
		url:'https://sem4-finalpj-api.herokuapp.com/category/all'
	})
}

function api_danhSachBaiNhac(page,size) {
	return $.ajax({
		// url:'https://api-finalpj.herokuapp.com/v1/song',
		url:'https://sem4-finalpj-api.herokuapp.com/song/all',
		data:{
			page:page,
			size:size
		}
	})
}

function api_dangBaiNhac(name, creator_id, category_id, price, main, demo) {
	return $.post({
		// url:'https://api-finalpj.herokuapp.com/v1/song',
		url:'https://sem4-finalpj-api.herokuapp.com/song/add',
		contentType: 'application/json',
		dataType: 'json',
		data: JSON.stringify({
		    name: name,
		    creator: {
		    	id: creator_id
		    },
		    category: {
		    	id: category_id
		    },
		    price: price,
		    main: main,
		    demo: demo
		})
	})
}

function api_suaBaiNhac(id, name, creator_id, category_id, price, main, demo) {
	return $.ajax({
		// url:'https://api-finalpj.herokuapp.com/v1/song/'+id,
		url:'https://sem4-finalpj-api.herokuapp.com/song/edit?id='+id,
		contentType: 'application/json',
		dataType: 'json',
		method:'put',
		data: JSON.stringify({
		    name: name,
		    creator: {
		    	id: creator_id
		    },
		    category: {
		    	id: category_id
		    },
		    price: price,
		    main: main,
		    demo: demo
		})
	})
}

function api_layNhacTheoId(id) {
	return $.get({
		// url:'https://api-finalpj.herokuapp.com/v1/song/' + id
		url:'https://sem4-finalpj-api.herokuapp.com/song/get',
		data: {
			id: id
		}
	})
}

// function api_layNhacTheoIdEdit(id) {
// 	return $.get({
// 		url:'https://api-finalpj.herokuapp.com/v1/song/edit',
// 		data:{ id: id }
// 	})
// }

function api_updateNhacDaThanhToan(id) {
	return $.ajax({
		// url:'https://api-finalpj.herokuapp.com/v1/song/pay',
		url:'https://sem4-finalpj-api.herokuapp.com/song/pay',
		data:{ id: id },
		method:'put'
	})
}

function api_themTransactionThanhToanThanhCong(song_id, customer_id) {
	return $.post({
		// url:'https://api-finalpj.herokuapp.com/v1/transaction',
		url:'https://sem4-finalpj-api.herokuapp.com/transaction/add',
		contentType: 'application/json',
		dataType: 'json',
		data: JSON.stringify({
		    payment: 'paypal',
		    song:{
		    	id: song_id
		    },
		    customer: {
		    	id: customer_id
		    }
		})
	})
}

function api_login(email,password){
	return $.post({
		// url:'https://api-finalpj.herokuapp.com/v1/user/login',
		url:'https://sem4-finalpj-api.herokuapp.com/user/login',
		data:{
			email:email,
			password:password,
		}
	})
}
function api_UserDetail(id){
	return $.get({
		// url:'https://api-finalpj.herokuapp.com/v1/user/'+id
		url:'https://sem4-finalpj-api.herokuapp.com/user/get',
		data:{
			id: id
		}
	})
}

function api_top20User(){
	return $.ajax({
		// url:'https://api-finalpj.herokuapp.com/v1/user/top-20'
		url:'https://sem4-finalpj-api.herokuapp.com/user/top-20'
	})
}

function api_topBeat(){
	return $.ajax({
		// url:'https://api-finalpj.herokuapp.com/v1/song/top-10'
		url:'https://sem4-finalpj-api.herokuapp.com/song/top-10'
	})
}

function api_updateAvatar(avatar,id){
	return $.ajax({
		// url:'https://api-finalpj.herokuapp.com/v1/user/avatar',
		url:'https://sem4-finalpj-api.herokuapp.com/user/avatar',
		data:{
			avatar: avatar,
			id: id
		},
		method: 'put',
		async: false
	})
}

function api_updateDemo(demo,id){
	return $.ajax({
		// url:'https://api-finalpj.herokuapp.com/v1/song/demo',
		url:'https://sem4-finalpj-api.herokuapp.com/song/demo',
		data:{
			demo: demo,
			id: id
		},
		method: 'put',
		async: false
	})
}

function api_updateMain(main,id){
	return $.ajax({
		// url:'https://api-finalpj.herokuapp.com/v1/song/main',
		url:'https://sem4-finalpj-api.herokuapp.com/song/main',
		data:{
			main: main,
			id: id
		},
		method: 'put',
		async: false
	})
}

function api_danhsachgiaodichtheonguoimua(page,size,idNgMua){
	return $.get({
		// url:'https://api-finalpj.herokuapp.com/v1/transaction/customer',
		url:'https://sem4-finalpj-api.herokuapp.com/transaction/customer',
		data:{
			page:page,
			size:size,
			id: idNgMua
		}
	})
}

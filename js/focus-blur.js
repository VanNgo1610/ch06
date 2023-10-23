function checkUsername(){                                          //Khai báo hàm
    var username = el.value;                                       //lưu tên người dùng trong một biến
    if(username.lenght < 5){                                       //nếu tên người dùng ít hơn 5 kí tự
        elMsg.className = 'warning';                               //thay đổi class trên lời nhắn
        elMsg.textContent = 'Not long enough, yet...';             //cập nhật lời nhắn
    } else{                                                        //còn lại
        elMsg.textContent = '';                                    //xóa lời nhắn
    }
}

function tipUserName(){                                            //Khai báo hàm
    elMsg.className = 'tip';                                       //thay đổi class trên lời nhắn
    elMsg.innerHTML = 'Username must be at least 5 characters';    //thêm lời nhắn
}

val el = document.getElementById('username');                      //nhập tên đăng nhập
var elMsg = document.getElementById('feedback');                   //nhân tố giữ lời nhắn

//khi nhập tên người dùng thêm/giảm chức năng gọi tiêu điểm ở trên
el.addEventListener('focus', tipUserName, false);                  //tập trung vào tipUsername()
el.addEventListener('blur', checkUsername, false);                 //làm mờ checkUsername()
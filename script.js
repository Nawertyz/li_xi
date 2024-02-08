document.getElementById("choice-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var choice = document.getElementById("choice").value.toLowerCase();
    var resultDiv = document.getElementById("result");
    
    if (choice === "có" || choice === "cóa" || choice === "cóaa" || choice === "cóaaa" || choice === "cóaaaa" || choice === "cóaaaaa" || choice === "cóaaaaaa" || choice === "cóaaaaaaa" || choice === "cóaaaaaaaa") {
        // Sử dụng AJAX để gửi yêu cầu đến máy chủ
        var xhttp = new XMLHttpRequest() ;
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // Khi nhận được phản hồi từ máy chủ, cập nhật nội dung trang
                document.body.innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "boc-li-xi.html", true);
        xhttp.send();
    } else if (choice === "không" || choice ==="hong" || choice ==="hongg" || choice ==="honggg" || choice ==="hongggg" || choice ==="honggggg"|| choice ==="nu nu" || choice ==="no no" || choice ==="nu" || choice ==="no" ) {
        resultDiv.innerHTML = "<p>Ơ kìa, em bé không tham gia là không có lì xì đâu đó </p>";
        resultDiv.classList.remove("hidden"); // Hiển thị thông báo
    } else {
        resultDiv.innerHTML = "<p>Bé không viết được gì khác ngoài 'có' hoặc 'không' đâu</p>";
        resultDiv.classList.remove("hidden"); // Hiển thị thông báo
    }
});


var daChonBaoLixi = false; // Biến để kiểm tra xem đã chọn bao lì xì chưa

function hienMenhGiaConLai(baoDaChon) {
    // Hiển thị mệnh giá của các bao lì xì còn lại
    for (var i = 1; i <= 5; i++) {
        if (i !== baoDaChon) {
            var menhGia = rutMenhGia(); // Lấy mệnh giá ngẫu nhiên cho bao lì xì
            document.getElementById(`menh-gia-${i}`).innerText = menhGia;
            document.getElementById(`menh-gia-${i}`).classList.remove('hidden');
        }
    }
}

function chonBaoLixi(bao) { 
   
    if (!daChonBaoLixi) {
        var menhGia = rutMenhGia(); // Lấy mệnh giá ngẫu nhiên cho bao lì xì đã chọn
        var baoLixiChonText = `Bao lì xì ${bao} có mệnh giá là ${menhGia} `;

        // Hiển thị thông báo và mệnh giá của bao lì xì đã chọn
        document.getElementById('bao-lixo-chon-text').innerText = baoLixiChonText;
        document.getElementById('bao-lixo-chon').classList.remove('hidden');

        // Gọi hàm để hiển thị mệnh giá của các bao lì xì còn lại sau 1 giây
        setTimeout(function() {
            hienMenhGiaConLai(bao);
        }, 300);

        daChonBaoLixi = true;
    }
   
}


function rutMenhGia() {
    var menhGia = ["1,000 đồng", "2,000 đồng", "5,000 đồng", "10,000 đồng", "20,000 đồng", "50,000 đồng", "100,000 đồng", "200,000 đồng", "500,000 đồng", "150,000 đồng", "250,000 đồng", "350,000 đồng", "450,000 đồng", "400,000 đồng"];
    return menhGia[Math.floor(Math.random() * menhGia.length)];
}


function chucTet() {
    // Chuyển sang trang chúc Tết
    window.location.href = "chuc-tet.html";
}

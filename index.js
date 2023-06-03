// Bài tập 1:

function LayDiemUuTienKhuVuc (KhuVuc) {
    switch (KhuVuc) {
        case "kvA": {
            return 2;
        }
        case "kvB": {
            return 1;
        }
        case "kvC": {
            return 0.5;
        }
        case "kvX": {
            return 0;
        }
    }
}

function LayDiemUuTienDoiTuong (DoiTuong) {
    switch (DoiTuong) {
        case "dt1": {
            return 2.5;
        }
        case "dt2": {
            return 1.5;
        }
        case "dt3": {
            return 1;
        }
        case "dt0": {
            return 0;
        }
    }
}

function LayTongDiem (diem1, diem2, diem3) {
    var layKhuvuc = document.getElementById("khuVuc").value;
    var layDoituong = document.getElementById("doiTuong").value;
    var diemUTKV = LayDiemUuTienKhuVuc(layKhuvuc);
    var diemUTDT = LayDiemUuTienDoiTuong(layDoituong);
    return tongdiem = diem1 + diem2 + diem3 + diemUTDT + diemUTKV;
}

function KiemTraDauHayRot (diem1, diem2, diem3, tongdiem) {
    var diemChuan = document.getElementById("diemChuan").value * 1;
    tongdiem = LayTongDiem(diem1,diem2,diem3);
    if (diem1 == 0 || diem2 == 0 || diem3 == 0) return false;
    if (tongdiem < diemChuan) return false;
    return true;
}

document.getElementById("ketQuaThi").onclick = function () {
    var diem1 = document.getElementById("diem1").value * 1;
    var diem2 = document.getElementById("diem2").value * 1;
    var diem3 = document.getElementById("diem3").value * 1;
    var tongdiem = LayTongDiem(diem1,diem2,diem3);
    var check = KiemTraDauHayRot(diem1,diem2,diem3,tongdiem);
    console.log(tongdiem);
    if (check == true) {
        document.getElementById("xuatkqThi").innerHTML = `Bạn đã đậu. Tổng điểm thi của bạn là: ${tongdiem}`;
    }
    else {
        document.getElementById("xuatkqThi").innerHTML = `Bạn đã rớt. Tổng điểm thi của bạn là: ${tongdiem}`;
    }
}

//Bài tập 2:

function TinhTienDien (soKW) {
    if (soKW < 50 && soKW >= 0) return 500 * soKW;
    else if (50 <= soKW && soKW < 100) return 50 * 500 + 650 * (soKW-50);
    else if (100 <= soKW && soKW <200) return 50 * 500 + 50 * 650 + 850 * (soKW - 100);
    else if (200 <= soKW && soKW < 350) return 50 * (500 + 650) + 850 * 100 + (soKW - 200) * 1100;
    else return 50 * (500 + 650) + 850 * 100 + 150 * 1100 + (soKW - 350) * 1300;
}

document.getElementById("tinhtienDien").onclick = function () {
    var hoten = document.getElementById("hoTen").value;
    var soKW = document.getElementById("soKW").value * 1;
    console.log(hoten);
    console.log(soKW);
    var tien = TinhTienDien(soKW);
    console.log(tongtiendien);
    var tongtiendien = tien.toLocaleString("vn-VN", {
        style: "currency",
        currency: "VND",
      });
    document.getElementById("xuathoadon").innerHTML = `
    Họ tên: ${hoten}; Tiền điện: ${tongtiendien}
    `
}


// Bài tập 3:
function TinhThuNhapChiuThue (thuNhapNam, songuoiphuthuoc) {
    return thuNhapNam - 4* - songuoiphuthuoc*1.6;
}d

function TinhThueSuat(ct) {
    if (ct <= 60) return ct * 5 /100;
    else if (60 < ct && ct <= 120) return (ct - 60) * 0.1 + 60 * 0.05;
    else if (120 < ct && ct <= 210) return 60 * 0.05 + 0.1 * 60 + 0.15 * (ct-120);
    else if (210 <  ct && ct <= 384) return 60 * 0.05 + 0.1 * 60 + 0.15 * 90 + 0.2 * (ct-210);
    else if (384 < ct && ct <= 624) return 60 * 0.05 + 0.1 * 60 + 0.15 * 90 + 0.2 * 174 + 0.25 (ct-384);
    else if (624 < ct && ct <=960) return 60 * 0.05 + 0.1 * 60 + 0.15 * 90 + 0.2 * 174 + 0.25 * 240 + 0.3 * (ct-624);
    else return 60 * 0.05 + 0.1 * 60 + 0.15 * 90 + 0.2 * 174 + 0.25 * 240 + 0.3 * 336 + (ct-960);
}

document.getElementById("tinhThue").onclick = function () {
    var hoten = document.getElementById("hotenThue").value;
    var thuNhapNam = document.getElementById("thuNhapNam").value * 1;
    var soNguoi = document.getElementById("soNguoi").value * 1;
    var thunhapCT = TinhThuNhapChiuThue(thuNhapNam,soNguoi);
    var 
}
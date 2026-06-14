// =========================================================
//  Thư viện ảnh tương tác – script.js
//  Hai hàm chính: upDate() và unDo()
// =========================================================

// Văn bản mặc định hiển thị khi chưa hover
const DEFAULT_CAPTION = "Di chuột qua hình ảnh bên dưới để hiển thị tại đây.";

// Lấy phần tử khung xem trước và caption bằng getElementById
const imageDiv = document.getElementById("image");
const caption  = document.getElementById("caption");


// ---------------------------------------------------------
//  Hàm upDate – gọi khi chuột di VÀO một ảnh thumbnail
//  @param {HTMLImageElement} previewPic – phần tử <img> được hover
// ---------------------------------------------------------
function upDate(previewPic) {

  // Bước 4a: kiểm tra sự kiện bằng console.log
  console.log("upDate() được gọi – sự kiện mouseenter kích hoạt!");

  // Bước 4b: in thông tin alt và src của ảnh
  console.log("Alt:", previewPic.alt);
  console.log("Src:", previewPic.src);

  // Bước 4c: cập nhật văn bản của phần tử #caption bên trong #image
  caption.textContent = previewPic.alt;

  // Bước 4e: đổi ảnh nền của div#image sang ảnh đang hover
  imageDiv.style.backgroundImage = `url('${previewPic.src}')`;

  // Thêm class để CSS định vị lại caption xuống góc dưới
  imageDiv.classList.add("has-image");
}


// ---------------------------------------------------------
//  Hàm unDo – gọi khi chuột RỜI KHỎI một ảnh thumbnail
// ---------------------------------------------------------
function unDo() {

  // Bước 5a: xoá ảnh nền, trở về background trống
  imageDiv.style.backgroundImage = "";

  // Bước 5b: khôi phục văn bản gốc cho caption
  caption.textContent = DEFAULT_CAPTION;

  // Xoá class has-image để caption về giữa như ban đầu
  imageDiv.classList.remove("has-image");

  console.log("unDo() được gọi – đã khôi phục trạng thái ban đầu.");
}


// ---------------------------------------------------------
//  Gắn sự kiện mouseenter / mouseleave cho từng thumbnail
//  Dùng querySelectorAll để lấy tất cả ảnh có class .thumb
// ---------------------------------------------------------
const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach(function(img) {
  img.addEventListener("mouseenter", function() {
    upDate(img);          // truyền phần tử <img> vào hàm upDate
  });

  img.addEventListener("mouseleave", function() {
    unDo();               // không cần tham số
  });
});
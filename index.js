let c = document.createElement("canvas");
ctx = c.getContext("2d");
let images = ["monalisa.jpg", "van_gogh.jpg", "dalga.jpeg", "inci.jpg"];

let img1 = new Image();

img1.onload = function () {
  document.getElementById("image").remove();

  w = img1.width;
  h = img1.height;

  c.width = w;
  c.height = h;
  ctx.drawImage(img1, 0, 0);

  var pixelArr = ctx.getImageData(0, 0, w, h).data;
  sample_size = 16;

  for (let y = 0; y < h; y += sample_size) {
    for (let x = 0; x < w; x += sample_size) {
      let p = (x + y * w) * 4;
      var radius = 20;
      ctx.fillStyle =
        "rgba(" +
        pixelArr[p] +
        "," +
        pixelArr[p + 1] +
        "," +
        pixelArr[p + 2] +
        "," +
        pixelArr[p + 3] +
        ")";
      ctx.beginPath();
      ctx.arc(x, y, sample_size, radius, 2 * Math.PI, false);
      ctx.fill();
    }
  }

  let img2 = new Image();
  img2.width = 600;
  img2.src = c.toDataURL("image/jpeg");
  document.body.appendChild(img2);
};

img1.src = document.getElementById("image").src;

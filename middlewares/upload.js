const multer = require("multer");
const path = require("path");

const tempDir = path.join(__dirname, "../", "temp");

const storage = multer.diskStorage({
  destination: tempDir,
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;

// Jimp.read("lenna.png")
//   .then((lenna) => {
//     return lenna
//       .resize(256, 256) // resize
//       .quality(60) // set JPEG quality
//       .greyscale() // set greyscale
//       .write("lena-small-bw.jpg"); // save
//   })
//   .catch((err) => {
//     console.error(err);
//   });

const ImageKit = require("@imagekit/nodejs");

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});



async function uploadFile(file) {
  try {
    const result = await client.files.upload({
      file,
      fileName: "music_" + Date.now()
    });
    console.log("problem")

    return result;
  } catch (err) {
    console.error("Upload error:", err);
    throw err;
  }
}

module.exports = uploadFile ;
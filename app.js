const NodeRSA = require("node-rsa");
const fs = require("fs");
const qr = require("qr-image");
const publicKey = fs.readFileSync("./keys/rsa_1024_public_key.txt");
const privateKey = fs.readFileSync("./keys/rsa_1024_private_key.txt");
//const data = "HTC_J2048839594";
const data = { type: "HTC", de: 100, sn: "J2048839594" };

// 公钥加密
function encrypt(data) {
  const nodersa = new NodeRSA(publicKey, "pkcs8-public");
  //nodersa.setOptions({ encryptionScheme: "pkcs1" });
  const encrypted = nodersa.encrypt(data, "base64");
  return encrypted;
}

// 私钥解密
function decrypt(data) {
  const nodersa = new NodeRSA(privateKey, "pkcs8-private");
  const decrypted = nodersa.decrypt(data, "utf8");
  return decrypted;
}

// 私钥签名
function sign(data) {
  const nodersa = new NodeRSA(privateKey, "pkcs8-private");
  //nodersa.setOptions({ encryptionScheme: "pkcs1" });
  const encrypted = nodersa.sign(data);
  return encrypted;
}

// 公钥验证
function verify(data, signedData) {
  const nodersa = new NodeRSA(publicKey, "pkcs8-public");
  const decrypted = nodersa.verify(data, signedData);
  return decrypted;
}

// 公钥加密
function decrypt1(data) {
  const nodersa = new NodeRSA(publicKey, "pkcs8-public");
  //nodersa.setOptions({ encryptionScheme: "pkcs1" });
  const encrypted = nodersa.decrypt(data, "base64");
  return encrypted;
}

// SAMPLE
// 加密模式：公钥加密-私钥解密
const encrypted = encrypt(data);
console.log("密文:", encrypted);
const decrypted = decrypt(encrypted);
console.log("明文:", decrypted);
var qr_svg = qr.image(encrypted, { type: "svg", ec_level: "L" });
qr_svg.pipe(require("fs").createWriteStream("img_qr_encrypted.svg"));
var svg_string = qr.imageSync("QR", { type: "svg", ec_level: "L" });

// 签名模式：私钥签名-公钥验证
const signature = sign(data);
console.log("签名:", signature.toString("base64"));
const verification = verify(data, signature);
console.log("验签:", verification);
var qr_svg = qr.image(signature, { type: "svg", ec_level: "L" });
qr_svg.pipe(require("fs").createWriteStream("img_qr_signature.svg"));
var svg_string = qr.imageSync("QR", { type: "svg", ec_level: "L" });

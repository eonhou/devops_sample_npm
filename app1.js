//加密以及签名验证
//签名防止参数篡改、加密防止参数敏感信息泄漏
//双方都维护一套公私钥, 发送方（a，b）-> 接收方 （c，d）
//a. 自己的私钥签名
//b. 对方的公钥加密
//c. 私钥解密
//d. 公钥验证签名，参数是否被篡改 && 调用方是否是期望的

const NodeRSA = require("node-rsa");
const BASE64 = "base64";
const UTF8 = "utf8";
const pkcsSize = 512;
const str = "服务端测试 -> ";
demo();
function demo() {
  pkcsType = "pkcs8"; //不为空则 设置为传入参数，为空则 设置为 pkcs8
  console.log("pkcsType=" + pkcsType);

  // 1.创建RSA对象，并指定 秘钥长度
  var key = new NodeRSA({ b: pkcsSize });
  key.setOptions({ encryptionScheme: "pkcs1" }); //指定加密格式

  // 2.生成 公钥私钥，使用 pkcs8标准，pem格式
  var publicPem = key.exportKey(pkcsType + "-public-pem"); //制定输出格式
  var privatePem = key.exportKey(pkcsType + "-private-pem");
  //console.log(key.$options);
  console.log(pkcsType + "公钥:\n", publicPem);
  console.log(pkcsType + "私钥:\n", privatePem);

  //---------------------demo1：服务端私钥加密公钥解密-------------------------------
  // 3.使用 私钥 加密 数据，并指定 字符编码 和 字符集
  var encryData = key.encryptPrivate(str, BASE64, UTF8);
  console.log("\n私钥加密后的数据：\n", encryData); //加密后数据为 base64 编码

  // 4.使用 公钥 解密 数据，并指定字符集
  var decryptData = key.decryptPublic(encryData, UTF8);
  console.log("\n公钥解密后的数据：\n", decryptData);

  //---------------------demo2：服务端加载公钥后解密----------------------
  // 1.创建RSA对象，并指定 秘钥长度
  var publicKey = new NodeRSA({ b: pkcsSize });

  // 2.导入 公钥，并指定使用 pkcs标准，pem格式
  publicKey.importKey(publicPem, pkcsType + "-public-pem");

  // 3.使用 公钥 解密数据
  var decrypted = publicKey.decryptPublic(encryData, UTF8);
  console.log("\n使用公钥解密后的数据：\n", decrypted);

  //---------------------demo3：服务端使用私钥签名------------------------

  // 1. 私钥
  var privateKey = new NodeRSA({ b: pkcsSize });

  // 2.导入 私钥，并指定使用 pkcs标准，pem格式
  privateKey.importKey(privatePem, pkcsType + "-private-pem");

  var signedData = privateKey.sign(Buffer.from(str), BASE64).toString(BASE64);

  console.log("\n使用私钥签名:", signedData);

  //---------------------demo4：服务端使用公钥验证签名---------------------

  var result = publicKey.verify(Buffer.from(str), signedData, "Buffer", BASE64);

  console.log("\n验证签名结果", result);
}

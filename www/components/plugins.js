// This is a JavaScript file
$(document).on("click", "#camera", function(){
  navigator.camera.getPicture(onSucess, onFail, {
  quality:56,
  destinationType:  Camera.DestinationType.FILE_URI,
  correctOientation: true,
   saveToPhotoAlbum: true
  });
  function onSucess(imageURI){
    var image = document.getElementById('imagem');
    image.src = imageURI;
   
}
  function onFail(mensage){
    alert("fail because: "+mensage);
  }
});
$(document).on("click", "#codigo", function(){
   cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert("We got a barcode\n" +
                "Resultado: " + result.text + "\n" +
                "Formato: " + result.format + "\n" +
                "Cancelado: " + result.cancelled);
      },
      function (error) {
          alert("Scanning failed: " + error);
      },
      {
          preferFrontCamera : false, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: true, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417,CODE_39", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
      }
   );
});
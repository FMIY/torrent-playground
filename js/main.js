var client = new WebTorrent()

var downloadFile = function(){
  magnetUri = document.getElementById("magnetUri").value;
  console.log('Starting download of :',magnetUri);
  client.add(magnetUri, function (torrent) {
    console.log('Found torrent! (info hash:', torrent.infoHash,')')

    torrent.on('download', function(chunkSize){
      // console.log('chunk size: ' + chunkSize);
      // console.log('total downloaded: ' + torrent.downloaded);
      // console.log('download speed: ' + torrent.downloadSpeed());
      console.log('progress: ' + Math.round(torrent.progress * 100) + '%');
    })

    torrent.files.forEach(function (file) {
        file.appendTo('#containerElement', function (err, elem) {
            if (err) throw err // file failed to download or display in the DOM
                console.log('New DOM node with the content', elem)
            });
        })
    })
}





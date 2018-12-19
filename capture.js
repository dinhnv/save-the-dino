const ffmpeg = require("ffmpeg-static").path;
const { spawn } = require("child_process");
const cv = require("opencv4nodejs");

const IMG_PATH = './screenshot.jpg'
const W = 3360 / 2
const H = 2100

/*
use `ffmpeg -f avfoundation -list_devices true -i ""`
to list all devices with index
`ffmpeg -probesize 10M -f avfoundation -framerate 60 -i 2 -vframes 1 output.jpeg`
more https://trac.ffmpeg.org/wiki/Capture/Desktop
*/
const capture = spawn(
    ffmpeg,
  ["-probesize", "5M", "-f", "avfoundation", "-framerate", "60", 
    "-i", "1", "-vframes", "1", "-y", IMG_PATH],
  { stdio: "pipe" }
);

capture.on('exit', (code, signal) => {
  if (code != 0) {
    console.log(`capture exit status ${code}, ${signal}`)
    return
  }
  console.log(`success ${IMG_PATH}!`)
})


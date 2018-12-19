const cv = require("opencv4nodejs");

const IMG_PATH = './capture.jpg'
const W = 3360 / 2
const H = 2100

const dino = cv.imread('./resources/dino.jpg')


const img = cv.imread(IMG_PATH)
console.log('[Original]:')
console.log(img)

const croppedImg = img.getRegion(new cv.Rect(0, 0, W, H))
console.log('[Cropped]:')
console.log(croppedImg)

const grayImg = croppedImg.bgrToGray()
const matched = grayImg.matchTemplate(dino, 3) // cv.TM_CCOEFF_NORMED)
console.log(matched)
// console.log('[Gray]:')
// console.log(grayImg)
// cv.imwrite('./resize.jpg', grayImg)
// // cv.imshowWait('resize', grayImg)

// console.log(grayImg.sum())


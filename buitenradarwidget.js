const imgUrl  = "https://image.buienradar.nl/2.0/image/single/RadarMapRainNL?height=256&width=256&renderBackground=True&renderBranding=False&renderText=True"

const imgReq = await new Request(imgUrl)
const img = await imgReq.loadImage()

let widget = createWidget(img)
Script.setWidget(widget)
Script.complete()
await widget.presentSmall(widget)


function createWidget(img) {
  let widget = new ListWidget()
  widget.backgroundColor = new Color("#ffffff")

  widget.url = imgUrl
  let image = widget.addImage(img)
  image.centerAlignImage()

  return widget
}


const imgUrl  = "https://image.buienradar.nl/2.0/image/single/RadarMapRainNL?height=512&width=512&renderBackground=True&renderBranding=False&renderText=True"

const imgReq = await new Request(imgUrl)
const img = await imgReq.loadImage()

let widget = createWidget(img)
Script.setWidget(widget)
Script.complete()
await widget.presentSmall(widget)


function createWidget(img) {
  let widget = new ListWidget()
  widget.backgroundColor = new Color("#00007E")
  widget.setPadding(0, 0, 0, 0)
  
  widget.url = imgUrl
  let image = widget.addImage(img)
  image.centerAlignImage()
  image.applyFillingContentMode()
  
  return widget
}

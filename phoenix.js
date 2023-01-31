// Focus on File Manager Commander One when a window is closed
// Before focus, check that the recent app was Commander One


const identifier = Event.on('windowDidClose', (wnd) => {
  app = wnd.app()
  name = app.name()
//  console.log('Window closed:', name)
  
  focus = Window.focused()
  if ((!focus) && 
    (name == 'Preview' || 
     name == "Microsoft Word" || 
     name == "Microsoft Excel" || 
     name == "Microsoft Powerpoint")) {
    recentapp = Window.recent()[0].app()
    name = recentapp.name()
    if (name == "Commander One") {
        recentapp.focus()
        console.log("Focus set to Commander One")
    }
  }
})

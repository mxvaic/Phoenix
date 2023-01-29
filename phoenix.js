// Focus on File Manager Commander One when a window is closed
// Before focus, check that the recent app was Commander One


const identifier = Event.on('windowDidClose', (closedwindow) => {
  app = closedwindow.app()
  if (!app) {
    return
  }  
  name = app.name()
  if (!name) {
    return
  }  
  console.log('Window closed:', name)
  
  if (name == 'Preview' || name == "Microsoft Word" || name == "Microsoft Excel" || name == "Microsoft Powerpoint") {
    recentapp = Window.recent()[0].app()
    if (!recentapp) {
      return
    }  
    name = recentapp.name()
    if (!name) {
      return
    }  
    console.log('Recent app:', name)
    if (name == "Commander One") {
      recentapp.focus()
    }
  }
})






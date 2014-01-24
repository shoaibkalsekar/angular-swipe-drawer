# angular-swipe-drawer

This repo is aimed at solving mobile issues. Pure CSS solution should be all that's needed for desktop.

Only have the ability to test on Android. Chrome / AOSP are the browsers being developed for on Android.

### Pure CSS
- Suffers from inability to retract or show the address bar while the drawer is open.

### JavaScript to stop scroll / propagation of scroll
- Testing so far seems to indicate that although you can track the current scroll position of the document, you can't cancel a scroll / touchmove mid scroll / touch. The cancel only takes effect after the touchend.
- Can cancel the scroll event for everything.
- Stopping propagation doesn't seem to work.
- Canceling scroll event on reaching the drawers limits won't work due to first point.

### Wrapper using window.height
- Suffers from content 'snapping' to top when the wrappers height changes.
- Little buggy overall
- Possibly rectified by giving it's children a negative top margin / top value? Getting kind of hacky again though
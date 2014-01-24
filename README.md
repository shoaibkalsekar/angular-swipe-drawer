# angular-swipe-drawer

This repo is aimed at solving mobile issues. Pure CSS solution should be all that's needed for desktop.

Only have the ability to test on Android. Chrome / AOSP are the browsers being developed for on Android.

### Pure CSS
- Suffers from inability to retract or show the address bar while the drawer is open.

### Wrapper using window.height
- Suffers from content 'snapping' to top when the wrappers height changes.
- Little buggy overall
- Possibly rectified by giving it's children a negative top margin / top value? Getting kind of hacky again though
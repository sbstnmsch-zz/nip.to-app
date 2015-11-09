# Browser vs. Home-Screen Detection
use a `#bW9iaWxlLXVuc3VwcG9...`-standard url-hash to store the users
fingerprint.
Once put to home-screen the url-hash is the same as in
mobile safari - for the user to be uniquely identified
between those two modes (mobile safari and home-screen).

Both modes save fingerprint to localStorage as well.

## Use-Case
- no fingerprint hash in url
  - hash in localStorage
    - set hash to url
  - no hash in localStorage
    - (new user):
      - generate fingerprint
      - save to localStorage
      - set hash to url
- fingerprint in url
  - hash in localStorage
    - do nothing
  - no hash in localStorage
    - (app installed to homescreen!)
      - save hash to localStorage

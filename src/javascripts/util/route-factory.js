// Parsing routes like nip.to/#$uid/$action

export class RouteFactory {

  constructor(_window) {
    let
      route = _window.location.hash,
      results = /#?([^\/]*)\/?([^\/]*)/.exec(route);

    this.uid = '';
    this.action = '';

    if (results) {
      if (results[1]) {
        this.uid = results[1].length ? results[1] : null;
      }
      if (results[2]) {
        this.action = results[2];
      }
    }
  }

  get hash() {
    return this.toString();
  }

  toString() {
    return `${this.uid}${this.action ? '/' + this.action : ''}`;
  }

}

export class ShareFactory {

  constructor() {

  }

  getLink() {
    return '';
  }

  getUrl(coords) {
    return `http://nip.to/#/${coords.latitude},${coords.longitude}`;
  }

}

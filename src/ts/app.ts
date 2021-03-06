export class App {
  //Application Contructor
  initialize() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  }
  onDeviceReady(event: Event) {
    this.receivedEvent('deviceready');
  }
  // Update DOM on a Received Event
  receivedEvent(id: string) {
    const parentElement = document.getElementById(id)!;
    const listeningElement = parentElement.querySelector('.listening')!;
    const receivedElement = parentElement.querySelector('.received')!;

    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');

    console.log('Received Event: ' + id);
  }
}
!function () {

  function bp_eventbrite_order_complete() {
    console.log('Order complete!');
    //<!-- Event snippet for Website traffic conversion page -->
    // gtag('event', 'conversion', { 'send_to': 'AW-11305144475/2gvJCK2UgNYYEJuh244q' }); //TODO
  };

  function openRegistrationPopup() {
    // creating
    //<div id="eventbrite-widget-container-722335624297" style="width: 100%"></div>

    var content = document.createElement('div');
    content.id = 'eventbrite-widget-container-722335624297'; // TODO
    var loader = document.createElement('div');
    loader.className = 'lds-dual-ring';
    content.appendChild(loader);

    window.becomePeace.showPopup({
      bodyContent: content,
      onClose: function () {
        var loc = window.location
        if ('pushState' in history)
          history.pushState('', document.title, loc.pathname + loc.search);
        else {
          loc.hash = '';
        }
      }
    });

    if (window.location.hash != '#checkout') {
      window.location.hash = '#checkout';
    }

    window.EBWidgets.createWidget({
      // Required
      widgetType: 'checkout',
      eventId: '722335624297',
      // test
      // modal: true,
      // modalTriggerElementId: 'bp-register-1',
      iframeContainerId: 'eventbrite-widget-container-722335624297',
      // Optional
      iframeContainerHeight: 720, // Widget height in pixels. Defaults to a minimum of 425px if not provided
      onOrderComplete: bp_eventbrite_order_complete // Method called when an order has successfully completed
    });
  }

  // On Dom ready

  if (window.location.hash == '#checkout') {
    openRegistrationPopup();
  }

  var isMobile = window.screen.width < 480;
  var video = document.getElementById(isMobile ? 'bp-hero-video-mobile' : 'bp-hero-video-desktop');
  if (video) {
    document.getElementById('bp-sound-toggle').addEventListener("click", () => {
      video.muted = !video.muted;
      document.getElementById('bp-sound-toggle__on').style.display = !video.muted ? 'inline-block' : 'none';
      document.getElementById('bp-sound-toggle__off').style.display = video.muted ? 'inline-block' : 'none';
    });
  }

  document.querySelectorAll('.bp-register').forEach(function (registerButton) {
    registerButton.addEventListener('click', function (clickEvent) {
      clickEvent.preventDefault();
      openRegistrationPopup();
    });
  });

}();

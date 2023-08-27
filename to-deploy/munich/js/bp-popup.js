!function (w, document) {
  //   <div class="bp-popup">
  //   <div class="bp-popup__header">
  //     <a href="#" class="bp-popup__close-button">
  //       <img src="https://becomepeace.live/wp-content/uploads/2023/08/close.svg" alt="close" />
  //     </a>
  //   </div>
  //   <div class="bp-popup__body">
  //   <iframe src="https://www.youtube.com/embed/DSk4BaN68Nw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  //   </div>
  // </div>
  function createHeader(onCloseFun) {
    var header = document.createElement('div');
    header.className = 'bp-popup__header';

    // close button
    var closeButton = document.createElement('a');
    closeButton.href = '#';
    closeButton.addEventListener('click', onCloseFun);
    closeButton.className = 'bp-popup__close-button';

    // close button image
    var closeImg = document.createElement('img');
    closeImg.alt = 'close';
    closeImg.src = '/images/close.svg';

    // combine
    closeButton.appendChild(closeImg);
    header.appendChild(closeButton);

    return header;
  }

  function createBody(content) {
    var body = document.createElement('div');
    body.className = 'bp-popup__body';
    body.append(content);
    return body;
  }

  function createPopup(options) {
    var popup = document.createElement('div');
    popup.className = 'bp-popup';

    var header = createHeader(options.onCloseFun);
    var body = createBody(options.bodyContent);

    popup.appendChild(header);
    popup.appendChild(body);

    return popup;
  }

  w.becomePeace = w.becomePeace || {};
  w.becomePeace.showPopup = function (options) {
    var popup;
    var onCloseFun = function() {
      if(popup) {
        popup.remove();
      } else {
        console.log('error: popup not initialized');
      }
    }
    popup = createPopup({
      onCloseFun: onCloseFun,
      bodyContent: options.bodyContent
    });

    document.body.appendChild(popup);
  };
}(window, document);

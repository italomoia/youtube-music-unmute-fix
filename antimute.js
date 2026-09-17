(() => {
  'use strict';

  const TRACK_CHANGE_WINDOW = 4000;
  const USER_INTENT_WINDOW = 2000;

  let lastLoadAt = 0;
  let lastUserMuteAt = 0;
  let undone = 0;

  const isVolumeControl = (el) => {
    if (!el || !el.closest) return false;
    return !!el.closest(
      '#volume-slider, .volume, [aria-label*="ilenciar"], [aria-label*="ute"], ' +
      'tp-yt-paper-icon-button.volume, .ytp-mute-button'
    );
  };

  addEventListener('click', (e) => {
    if (e.isTrusted && isVolumeControl(e.target)) lastUserMuteAt = Date.now();
  }, true);

  addEventListener('keydown', (e) => {
    if (e.isTrusted && !e.ctrlKey && !e.altKey && !e.metaKey && e.key && e.key.toLowerCase() === 'm') {
      lastUserMuteAt = Date.now();
    }
  }, true);

  ['loadstart', 'emptied', 'loadedmetadata'].forEach((ev) => {
    addEventListener(ev, (e) => {
      if (e.target instanceof HTMLMediaElement) lastLoadAt = Date.now();
    }, true);
  });

  const proto = HTMLMediaElement.prototype;
  const desc = Object.getOwnPropertyDescriptor(proto, 'muted');

  Object.defineProperty(proto, 'muted', {
    configurable: true,
    enumerable: desc.enumerable,
    get() { return desc.get.call(this); },
    set(value) {
      desc.set.call(this, value);
      if (value !== true || !this.isConnected) return;
      const now = Date.now();
      if (now - lastUserMuteAt < USER_INTENT_WINDOW) return;
      if (now - lastLoadAt > TRACK_CHANGE_WINDOW) return;
      queueMicrotask(() => {
        if (desc.get.call(this) === true && now - lastUserMuteAt >= USER_INTENT_WINDOW) {
          desc.set.call(this, false);
          undone++;
        }
      });
    }
  });

  Object.defineProperty(window, '__ytmAntimute', {
    value: { get undone() { return undone; }, get lastLoadAt() { return lastLoadAt; } },
    configurable: true
  });
})();

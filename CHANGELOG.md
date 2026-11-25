# Changelog

All notable changes to this project are documented here.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-11-25

### Fixed

- When an automatic mute is undone, the player's internal state (`#movie_player`) is unmuted too, so it stops reapplying `muted=true` to the media element. Deliberate user mutes are still never touched.
- `window.__ytmAntimute.playerUnmuted` counts how many times the player was unmuted.

## [1.0.0] - 2026-09-16

### Added

- First release.
- Reverts the mute that the YouTube Music web player applies to itself on track change, when the
  player's pre-blessed media element pool is empty.
- Preserves deliberate mutes: a trusted click on the volume control or a trusted `m` keypress
  within the last 2 seconds is respected and never undone.
- Manifest V3, no permissions, no network access, no storage, no dependencies.

[1.1.0]: https://github.com/italomoia/youtube-music-unmute-fix/releases/tag/v1.1.0
[1.0.0]: https://github.com/italomoia/youtube-music-unmute-fix/releases/tag/v1.0.0

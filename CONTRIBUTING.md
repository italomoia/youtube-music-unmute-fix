# Contributing

Thanks for wanting to help. This is a small, single-purpose project: it fixes one bug in the
YouTube Music web player and nothing else. That constraint is deliberate, and it shapes what gets
merged.

## Before you open an issue

**"It still mutes for me."** Include:

- your browser and its version (`chrome://version`),
- your operating system,
- whether the mute happens on manual skip, on automatic track change, or both,
- whether the volume slider on screen still shows full volume when it happens.

**"It broke something else."** Say what you were doing and what happened. A console error from
DevTools (F12 → Console) helps a lot.

**Anything that reproduces without the extension installed is a YouTube Music bug, not this
project's.** Report it to Google and link the thread here instead.

## What gets merged

Welcome:

- fixes that make the detection more accurate (fewer wrong reverts, fewer missed mutes),
- support for other Chromium browsers and for Firefox,
- README corrections, especially when a step no longer matches what the browser actually shows,
- translations of the README into other languages.

Not welcome:

- features unrelated to the mute bug (skins, downloaders, ad blocking, playback tweaks),
- dependencies, build steps, bundlers or frameworks. This must stay readable plain JavaScript that
  anyone can audit in one sitting,
- broadening the `matches` beyond `https://music.youtube.com/*`,
- adding permissions to the manifest. Zero permissions is a feature.

## Sending a pull request

1. Fork the repo and branch off `main`.
2. Keep the change as small as it can be.
3. Test it by hand and say in the PR exactly what you did: how many tracks you skipped, whether a
   deliberate mute survived, which browser you used.
4. Bump nothing. Versioning and releases are handled by the maintainer.

There are no automated tests. Verification here means loading the unpacked extension and using it,
so a PR that says "tested" without saying how will be sent back.

## Code style

Match what is already there: two-space indent, semicolons, no dependencies. If a line needs a
comment to be understood, prefer rewriting the line.

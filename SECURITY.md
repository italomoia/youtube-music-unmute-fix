# Security Policy

## Supported versions

| Version | Supported |
| ------- | --------- |
| 1.0.x   | yes       |

Only the latest release is supported. This project has no dependencies and no build step, so
"upgrading" means replacing the folder with a newer download.

## Reporting a vulnerability

**Do not open a public issue for a security problem.**

Use GitHub's private vulnerability reporting instead: go to the
[Security tab](https://github.com/italomoia/youtube-music-unmute-fix/security) and click
**"Report a vulnerability"**. Only the maintainer sees it.

Please include what the problem is, how to reproduce it, and what an attacker could do with it.
Expect a first reply within 7 days.

## Scope

This extension runs only on `https://music.youtube.com/*`, declares no permissions, makes no
network requests and stores no data. The realistic risk surface is limited to how it patches the
`muted` property of media elements on that origin.

Out of scope: bugs in YouTube Music itself, and anything that requires the user to already be
running malicious code in their browser.

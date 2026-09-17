# YouTube Music Unmute Fix

**Does your music go silent every time you skip to the next song?** This small Chrome extension
fixes it. You install it once and forget about it.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

🇧🇷 **Instruções em português mais abaixo** ([clique aqui](#-instruções-em-português-brasil)).

---

## Is this your problem?

You probably have this bug if:

- You listen to YouTube Music **in a browser** (not the phone app).
- You press "next song", the new song starts playing, but **no sound comes out**.
- The volume bar on screen still shows full volume, as if nothing was wrong.
- If you click the little speaker icon in the player, **the sound comes back**, but the next time
  you skip a song it goes silent again.

If that is what happens to you, this extension solves it. It is not your headphones, not your
speakers and not your computer. It is a bug in YouTube Music itself.

## Install it

Takes about two minutes. You do not need to know anything about programming.

**Step 1. Download the files.**
Click the green **"Code"** button at the top of this page, then click **"Download ZIP"**.
A file called `youtube-music-unmute-fix-main.zip` lands in your Downloads folder.

**Step 2. Unzip it.**
Double-click the file you just downloaded (on Windows, right-click it and choose "Extract All").
You now have a **folder** called `youtube-music-unmute-fix-main`. Remember where it is, and do not
delete it later: Chrome reads the extension from this folder every time it starts.

**Step 3. Open the extensions page in Chrome.**
Copy `chrome://extensions` into the address bar and press Enter.

**Step 4. Turn on Developer mode.**
Top right corner of that page, there is a switch called **"Developer mode"**. Turn it on.
Three new buttons appear just below.

**Step 5. Load the folder.**
Click **"Load unpacked"**, then select the folder from step 2, and confirm.
A card named **"YouTube Music anti-mute"** appears on the page. That is it, it is installed.

Now reload your YouTube Music tab (press F5) and the fix is active.

## Check that it worked

Two quick tests:

1. **Skip four or five songs in a row.** Every one of them should play with sound.
2. **Mute on purpose**, by clicking the speaker icon in the player. It should stay muted, and stay
   that way. The extension only undoes the mute the *bug* causes, never the one *you* asked for.

## If something goes wrong

**Chrome shows an error when loading the folder.**
You probably picked the wrong folder. You need to pick the one that contains the file
`manifest.json` directly inside it. If you opened a folder and found another folder with the same
name inside, pick that inner one.

**It works, but the music still goes silent.**
Reload the YouTube Music tab (F5). The extension only takes effect on tabs opened after installing.

**The extension disappeared after I restarted Chrome.**
Chrome sometimes turns off developer-mode extensions and shows a warning asking you to confirm.
Open `chrome://extensions` and switch the card back on. If you deleted or moved the folder from
step 2, put it back and load it again.

**I use Edge, Brave, Opera or Vivaldi.**
Same procedure. The extensions page has a different address: `edge://extensions`,
`brave://extensions`, `opera://extensions` or `vivaldi://extensions`.

**I use Firefox.**
This version does not work on Firefox yet. See [open issues](../../issues).

## Uninstall

Open `chrome://extensions`, find the **"YouTube Music anti-mute"** card and click **"Remove"**.
Nothing is left behind.

---

<a name="-instruções-em-português-brasil"></a>

<details>
<summary><h2>🇧🇷 Instruções em português (clique para abrir)</h2></summary>

### Esse é o seu problema?

Você provavelmente tem esse bug se:

- Você escuta YouTube Music **no navegador** (não no aplicativo do celular).
- Você aperta "próxima música", a música nova começa a tocar, mas **não sai som nenhum**.
- A barra de volume na tela continua marcando volume cheio, como se estivesse tudo normal.
- Se você clica no ícone de som do player, **o som volta**, mas na próxima vez que você pula uma
  música ele some de novo.

Se é isso que acontece com você, essa extensão resolve. Não é o seu fone, não é a sua caixa de som
e não é o seu computador. É um bug do próprio YouTube Music.

### Como instalar

Leva uns dois minutos. Você não precisa saber nada de programação.

**Passo 1. Baixe os arquivos.**
Clique no botão verde **"Code"** no topo desta página e depois em **"Download ZIP"**.
Um arquivo chamado `youtube-music-unmute-fix-main.zip` vai cair na sua pasta de downloads.

**Passo 2. Descompacte.**
Clique duas vezes no arquivo que você acabou de baixar (no Windows, clique com o botão direito e
escolha "Extrair tudo"). Agora você tem uma **pasta** chamada `youtube-music-unmute-fix-main`.
Guarde bem onde ela está e não apague depois: o Chrome lê a extensão dessa pasta toda vez que abre.

**Passo 3. Abra a página de extensões do Chrome.**
Copie `chrome://extensions` na barra de endereço e aperte Enter.

**Passo 4. Ligue o modo do desenvolvedor.**
No canto superior direito dessa página tem uma chavinha chamada **"Modo do desenvolvedor"**.
Ligue ela. Três botões novos vão aparecer logo abaixo.

**Passo 5. Carregue a pasta.**
Clique em **"Carregar sem compactação"**, escolha a pasta do passo 2 e confirme.
Vai aparecer um card chamado **"YouTube Music anti-mute"**. Pronto, está instalado.

Agora recarregue a aba do YouTube Music (aperte F5) e a correção já está valendo.

### Confira se funcionou

Dois testes rápidos:

1. **Pule quatro ou cinco músicas seguidas.** Todas têm que tocar com som.
2. **Mute de propósito**, clicando no ícone de som do player. Ele tem que continuar mudo, e ficar
   assim. A extensão só desfaz o mudo que o *bug* causa, nunca o que *você* pediu.

### Se der problema

**O Chrome deu erro ao carregar a pasta.**
Você provavelmente escolheu a pasta errada. Precisa escolher aquela que tem o arquivo
`manifest.json` direto dentro dela. Se você abriu uma pasta e encontrou outra com o mesmo nome
dentro, escolha essa de dentro.

**Instalou, mas a música continua ficando muda.**
Recarregue a aba do YouTube Music (F5). A extensão só passa a valer em abas abertas depois da
instalação.

**A extensão sumiu depois que reiniciei o Chrome.**
O Chrome às vezes desliga extensões em modo desenvolvedor e mostra um aviso pedindo confirmação.
Abra `chrome://extensions` e ligue o card de novo. Se você apagou ou moveu a pasta do passo 2,
coloque ela de volta e carregue outra vez.

**Eu uso Edge, Brave, Opera ou Vivaldi.**
Mesmo procedimento. A página de extensões tem endereço diferente: `edge://extensions`,
`brave://extensions`, `opera://extensions` ou `vivaldi://extensions`.

**Eu uso Firefox.**
Essa versão ainda não funciona no Firefox. Veja as [issues abertas](../../issues).

### Como desinstalar

Abra `chrome://extensions`, ache o card **"YouTube Music anti-mute"** e clique em **"Remover"**.
Não fica nada para trás.

</details>

---

<details>
<summary><h2>🔧 How it works (technical)</h2></summary>

### The bug

The YouTube Music web player builds a fresh `<video>` element for every track it plays. Chrome only
lets a freshly created media element produce sound if that element was created inside a real user
gesture. To work around that, the player keeps a **pool of up to four pre-blessed `<video>`
elements**, refilled by a `click` listener installed on `window` in capture phase
(`base.js`, around line 5348):

```js
RTf || (window.addEventListener(SK ? "touchstart" : "click", () => {
  for (let Z = Ti.length; Z < 4; Z++) { let f = g.TU("VIDEO"); f.load(); Ti.push(new g.O4(f)); }
}, {capture: true, passive: true}), RTf = true);
```

On every track change the player takes one out of the pool (line 5567):

```js
Z.mediaElement = Z.wq.deviceIsAudioOnly ? new g.O4(g.TU("AUDIO")) : Ti.pop() || new g.O4(g.TU("VIDEO"));
```

And line 5590 contains the decision that produces the bug:

```js
Ti.length && Z.Es ? (Gp(Z, {muted: false, ...}), sF(Z, false))
                  : Ti.length || Z.jY.muted || (Gp(Z, {muted: true, ...}), sF(Z, true));
```

Read in plain English: **if the pool is empty, mute the playback** rather than risk silent failure.

The refill listener is only installed when a server-side config flag (`wq.W`) is on. For affected
users that flag is off, so `xm0()` never runs, the listener is never registered, the pool starts
empty and stays empty, and every track change after the first goes through the mute branch.

### How it was diagnosed

Measured, not guessed:

- At the moment of the mute, the OS audio stream was healthy: alive, routed to the right sink, not
  muted, at 100% volume. So the problem was never in the audio stack.
- Inside the page, `movie_player.isMuted()` returned `true` while `getVolume()` returned `100` and
  the on-screen volume slider still read 100. Player state and UI were out of sync.
- Decisive test: a `click` was dispatched on the page while counting `document.createElement('VIDEO')`
  calls. The count was **zero**, proving the refill listener does not exist in the affected session.

### What the extension does

`antimute.js` runs at `document_start` in the `MAIN` world and wraps the `muted` property setter on
`HTMLMediaElement.prototype`. When a mute is applied it reverts it **only if both** conditions hold:

- it landed within **4 s** of a `loadstart` / `emptied` / `loadedmetadata` event, meaning a track
  change is in progress, and
- the user did **not** express intent in the last **2 s** (a trusted click on the volume control, or
  a trusted `m` keypress).

Anything else is left alone, which is why muting on purpose still works.

### Privacy and permissions

- The manifest declares **no permissions** at all.
- It runs on `https://music.youtube.com/*` and nowhere else.
- It makes no network requests, stores nothing and collects nothing.
- The whole thing is ~60 lines of dependency-free JavaScript, in
  [`antimute.js`](antimute.js). Read it before you install it.

</details>

---

## Credits

Found and fixed while debugging the bug reported here:

- [r/YoutubeMusic: "Music gets muted when I skip songs on my browser (Chrome)"](https://www.reddit.com/r/YoutubeMusic/comments/1sq7g73/music_gets_muted_when_i_skip_songs_on_my_browser/)
- [YouTube Music Help: "Sound mutes when I switch tracks manually"](https://support.google.com/youtubemusic/thread/394301860/sound-mutes-when-i-switch-tracks-manually) (opened Dec 2025, locked, no replies)

Not affiliated with Google or YouTube.

## License

[MIT](LICENSE)

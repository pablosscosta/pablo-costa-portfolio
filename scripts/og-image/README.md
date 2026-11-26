# Imagem de compartilhamento (Open Graph)

`og-image.html` é o modelo da imagem que aparece quando o link do portfólio é compartilhado
(LinkedIn, WhatsApp etc.). Para regerar `public/og-image.png` (1200×630) com o Chrome em modo headless:

```bash
google-chrome --headless --hide-scrollbars --virtual-time-budget=5000 \
  --window-size=1200,630 --screenshot=public/og-image.png scripts/og-image/og-image.html
```

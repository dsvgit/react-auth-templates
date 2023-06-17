# react-auth-templates

Boilerplate for auth cases.

## Dev

> Copy `.env.template` as `.env` file. And fill it in case you use relevant services

```bash
pnpm install
pnpm dev
```

## Publishing troubleshooting

### Cache
remove `node_modules/.cache/gh-pages`

### Access token
"/dev/tty: No such a device or address"
  If, when deploying, you get /dev/tty: No such a device or address or a similar error, try the following:

1. Create a new Personal Access Token
2. `git remote set-url origin https://<user>:<token>@github.com/<user>/<repo> .`
3. Try `npm run deploy` again

### Cannot read property 'email' of null

"Cannot read property 'email' of null"
If, when deploying, you get Cannot read property 'email' of null, try the following:

1. `git config --global user.name '<your_name>'`
2. `git config --global user.email '<your_email>'`
3. Try `npm run deploy` again

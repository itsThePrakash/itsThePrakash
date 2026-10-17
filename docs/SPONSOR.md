# Turning sponsorship on

The site is already wired. `/sponsor` exists, the footer links to it, the nav has
a coffee button, and `.github/FUNDING.yml` shows GitHub's **Sponsor** button on
every repo. What is missing is a rail that can actually take money.

Everything below is controlled by one block in `src/data.mjs`:

```js
export const SPONSOR = {
  github: 'https://github.com/sponsors/itsThePrakash',
  githubLive: false,
  upi: null,
  razorpay: null,
  wall: [],
};
```

---

## 1. GitHub Sponsors (the rail the page is built around)

GitHub Sponsors works for Indian residents: you open a Stripe Connect Express
account, Stripe pays out to an Indian bank account, and the USD a sponsor pays is
converted to INR before it lands. GitHub reviews the profile before it goes live,
so this is not instant.

1. Open <https://github.com/sponsors> while signed in as `itsThePrakash`.
2. Click **Get sponsored** / **Join GitHub Sponsors** and pick the personal
   account.
3. Fill the profile: a short bio, what you work on, and a profile picture.
4. Connect payouts. Choose **bank account** → Stripe Express → country **India**,
   PAN, address, IFSC and account number. The name on the bank account must
   match your PAN.
5. Submit. GitHub reviews it and emails you. This can take days.
6. After approval, open the Sponsors dashboard → **Sponsor tiers**. Add one
   monthly tier and one one-time tier. Custom amounts are enabled by default on
   every profile, so a sponsor can type any amount above your minimum.
7. In `src/data.mjs`, set `githubLive: true`. Rebuild and push.

That single flag changes the page from *Profile in review* + email fallback to
*Live now* with working GitHub buttons.

### If GitHub asks for more

- 2FA must be on for the account.
- Your profile needs some public work — this repo and the projects on the site
  already cover that.
- Fees and payout timing are GitHub's, not mine; see
  <https://docs.github.com/sponsors>.

---

## 2. UPI (fastest for India)

Good if someone does not want to use a card. You need a VPA, for example
`yourname@okhdfcbank`, `98765xxxxx@paytm` or a Google Pay UPI ID.

```js
upi: 'yourname@okhdfcbank',
```

Rebuild. A UPI card appears on `/sponsor` with the ID and a copy button. No
gateway, so no fee — and no automatic receipt either. If a sponsor needs an
invoice, they email you.

## 3. Razorpay (cards, netbanking, wallets)

If you want Indian cards and netbanking to work, create a Razorpay payment page
and paste its URL:

```js
razorpay: 'https://rzp.io/l/yourpage',
```

A card appears on `/sponsor` linking straight to it.

## 4. Buy Me a Coffee

If the page at <https://buymeacoffee.com/itsThePrakash> is live, switch it on:

```js
buymeacoffee: 'https://buymeacoffee.com/itsThePrakash',
```

## 5. The wall

Names are never invented. `wall` starts empty and the page says so. When someone
actually sponsors:

```js
wall: [
  { name: 'Ananya', url: 'https://github.com/ananya' }, // url is optional
],
```

Ask first, and respect it if they want to stay private — GitHub lets a sponsor
tick **private** while paying.

---

## Checklist before you call it live

```bash
npm run build
npm run verify     # 5 pages, 0 broken links, size budget
```

Then load `/sponsor` and check:

- [ ] the badge says **Live now** and the button opens your Sponsors page
- [ ] the UPI card (if enabled) copies the right ID
- [ ] the wall shows only real names
- [ ] `/sponsor` is in `dist/sitemap.xml`

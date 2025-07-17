[Major Solana Wallets Compatibility With Solana Pay Docs with evidence](https://docs.google.com/document/d/1ug3pTl1fDaZ7-YPFtqmZjxFBjsoZyhHuN0RaU05EGvI/edit?usp=sharing)

[Live app](https://solana-pay-compass-guide.vercel.app/)

[Demo loom video](https://www.loom.com/share/457f0ca9b9d34441a11fe84f40e9d4fa)

# Solana Wallet Explorer

## Overview
The **Solana Wallet Explorer** is a lightweight, filterable website built to help builders, merchants and developers choose the best Solana-compatible wallet for Solana Pay and desired features. It compares 26 wallets from [solana.com/solana-wallets](https://solana.com/solana-wallets), detailing platforms, custody models, and Solana Pay QR performance. This living reference simplifies wallet selection for seamless payments and DeFi integration.

## Running the Code
Run locally with Node.js and npm (install via [nvm](https://github.com/nvm-sh/nvm)).

1. Clone the repo:
   ```bash
   git clone <YOUR_GIT_URL>
   ```
2. Navigate to the project:
   ```bash
   cd <YOUR_PROJECT_NAME>
   ```
3. Install dependencies:
   ```bash
   npm i
   ```
4. Start the dev server:
   ```bash
   npm run dev

## Data and Contributions
The [wallets.json](https://github.com/lucadavid075/solana-pay-compass-guide/blob/main/src/data/wallets.json) file lists 26 wallets. Contributors are welcome to update it by capturing every feature you consider relevant for each wallet:
1. Cloning the repo (see above).
2. Editing `wallets.json` to add/update wallets.
3. Committing changes:
   ```bash
   git add data/wallets.json
   git commit -m "Updated wallets.json"
   git push origin main
   ```


Follow this format (example: Solflare)
``` 
{
  "wallet_name": "Solflare",
  "platforms": ["Web", "iOS", "Android", "Chrome", "Firefox", "Brave", "Edge"],
  "custody_model": "Self-custody",
  "in_app_dex_swap": "Yes",
  "nft_gallery": "Yes",
  "in_app_staking": "Yes",
  "fiat_on_ramp": "Yes",
  "fiat_off_ramp": "Yes",
  "push_notifications": "Yes",
  "solana_pay_qr": "Yes",
  "solana_pay_access": "One-tap",
  "version_tested": "2.1.2",
  "date_tested": "2025-07-17",
  "additional_features": {
    "dapp_browser": "Yes",
    "security_features": "AI-powered anti-phishing, transaction simulation",
    "multi_chain_support": "No",
    "open_source": "Yes",
    "user_interface": "Rich, multi-platform",
    "solana_pay_ux_notes": "One-tap QR scanning via a prominent QR icon on the main dashboard, requiring no additional navigation. "
  }

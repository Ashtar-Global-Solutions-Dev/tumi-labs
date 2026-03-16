# TumiLabs Portfolio Overview

*Generated: March 3, 2026*

---

## Company Overview

**TumiLabs** is a Solana-focused venture studio and development lab specializing in:
- Web3 infrastructure & tooling
- DeFi protocols & staking systems
- Gaming & NFT ecosystems
- Real World Asset (RWA) tokenization
- AI-powered solutions

**Team:**
- Juan Pablo Bedoya — Co-Founder
- Mannan Spannagianis — Co-Founder
- Ghulam Mustafa — Co-Founder
- Karthik Makayee — Co-Founder

**Website:** [tumilabs.com](https://www.tumilabs.com)

---

## GitHub Organizations

| Organization | Access | Repos |
|--------------|--------|-------|
| **Ashtar-Global-Solutions-Dev** | ✅ Full | 90+ repos |
| **Honeycomb-Protocol** | ✅ Full | 74 repos |
| **tumi-labs** | ✅ Full | 3 repos |
| **ags-solutions** | ✅ Full | 8 repos |

**Total Projects:** 175+ repositories

---

## Selected Case Studies (Top 9)

### 1. Honeycomb Protocol
**Category:** Infrastructure  
**Role:** Core contributor to Web3 gaming infrastructure

**Description:**
Honeycomb Protocol is the leading Web3 gaming infrastructure on Solana. TumiLabs has been instrumental in building core components of the protocol.

**Components Built:**
- **hive-control** — Core protocol control layer
- **nectar-utilities** — Staking utilities and rewards
- **asset-hub** — Digital asset management
- **Unity-SDK** — Game engine integration
- **toolkit** — Core Rust toolkit
- **digital-asset-rpc-infrastructure** — Compressed accounts indexer (fork)

**Tech Stack:**
- Rust, Anchor Framework
- TypeScript, Node.js
- Unity C#
- Yellowstone gRPC

**Links:**
- GitHub: [github.com/Honeycomb-Protocol](https://github.com/Honeycomb-Protocol)

---

### 2. Hololaunch
**Category:** Infrastructure — Token Launchpad  
**Client:** Holoworld Team  
**Notable:** Token listed on **Binance**

**Description:**
A sophisticated Solana-based decentralized launchpad platform featuring staking rewards, lottery-based token distribution, ICO functionality, and liquidity pool seeding. Built for the Holoworld team whose token achieved Binance listing.

**Modules:**
- **Staking Module** — Rewards system with points and claiming
- **Launchpad Module** — Lottery-based token distribution
- **ICO Module** — Full initial coin offering system
  - CreateICO, ConfigureWhitelist
  - BuyIcoTickets, ClaimIco, SettleIco
  - WithdrawIcoPayments

**Tech Stack:**
- Rust, Anchor Framework 0.31.1
- TypeScript, Express.js
- PostgreSQL, Prisma ORM
- Yellowstone gRPC indexer
- TSOA/Swagger API docs

**Architecture:**
```
hololaunch/
├── programs/hololaunch/
│   ├── src/staking/      # Staking rewards
│   ├── src/launchpad/    # Token launches, lottery
│   └── src/ico/          # ICO system
└── libs/                 # Utility crates
```

**API Features:**
- Launch events with metadata, whitelist, vesting, raffles
- Ticketing and entries with Merkle proof whitelists
- Staking and points system
- Real-time blockchain indexer

---

### 3. GameShift
**Category:** Infrastructure — Game Integration Platform

**Description:**
GameShift is Solana's game integration platform enabling seamless Web3 functionality in games. TumiLabs contributed to core infrastructure and SDK development.

**Components:**
- **game-shift** — Core platform
- **gameshift-wallet-adapter** — Modular TypeScript wallet adapters
- **gameshift-payments-reference** — Payments reference implementation
- **gameshift-docs** — Documentation

**Tech Stack:**
- TypeScript
- Solana Web3.js
- React

---

### 4. LiquidProp
**Category:** RWA (Real World Assets) — Real Estate Tokenization

**Description:**
First-to-market decentralized real estate marketplace on Solana. Enables fractional ownership of U.S. rental properties with $100 minimum investment. Fully permissionless trading of property tokens.

**Features:**
- Fractional real estate ownership
- $100 property shares as SPL tokens
- Permissionless marketplace for trading
- Smart contract-based instant P2P transactions
- Rent distribution via micropayments
- Real U.S. rental properties

**Tech Stack:**
- Solana, Anchor Framework
- TypeScript, React
- Smart contracts for property tokenization

**Links:**
- Website: [liquidprop-marketplace.vercel.app](https://liquidprop-marketplace.vercel.app)
- Medium: [@liquidprop](https://medium.com/@liquidprop)

---

### 5. KEK Platform
**Category:** DeFi — Staking Protocol

**Description:**
Token staking platform with rewards distribution system.

**Tech Stack:**
- TypeScript
- Solana, Anchor Framework

**Repo:** Honeycomb-Protocol/kek-staking (private)

---

### 6. Raffles Platform
**Category:** Infrastructure — Community Engagement

**Description:**
Full-stack on-chain raffle system used across multiple NFT communities. Provides fair, verifiable raffles with real-time updates.

**Features:**
- On-chain raffle creation
- Ticket purchasing with SPL tokens
- Verifiable random winner selection
- Admin dashboard
- Multiple community deployments

**Implementations:**
- raffles-offchain
- raffles-admin
- wisecats-raffles
- fujilions-raffles
- drippies-raffles-front
- wobblebug-raffles

**Tech Stack:**
- TypeScript, React, Next.js
- Express.js backend
- PostgreSQL
- Solana smart contracts

---

### 7. AgentsCan (Agentscan)
**Category:** AI/Mobile — Document Bridge

**Description:**
Cloud API that connects AI agents (LangChain, n8n, custom bots) with mobile devices for physical document scanning. When an AI agent needs a document scanned, it creates a request through the API, which is routed to a paired mobile device. The user scans the document and the result (PDF + OCR text) is delivered back to the agent in real time.

**Architecture:**
```
┌─────────────┐         ┌──────────────────┐         ┌─────────────────┐
│   AI Agent  │────────▶│  AgentsCan API   │────────▶│   iOS App       │
│  (n8n, etc.)│  HTTP   │  (Fastify + PG)  │  Push   │  (Scanner)      │
│             │◀────────│                  │◀────────│                 │
│  Get result │  Poll   │  Stores results  │ Upload  │  Scan & OCR     │
└─────────────┘         └──────────────────┘         └─────────────────┘
```

**Features:**
- API Key authentication for agents
- Device authentication for mobile
- Webhook delivery (optional)
- Auto-cleanup (expired + TTL)
- Rate limiting (100 req/min)

**Tech Stack:**
- Node.js, TypeScript
- Fastify 5
- PostgreSQL, Drizzle ORM
- Swift (iOS app)
- Push notifications

**Testing:** 32 tests passing, 7 files

---

### 8. Proleague Tournament
**Category:** Gaming — Esports Smart Contracts

**Description:**
On-chain esports tournament system with Honeycomb Protocol integration. Enables decentralized tournament management, prize pools, and matchmaking.

**Features:**
- Tournament creation and management
- On-chain prize pool distribution
- Matchmaking system
- Honeycomb Protocol integration
- SPL token support

**Tech Stack:**
- TypeScript
- Solana, Anchor Framework
- Honeycomb hive-control integration

**Recent Activity:** Active development (pushed Feb 2026)

---

### 9. BonkSpin
**Category:** Gaming — Viral Engagement

**Description:**
Viral spin wheel game with $BONK token integration. High-engagement gamification mechanic for token communities.

**Features:**
- Spin wheel mechanics
- $BONK token integration
- Prize distribution
- Provably fair results

**Tech Stack:**
- TypeScript, React
- Solana Web3.js

---

## Additional Portfolio Projects

### NFT Collections & Ecosystems

| Project | Description |
|---------|-------------|
| **Soul of Hidama** | Full gaming ecosystem: staking, jackpot (Rust), missions, minting |
| **Fracture** | NFT + merch marketplace with on-chain programs |
| **Ocean Explorers** | NFT expeditions with cNFT support |
| **Beholders** | NFT project with custom programs |
| **Drippies** | NFT collection with server + raffles |
| **Geisha / GeishaLabs** | NFT project |
| **Mining Badgers** | NFT with off-chain services |
| **Pooks** | Museum + metadata services |
| **OKD** | Museum implementation |

### Staking Solutions

| Project | Description |
|---------|-------------|
| **AGS-Staking-Solution** | Token staking smart contract |
| **AGS-Staking-Front-End** | Staking UI |
| **fujilions-staking** | NFT staking |
| **malibu-staking** | Staking platform |
| **soulofhidama-staking** | Token staking |
| **holo-staking** | Honeycomb staking (Rust) |

### Gaming

| Project | Description |
|---------|-------------|
| **SolPatrol** | Play-to-earn game (frontend, chat, cronjobs, missions) |
| **SolPatrol City** | Game variant |
| **DegenDuelz** | Gaming project (Go) |
| **SMU / smu-pong** | Gaming |
| **Spinwheel Chain** | On-chain spin wheel |
| **xNFT Wheel** | xNFT spin wheel |

### Infrastructure & Tools

| Project | Description |
|---------|-------------|
| **inti** | Token minting/transfer with Metaplex |
| **Candy Machine V3** | NFT minting UI |
| **nft-scripts** | NFT utility scripts |
| **token-scripts** | Token utility scripts |
| **nft-oracle** | NFT price oracle |
| **bulk-send-token** | Bulk token transfers |
| **anchor-template** | Anchor project template |
| **general-api** | Shared API infrastructure |

### Marketplace & Commerce

| Project | Description |
|---------|-------------|
| **merch-marketplace-front** | Merchandise marketplace |
| **fracture-merch-front/admin/offchain** | Merch platform |
| **auction-onchain** | On-chain auction (Rust) |

### Protocol Forks & Contributions

| Project | Description |
|---------|-------------|
| **anchor** | Anchor framework fork |
| **mpl-bubblegum** | Compressed NFTs fork |
| **mpl-core** | Metaplex core fork |
| **solana-program-library** | SPL fork |
| **yellowstone-grpc** | Geyser gRPC service |
| **blockbuster** | Geyser plugin parsing |
| **digital-asset-rpc-infrastructure** | DAS API fork |
| **sol-did** | Solana DID spec |
| **solita** | SDK generator from IDL |

---

## Tech Stack Summary

### Languages
- **Rust** — Smart contracts, core infrastructure
- **TypeScript** — Frontend, backend services
- **JavaScript** — Legacy projects
- **Go** — Gaming backends (DegenDuelz)
- **C#** — Unity SDK, game integrations
- **Swift** — iOS applications

### Frameworks & Tools
- **Anchor** — Solana smart contract framework
- **Next.js / React** — Frontend
- **Express / Fastify** — Backend APIs
- **Prisma / Drizzle** — Database ORM
- **PostgreSQL / Redis** — Data storage
- **Yellowstone gRPC** — Blockchain indexing
- **Unity** — Game engine

### Blockchain
- **Solana** — Primary chain
- **Metaplex** — NFT standard
- **Honeycomb Protocol** — Gaming infrastructure

---

## Brand Guidelines

### Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Primary Black | `#090e0a` | Backgrounds |
| Primary White | `#fafbfc` | Text |
| Primary Gold | `#ce9549` | Accent, CTAs |
| Secondary Pink | `#ff00ca` | Highlights |
| Secondary Turquoise | `#06edff` | Accents |
| Secondary Red | `#fc3647` | Alerts |
| Secondary Frostbite | `#f957a1` | Gradients |

### Typography
- **Font:** Poppins (all weights)

---

## Stats

- **Total Repositories:** 175+
- **Organizations:** 4
- **Selected Case Studies:** 9
- **Primary Focus:** Solana ecosystem
- **Notable Client:** Holoworld (Binance-listed token)

---

*Document maintained by TumiLabs team*

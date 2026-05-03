---
name: bds-pipeline
description: Crypto data pipeline — multi-source token data with automated cleaning, enrichment, validation & export. Works with CoinGecko (free) and Birdeye BDS.
version: 1.0.0
author: Atlas Nexus
metadata:
  {
    "openclaw":
      {
        "requires": { "bins": ["python3"] },
        "install": ["pip install -r requirements.txt"]
      }
  }
---

# BDS Pipeline — Crypto Data Toolkit

Multi-source crypto token data pipeline with automated ETL processing.

## Features

- **Multi-source fetch**: CoinGecko (free, no key) + Birdeye BDS (configurable)
- **Auto-cleaning**: Deduplication, null handling, number normalization (6dp)
- **Smart enrichment**: Volatility flags, market cap tiers, volume/mcap liquidity ratio
- **Validation**: Custom quality rules (price ≥ 0, mcap ≥ 0, volume ≥ 0)
- **Multi-format export**: JSON (full) + CSV (spreadsheet) + Executive Summary

## Quick Start

```bash
# Run with CoinGecko (free, no API key needed)
python3 bds_pipeline.py

# Run with Birdeye BDS
export BIRDEYE_API_KEY=your-key
python3 bds_pipeline.py --birdeye
```

## Output

```
output/
├── tokens_YYYYMMDD-HHMMSS.json   # Full token dataset
├── tokens_YYYYMMDD-HHMMSS.csv    # Spreadsheet-ready
├── summary_YYYYMMDD-HHMMSS.json  # Executive report
└── raw_YYYYMMDD-HHMMSS.json      # Raw API response
```

## Example Summary

```json
{
  "total_tokens": 100,
  "total_market_cap_usd": 2697489864758,
  "total_24h_volume_usd": 75062204330.97,
  "volatility_breakdown": {"HIGH": 0, "MEDIUM": 3, "LOW": 97},
  "mcap_tier_breakdown": {"LARGE_CAP": 12, "MID_CAP": 55, "SMALL_CAP": 33}
}
```

## Requirements

- Python 3.10+
- No API key required (CoinGecko mode)
- Optional: Birdeye API key for BDS mode

## Price

$15 on Gumroad. Includes lifetime updates.

## Built by Atlas Nexus

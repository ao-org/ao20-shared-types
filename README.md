# @ao20/shared-types

Shared TypeScript type definitions for the [Argentum Online 20](https://www.argentumonline.com.ar) ecosystem.

This package contains `.d.ts` declaration files that describe the data shapes used across the Argentum 20 projects. It has zero runtime code and zero dependencies — it exists purely for type safety and editor IntelliSense.

## Installation

```bash
npm install github:ao-org/ao20-shared-types#master
```

## Usage

```typescript
import type { User, Account, RankingUser, GiftCard } from '@ao20/shared-types';
```

## Available Types

| Module | Types |
|--------|-------|
| `user` | `User`, `InventoryItem`, `BankItem`, `Skin`, `Attributes`, `Skillpoints`, `UserExtraData`, `UserOnSale`, `Character` |
| `account` | `Account`, `AccountDetail`, `AccountWithPayments`, `PatronTier` |
| `market` | `UserTransaction`, `ItemTransaction`, `AO20PointsTransaction`, `ItemOnSale`, `AO20PointsOnSale`, `TransactionStatus`, `PaymentGateway` |
| `payment` | `MercadoPagoAccountData`, `StripeAccountData`, `Erc20AccountData`, `Erc20PaymentDetails` |
| `gift-card` | `GiftCard`, `GiftCardBulkGenerateResult`, `GiftCardRedemptionStats`, `CardValidationResult` |
| `house` | `House`, `FreeHouse`, `HouseOwnerUser` |
| `ranking` | `RankingUser`, `RankingSortBy` |
| `statistics` | `GoldStatistic`, `ItemStatistic`, `CharTransferRecord`, `ShopAuditResponse`, `ShopAuditEntry` |
| `newsletter` | `NewsletterRequest`, `NewsletterResponse` |
| `enums` | `GameLabels`, `GameLabelsEnglish`, `ClassId`, `RaceId`, `GenderId`, `Faccion`, `Ciudad` |
| `common` | `ApiError`, `ApiErrorResponse`, `PaginatedResponse<T>`, `ApiSuccessResponse<T>`, `PaginationParams` |

## License

Proprietary — Copyright (c) 2026 Conreco Limited. All rights reserved. See [LICENSE](LICENSE) for details.

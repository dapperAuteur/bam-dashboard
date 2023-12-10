import { AffixQueries } from './affixQueries';
import { FinancialAccountQueries } from './financialAccountQueries';
import { MediaQueries } from './mediaQueries';
import { VerboQueries } from './verboQueries';
import { WordQueries } from './wordQueries';

export const Query = {
  ...AffixQueries,
  ...FinancialAccountQueries,
  ...MediaQueries,
  ...VerboQueries,
  ...WordQueries
}
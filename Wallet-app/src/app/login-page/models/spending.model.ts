import {SpendingItemModel} from './spending.item.model';

export interface SpendingModel {
  readonly type?: string;
  readonly icon?: string;
  name?: string;
  value?: number;
  spendingHistory?: SpendingItemModel[];
}

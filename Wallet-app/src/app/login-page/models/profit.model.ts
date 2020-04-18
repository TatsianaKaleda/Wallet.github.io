import {ProfitItemModel} from './profit.item.model';

export interface ProfitModel {
  readonly type?: string;
  name?: string;
  value?: number;
  profitHistory?: ProfitItemModel[];
}

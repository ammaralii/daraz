import dayjs from 'dayjs';
import { IOrders } from 'app/shared/model/orders.model';
import { IShippingDetails } from 'app/shared/model/shipping-details.model';
import { IDarazUsers } from 'app/shared/model/daraz-users.model';

export interface IOrderDelivery {
  id?: number;
  deliveryDate?: string | null;
  deliveryCharge?: number | null;
  shippingStatus?: string;
  order?: IOrders;
  shippingAddress?: IShippingDetails;
  deliveryManager?: IDarazUsers;
  deliveryBoy?: IDarazUsers;
}

export const defaultValue: Readonly<IOrderDelivery> = {};

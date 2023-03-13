import dayjs from 'dayjs';
import { IOrders } from 'app/shared/model/orders.model';
import { IOrderDelivery } from 'app/shared/model/order-delivery.model';

export interface IShippingDetails {
  id?: number;
  shippingAddress?: string;
  shippingMethod?: string;
  estimatedDeliveryDate?: string;
  order?: IOrders;
  orderdeliveryShippingaddresses?: IOrderDelivery[] | null;
}

export const defaultValue: Readonly<IShippingDetails> = {};

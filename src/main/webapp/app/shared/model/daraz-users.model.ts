import { IRoles } from 'app/shared/model/roles.model';
import { IAddresses } from 'app/shared/model/addresses.model';
import { IOrderDelivery } from 'app/shared/model/order-delivery.model';

export interface IDarazUsers {
  id?: number;
  fullName?: string;
  email?: string;
  phone?: string;
  manager?: IDarazUsers | null;
  roles?: IRoles[] | null;
  addressesUsers?: IAddresses[] | null;
  darazusersManagers?: IDarazUsers[] | null;
  orderdeliveryDeliverymanagers?: IOrderDelivery[] | null;
  orderdeliveryDeliveryboys?: IOrderDelivery[] | null;
}

export const defaultValue: Readonly<IDarazUsers> = {};

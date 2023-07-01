import { UserInterface } from 'interfaces/user';
import { BusinessInterface } from 'interfaces/business';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  customer_id?: string;
  business_id?: string;
  order_details?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  business?: BusinessInterface;
  _count?: {};
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_id?: string;
  business_id?: string;
  order_details?: string;
}

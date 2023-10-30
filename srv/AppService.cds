using { db as db } from '../db/datamodel';

@path: '/sap/odata/API_SALES_ORDER'
service AppService {

   @odata.draft.enabled
    entity OrderSet as projection on db.Orders;

}
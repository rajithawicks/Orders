namespace db;

using { managed } from '@sap/cds/common';


entity Orders : managed
{
    key orderid : Integer;
    customername : String(120); //@readonly
    contactperson : String(180) not null;
    grossamount : Decimal(10,2);
    currency : String(4) not null;
}
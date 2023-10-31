using AppService as service from '../../srv/AppService';

annotate service.OrderSet with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Value : orderid,
            Label : 'Order ID',
        },
        {
            $Type : 'UI.DataField',
            Value : contactperson,
            Label : 'Contact Person',
        },
        {
            $Type : 'UI.DataField',
            Value : customername,
            Label : 'Customer Name',
        },
        {
            $Type : 'UI.DataField',
            Value : grossamount,
            Label : 'Amount',
        }
    ]
);
annotate service.OrderSet with @(
    UI.SelectionFields : [
        orderid,
        contactperson,
        customername,
    ]
);
annotate service.OrderSet with @(
    UI.HeaderFacets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Order Details',
            ID : 'OrderDetails',
            Target : '@UI.FieldGroup#OrderDetails',
        },],
    UI.FieldGroup #CustomerName : {
        $Type : 'UI.FieldGroupType',
        Data : [
        ],
    }
);
annotate service.OrderSet with @(
    UI.FieldGroup #OrderDetails : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : contactperson,
                Label : 'contactperson',
            },{
                $Type : 'UI.DataField',
                Value : customername,
                Label : 'customername',
            },{
                $Type : 'UI.DataField',
                Value : grossamount,
                Label : 'grossamount',
            },{
                $Type : 'UI.DataField',
                Value : currency,
                Label : 'currency',
            },{
                $Type : 'UI.DataField',
                Value : orderid,
                Label : 'orderid',
            },{
                $Type : 'UI.DataField',
                Value : modifiedBy,
            },{
                $Type : 'UI.DataField',
                Value : modifiedAt,
            },{
                $Type : 'UI.DataField',
                Value : createdBy,
            },{
                $Type : 'UI.DataField',
                Value : createdAt,
            },],
    }
);

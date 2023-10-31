sap.ui.define(
    [
        'sap/fe/core/PageController',
        'sap/m/MessageToast',
        'sap/ui/model/json/JSONModel',
    ],
    function(PageController, MessageToast, JSONModel) {
        'use strict';

        return PageController.extend('ordermodule.ext.main.Main', {
            /**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf ordermodule.ext.main.Main
             */
             onInit: function () {

                 PageController.prototype.onInit.apply(this);
                 this.getView().getModel("ui").setProperty("/isEditable", true);

                // var oUIModel = new JSONModel({
                //     // fixes for sap.fe flowcle
                //     "isEditable": true,     
                //     "editMode": "Editable"
                // });
                // this.getView().setModel(oUIModel, "ui");
            
             },

             onSelectEdit: function (event) {

                MessageToast.show('Toggle edit pressed');
                this.getView().getModel("ui").setProperty("/isEditable", event.getParameter("selected"));

            },

            /**
             * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
             * (NOT before the first rendering! onInit() is used for that one!).
             * @memberOf ordermodule.ext.main.Main
             */
            //  onBeforeRendering: function() {
            //
            //  },

            /**
             * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
             * This hook is the same one that SAPUI5 controls get after being rendered.
             * @memberOf ordermodule.ext.main.Main
             */
            //  onAfterRendering: function() {
            //
            //  },

            /**
             * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
             * @memberOf ordermodule.ext.main.Main
             */
            //  onExit: function() {
            //
            //  }
        });
    }
);

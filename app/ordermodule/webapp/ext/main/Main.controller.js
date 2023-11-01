sap.ui.define(
    [
        'sap/fe/core/PageController',
        'sap/m/MessageToast',
        'sap/ui/model/json/JSONModel',
        "sap/fe/core/controllerextensions/EditFlow",
         "sap/m/MessageBox"
    ],
    function (PageController, MessageToast, JSONModel, EditFlow,MessageBox) {
        'use strict';

        return PageController.extend('ordermodule.ext.main.Main', {
            /**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf ordermodule.ext.main.Main
             */
            onInit: function () {

                PageController.prototype.onInit.apply(this);
                this.getView().getModel("ui").setProperty("/isEditable", false);

                // var oUIModel = new JSONModel({
                //     // fixes for sap.fe flowcle
                //     "isEditable": true,     
                //     "editMode": "Editable"
                // });
                // this.getView().setModel(oUIModel, "ui");

            },

            onSelectEdit: async function (event) {

                MessageToast.show('Toggle edit pressed');
                this.getView().getModel("ui").setProperty("/isEditable", event.getParameter("selected"));

                // try {

                //     const targetContext = await this.editFlow.editDocument(this.getView().getBindingContext());
                //     this.getView().setBindingContext(targetContext);

                // } catch (error) {
                //     MessageToast.show('error' + error);
                // }


                // this.getExtensionAPI().byId("OrderTable").refresh();




            },

            onRowPress: function (oEvent) {

                MessageToast.show('row pressed');

                try {
                     const currentContext = oEvent.getParameter("bindingContext") ?? oEvent.getSource().getSelectedContexts()[0];
                   // const currentContext = oEvent.getSource().getBindingContext();
                    // if (currentContext && currentContext.getObject("IsActiveEntity") === false) {
                    //     this.getView().getModel("ui").setProperty("/isEditable", true);
                    // } else {
                    //     this.getView().getModel("ui").setProperty("/isEditable", false);
                    // }
                    const model = currentContext.getModel();
                    const contextBinding = model.bindContext(currentContext.getPath());
                    const targetContext = contextBinding.getBoundContext();

                    this.getView().setBindingContext(targetContext);

                } catch (error) {
                    MessageToast.show('error' + error);
                }

            },

            saveDocument: async function () {

                MessageToast.show('Save pressed');

                try {
                    await this.editFlow.saveDocument(this.getView().getBindingContext());
                    this.getExtensionAPI().byId("OrderTable").refresh();

                } catch (error) {
                    MessageToast.show('error' + error);
                }
                //  MessageToast.show('Save pressed2');




                // // Note: This promise fails only if the transient entity is deleted
                // oContext.created().then(function () {
                //     // sales order successfully created
                //     MessageToast.show('created');
                // }, function (oError) {
                //     MessageToast.show('error');
                //     // handle rejection of entity creation; if oError.canceled === true then the transient entity has been deleted 
                // });


                //draft saving 
                // var oView = this.getView();
                // function resetBusy() {
                //     oView.setBusy(false);
                // }
                // // lock UI until submitBatch is resolved, to prevent errors caused by updates while submitBatch is pending
                // oView.setBusy(true);
                // oView.getModel().submitBatch(oView.getModel().getUpdateGroupId()).then(resetBusy, resetBusy);
            },

            calculateAmount: function () {

                MessageToast.show('calculate');
                var oTable = this.byId("OrderTable")
                var selected = this.extensionAPI.byId("OrderTable").getSelectedContexts();
                
                

                MessageToast.show('selected row count' + selected.length);

                //working
                // MessageBox.show(
                //     "This message should appear in the message box."+selected, {
                //         icon: MessageBox.Icon.INFORMATION,
                //         title: "My message box title",
                //         actions: [MessageBox.Action.YES, MessageBox.Action.NO],
                //         emphasizedAction: MessageBox.Action.YES,
                //         onClose: function (oAction) { / * do something * / }
                //     }
                // );

                 try {
                  var len =  oTable.getBindingContext();
                  MessageToast.show('lenth  :' + len);

                    for (var i = 0; i < selected.length; i++) {
                        var item = selected.length[i];
                        // var bindingpath=selected[i].getModel().getBindingContext().getPath;
                        // var myData= selected[i].getModel().getObject(bindingpath);
                        MessageToast.show('item :' + item+i);
                    }


                } catch (error) {
                    MessageToast.show(error);

                }


    


            },

            onSelectionChange: function (oEvent) {
                MessageToast.show('selection change');

                // try {
                //     const currentContext = oEvent.getParameter("bindingContext") ?? oEvent.getSource().getSelectedContexts()[0];
                //     // if (currentContext && currentContext.getObject("IsActiveEntity") === false) {
                //     this.getView().getModel("ui").setProperty("/isEditable", true);
                //     // } else {
                //     //     this.getView().getModel("ui").setProperty("/isEditable", false);
                //     // }
                //     const model = currentContext.getModel();
                //     const contextBinding = model.bindContext(currentContext.getPath());
                //     const targetContext = contextBinding.getBoundContext();

                //     this.getView().setBindingContext(targetContext);

                // } catch (error) {
                //     MessageToast.show('error' + error);
                // }

                MessageToast.show('selection change2');
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

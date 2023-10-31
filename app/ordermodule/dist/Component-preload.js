//@ui5-bundle ordermodule/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"ordermodule/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("ordermodule.Component",{metadata:{manifest:"json"}})});
},
	"ordermodule/ext/main/Main.controller.js":function(){sap.ui.define(["sap/fe/core/PageController","sap/m/MessageToast","sap/ui/model/json/JSONModel"],function(e,t,i){"use strict";return e.extend("ordermodule.ext.main.Main",{onInit:function(){e.prototype.onInit.apply(this);this.getView().getModel("ui").setProperty("/isEditable",true)},onSelectEdit:function(e){t.show("Toggle edit pressed");this.getView().getModel("ui").setProperty("/isEditable",e.getParameter("selected"))}})});
},
	"ordermodule/ext/main/Main.view.xml":'<mvc:View xmlns:core="sap.ui.core" xmlns:mvc="sap.ui.core.mvc" xmlns="sap.m" xmlns:macros="sap.fe.macros" xmlns:html="http://www.w3.org/1999/xhtml" controllerName="ordermodule.ext.main.Main"><Page id="Main" title="Main"><Panel id="panel"><headerToolbar><OverflowToolbar id="overtoolb"><CheckBox id="checkb1"\r\n                        text="{i18n>toggleEditMode}"\r\n                        selected="{ui>/isEditable}"\r\n                        select=".onSelectEdit"\r\n                    /><CheckBox id="checkb2"\r\n                        text="{i18n>toggleTableBusy}"\r\n                        selected="{ui>/isBusy}"\r\n                        select=".onSelectBusy"\r\n                    /></OverflowToolbar></headerToolbar></Panel><content><macros:FilterBar id="ordersfilterbar" metaPath="@com.sap.vocabularies.UI.v1.SelectionFields"/><macros:Table id="OrderTable" \r\n                      \r\n                      metaPath="@com.sap.vocabularies.UI.v1.LineItem" \r\n                       enableExport="true" enableFullScreen="true" enablePaste="false" filterBar="ordersfilterbar" header="Order Management" headerVisible="true" isSearchable="true"  selectionMode="Multi" type="Responsive" /></content></Page></mvc:View>',
	"ordermodule/i18n/i18n.properties":'# This is the resource bundle for ordermodule\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Order Management\n\n#YDES: Application description\nappDescription=A Fiori application.\n\nflpTitle=Order Management\n',
	"ordermodule/manifest.json":'{"_version":"1.58.0","sap.app":{"id":"ordermodule","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:fpm","version":"1.11.3","toolsId":"b5c1909d-d902-4886-bddf-a94b4d62104c"},"dataSources":{"mainService":{"uri":"sap/odata/API_SALES_ORDER/","type":"OData","settings":{"annotations":[],"localUri":"localService/metadata.xml","odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"OrdersSemantic-Maintain":{"semanticObject":"OrdersSemantic","action":"Maintain","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.119.2","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{},"sap.f":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"ordermodule.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"routes":[{"name":"OrderSetMain","pattern":":?query:","target":["OrderSetMain"]},{"name":"OrderSetObjectPage","pattern":"OrderSet({OrderSetKey}):?query:","target":["OrderSetMain","OrderSetObjectPage"]}],"targets":{"OrderSetMain":{"type":"Component","id":"OrderSetMain","name":"sap.fe.core.fpm","options":{"settings":{"viewName":"ordermodule.ext.main.Main","contextPath":"/OrderSet","navigation":{"OrderSet":{"detail":{"route":"OrderSetObjectPage"}}}}},"controlAggregation":"beginColumnPages","contextPattern":""},"OrderSetObjectPage":{"type":"Component","id":"OrderSetObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"navigation":{},"contextPath":"/OrderSet"}},"controlAggregation":"midColumnPages","contextPattern":"/OrderSet({OrderSetKey})"}},"config":{"flexibleColumnLayout":{"defaultTwoColumnLayoutType":"TwoColumnsMidExpanded","defaultThreeColumnLayoutType":"ThreeColumnsMidExpanded"},"routerClass":"sap.f.routing.Router"}},"extends":{"extensions":{"sap.ui.controllerExtensions":{}}},"rootView":{"viewName":"sap.fe.templates.RootContainer.view.Fcl","type":"XML","async":true,"id":"appRootView"}},"sap.cloud":{"public":true,"service":"Orders"}}'
}});
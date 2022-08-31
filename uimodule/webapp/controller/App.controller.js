sap.ui.define([
  "sap/ui/core/mvc/Controller"
  ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} BaseController
     */
    function (BaseController) {
        "use strict";

        return BaseController.extend("sap.ui.demo.walkthrough.controller.App", {
          onInit: function () {
            this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
        },
        onOpenDialog: function () {
            this.getOwnerComponent().openHelloDialog();
        }
        });
    }
);

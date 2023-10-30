sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ordermodule/test/integration/FirstJourney',
		'ordermodule/test/integration/pages/OrderSetMain'
    ],
    function(JourneyRunner, opaJourney, OrderSetMain) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ordermodule') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheOrderSetMain: OrderSetMain
                }
            },
            opaJourney.run
        );
    }
);
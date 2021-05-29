// WRONG: do not use reference to ../../../jqwidgets-ts/jqwidgets.d.ts"
/// <reference path="../node_modules/jqwidgets-scripts/jqwidgets-ts/jqwidgets.d.ts" />;

$(document).ready(() => {

	let layout_middle_horizontal = [{
		type: 'layoutGroup',
		orientation: 'horizontal',
		height: "100%",
		items: [
			{
				type: 'tabbedGroup',
				width: '20%',
				items: [
					{
						type: 'layoutPanel',
						title: 'Bots',
						contentContainer: 'PanelBots'
					}, 
					{
						type: 'layoutPanel',
						title: 'Setup',
						contentContainer: 'PanelSetup'
					}
				]	
			}, 
			{
				type: 'tabbedGroup',
				width: '60%',
				items: [
					{
						type: 'layoutPanel',
						title: 'Rates',
						contentContainer: 'PanelRates'
					},
					{
						type: 'layoutPanel',
						title: 'Currencies',
						contentContainer: 'PanelCurrencies'
					}
				]
			},
			{
				type: 'tabbedGroup',
				width: '20%',
				items: [{
					type: 'layoutPanel',
					title: 'Properties',
					contentContainer: 'PanelProperties'
				}]
			}
		]
	}];

	let layout = [{
		type: 'layoutGroup',
		orientation: 'vertical',
		items: [
			{
				type: "documentGroup",
				height: "20%",
				title: 'Document 1',
				items: [
					{
						type: 'documentPanel',			
						title: 'Overview',
						contentContainer: 'PanelOverview'
					},
					{
						type: 'documentPanel',			
						title: 'Exchanges',
						contentContainer: 'PanelExchanges'
					},
					{
						type: 'documentPanel',			
						title: 'Server',
						contentContainer: 'PanelServer'
					}

				]
			}, 
			{
				type: 'layoutGroup',
				height: "60%",
				items: layout_middle_horizontal
			}, 
			{
				type: 'tabbedGroup',
				height: "20%",
				items: [
					{
						type: 'layoutPanel',
						title: 'Animations',
						contentContainer: 'PanelAnimations'
					},
					{
						type: 'layoutPanel',
						title: 'About',
						contentContainer: 'PanelAbout'
					}

				]
			}
		]
	}];

	let docking_layout: jqwidgets.jqxDockingLayout = jqwidgets.createInstance('#jqxDockingLayout', 'jqxDockingLayout', { width: "100%", height: "100%", layout: layout });

	$("#save").on( "click", ()=>{

		// WRONG: I am forced to type cast to <any> because saveLayout does not exist on docking_layout.saveLayout <------(this can not compile)
		//let data = (<any>$('#jqxDockingLayout')).jqxDockingLayout('saveLayout');

		let data = docking_layout.saveLayout();

		let test = JSON.stringify(data, null, 2);
		localStorage.setItem("test", test);
	});

	$("#load").on( "click", ()=>{
		let test = localStorage.getItem("test");

		// WRONG: I am forced to type cast to <any> because loadLayout does not exist on docking_layout.loadLayout <------(this can not compile)
		//(<any>$('#jqxDockingLayout')).jqxDockingLayout('loadLayout', JSON.parse(test));

		docking_layout.loadLayout(JSON.parse(test));
	});
	
	$("#create").on( "click", ()=>{
		// WRONG: this part is weird because I can access the addFloatGroup on the docking_layout, but cannot access saveLayout or loadLayout
		docking_layout.addFloatGroup( 300, 200, {x:100, y:100}, 'layoutPanel', 'Rates', ``, "initContent");
	});

});
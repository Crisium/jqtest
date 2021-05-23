
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
				//type: 'documentGroup',
				type: "documentGroup",
				height: "20%",
				title: 'Document 1',
				items: [
					{
						type: 'documentPanel',				//  "documentGroup", "documentPanel", "layoutPanel", "layoutGroup", "tabbedGroup", "autoHideGroup"
						title: 'Overview',
						contentContainer: 'PanelOverview'
					},
					{
						type: 'documentPanel',				//  "documentGroup", "documentPanel", "layoutPanel", "layoutGroup", "tabbedGroup", "autoHideGroup"
						title: 'Exchanges',
						contentContainer: 'PanelExchanges'
					},
					{
						type: 'documentPanel',				//  "documentGroup", "documentPanel", "layoutPanel", "layoutGroup", "tabbedGroup", "autoHideGroup"
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

	let lo = jqwidgets.createInstance('#jqxDockingLayout', 'jqxDockingLayout', { width: "100%", height: "100%", layout: layout });

	let data = undefined;

	$("#save").on( "click", ()=>{

		console.log("saving");

		let data = (<any>$('#jqxDockingLayout')).jqxDockingLayout('saveLayout');
		let test = JSON.stringify(data, null, 2);
		localStorage.setItem("test", test);
	});

	$("#load").on( "click", ()=>{

		console.log("loading");

		let test = localStorage.getItem("test");
		console.log(test);

		(<any>$('#jqxDockingLayout')).jqxDockingLayout('loadLayout', JSON.parse(test));
	});
	
	$("#create").on( "click", ()=>{
		let uid:string = "3453-345-345-345-35";
		lo.addFloatGroup( 300, 200, {x:100, y:100}, 'layoutPanel', 'Rates', `<div id='${uid}'></div>`);
	});

});
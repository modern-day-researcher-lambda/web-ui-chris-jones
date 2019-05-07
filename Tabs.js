//Tabs Component
let tabs = document.querySelectorAll('#tabstrip > span'),
	panels = document.querySelectorAll('#tabstrip > div'),
	length = tabs.length,
	currentTab,
	currentPanel;

function getToggler(newTab, newPanel) {
	return function() {
		currentTab.className = 'tab inactiveTab';
		currentPanel.className = 'inactivePanel';
		newTab.className = 'tab activeTab';
		newPanel.className = 'activePanel';
		currentTab = newTab;
		currentPanel = newPanel;
	};
}

if (length !== panels.length)
	throw new Error(
		'Number of tabs (' + length + ') and number of content panels (' + panels.length + ') are not equal'
	);

for (var i = 0; i < length; i++) {
	var tab = tabs[i];
	var panel = panels[i];

	tab.className = 'tab inactiveTab';
	tab.addEventListener('click', getToggler(tab, panel), false);
	panel.className = 'inactivePanel';
}

currentTab = tabs[0];
currentPanel = panels[0];
currentTab.className = 'tab activeTab';
currentPanel.className = 'activePanel';

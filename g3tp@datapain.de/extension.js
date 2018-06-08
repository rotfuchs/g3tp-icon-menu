const Lang = imports.lang;
const St = imports.gi.St;
const Main = imports.ui.main;
const Gdk = imports.gi.Gdk;
const Gtk = imports.gi.Gtk;
const Util = imports.misc.util;

const PanelMenu = imports.ui.panelMenu;
const PopupMenu = imports.ui.popupMenu;

const ExtensionUtils = imports.misc.extensionUtils;
const Meta = ExtensionUtils.getCurrentExtension();

function init() {}

function enable() {
	let panelMenu;
	let layoutManager;
	let icon;

    Gtk.IconTheme.get_default().append_search_path(Meta.dir.get_child('icons').get_path());

    panelMenu = new PanelMenu.Button(0.0, "g3tDemoOptions", false);

    icon = new St.Icon({ icon_name: 'squirrel_white_enabled',
                         style_class: 'system-status-icon' });

    layoutManager = new St.BoxLayout({vertical: false, style_class: 'g3tp-container'});
    layoutManager.add(icon);

    panelMenu.actor.add_actor(layoutManager);
    
    panelMenu.menu.addAction('Open Terminal', Lang.bind(this, _execTerminalCmdDemo));
    

    Main.panel.addToStatusArea('g3tDemo', panelMenu, 1);
}

function disable() {}

function _execTerminalCmdDemo() {
    Util.spawn(['gnome-terminal']);
}

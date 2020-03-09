const electron = require('electron');
const url = require('url');
const path = require('path');
var os = require('os');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;

// Listen

app.on('ready', function () {
    mainWindow = new BrowserWindow({transparent:false});
    //html of main window or first key
    mainWindow.loadURL(url.format({pathname : path.join(__dirname, 'main.html'),
    protocol : 'file:', slashes : true
    }));
    //using the array with the menu items to build the custom menu
    const mainMenu = Menu.buildFromTemplate(mainMenuOptions);
    Menu.setApplicationMenu(mainMenu);
});

let mainMenuOptions = [];
if (os.type() === 'Linux'){
    mainMenuOptions = [
        {

        }
    ]
}
else if (os.type() === 'Darwin'){
    mainMenuOptions = [
        {
            label: app.getName(),
            submenu: [
                { role: 'about' },
                { type: 'separator' },
                { role: 'services' },
                { type: 'separator' },
                { role: 'hide' },
                { role: 'hideothers' },
                { role: 'unhide' },
                { type: 'separator' },
                { role: 'quit' }
            ]
        },
        {
            label : 'FILE NEW',
            submenu: [
                {label: 'test'},
                {type: 'separator'},
                {label: 'BLA'}
            ]
        },
        {
            label: 'Edit',
            submenu: [
                { role: 'undo' },
                { role: 'redo' },
                { type: 'separator' },
                { role: 'cut' },
                { role: 'copy' },
                { role: 'paste' },
                { role: 'pasteandmatchstyle' },
                { role: 'delete' },
                { role: 'selectall' },
                { type: 'separator' },
                { role: 'reload' },
                { role: 'toggleFullScreen' },
                { role: 'toggleDevTools' },
                { type: 'separator' },
                { role: 'quit' }
            ]
        }
    ];
    //doc menu for MAC OS X
    const dockMenu = Menu.buildFromTemplate([
        {
            label: 'New Window',
            click () { console.log('New Window') }
        }, {
            label: 'New Window with Settings',
            submenu: [
                { label: 'Basic' },
                { label: 'Pro' }
            ]
        },
        { label: 'New Command...' }
    ])
}
else if (os.type() === 'Windows_NT'){
    mainMenuOptions = [
        {

        }
    ]
}
else {
    console.log('SYSTEM\'S UNKNOWN')
    mainMenuOptions = [
        {

        }
    ]
}

/*

const mainMenuOptions = [
    {
        label: app.getName(),
        submenu: [
            { role: 'about' },
            { type: 'separator' },
            { role: 'services' },
            { type: 'separator' },
            { role: 'hide' },
            { role: 'hideothers' },
            { role: 'unhide' },
            { type: 'separator' },
            { role: 'quit' }
        ]
    },
    {
        label : 'FILE NEW',
        submenu: [
            {role: 'test'},
            {role: 'separator'},
            {role: 'BLA'}
        ]
    },
    {
        label: 'Edit',
        submenu: [
            { role: 'undo' },
            { role: 'redo' },
            { type: 'separator' },
            { role: 'cut' },
            { role: 'copy' },
            { role: 'paste' },
            { role: 'pasteandmatchstyle' },
            { role: 'delete' },
            { role: 'selectall' },
            { type: 'separator' },
            { role: 'reload' },
            { role: 'toggleFullScreen' },
            { role: 'toggleDevTools' },
            { type: 'separator' },
            { role: 'quit' }
        ]
    }
];*/
StartTest(function(t) {

    var userStore = new Ext.data.Store({
        model : 'My.model.User',
        data        : [
            { id : 1,        name : 'Mats',     img : 'resources/images/mats.jpeg' },
            { id : 2,        name : 'Homer',    img : 'resources/images/homer.jpg' },
            { id : 3,        name : 'Brian',    img : 'resources/images/brian.jpeg'}
        ]
    })

    var taskStore = new Ext.data.Store({
        model : 'My.model.Task',
        data        : [
            { id : 1,        name : 'Fix IE7 bug', state : 0, nbrComments : 0, userId : 1, userName : 'Mats'},
            { id : 2,        name : 'Sneak-install Chrome Frame', state : 0, nbrComments : 1, userId : 1, userName : 'Mats'},
            { id : 12,       name : 'Add Windows Phone support', state : 1, nbrComments : 1, userId : 3, userName : 'Brian'},
            { id : 122,      name : 'Make App', state : 1, nbrComments : 1, userName : ''},
            { id : 3,        name : 'Task 222 foo bar lots of text in this one eh? Fooooo', state : 2, nbrComments : 0, userName : ''},
            { id : 4,        name : 'Find Unicorn', state : 2, nbrComments : 0, userName : 'Homer', userId : 2},
            { id : 5,        name : 'IE6 support', state : 1, nbrComments : 0, userName : ''},
            { id : 6,        name : 'Chrome development', state : 3, nbrComments : 0, userName : ''},
            { id : 7,        name : 'Find holy grail', state : 3, nbrComments : 1, userName : ''},
            { id : 8,        name : 'Dig hole', state : 3, nbrComments : 0, userName : ''},
            { id : 9,        name : 'Eat raisins', state : 3, nbrComments : 3, userName : ''}
        ]
    });

    var scrumPanel = new My.view.ScrumPanel({
        userStore           : userStore,
        taskStore           : taskStore
    });

    var vp = new Ext.Viewport({
        items   : scrumPanel,
        layout  : 'fit',
        padding : 30
    });

    t.waitForSelector('.scrum-scrumpanel', function() {
        t.pass('Component rendered without exception');

        t.monkeyTest(vp.el, 10);
    });
})    

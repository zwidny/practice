describe('ItemCtrl with inline mock', function () {
    beforeEach(module('notesApp1'));

    var ctrl, mockService;
    beforeEach(module(function ($provide) {
        mockService = {
            list: function () {
                return [{id:1, label: 'Mock'}];
            }
        };
        $provide.value('ItemService', mockService);
    }));
    beforeEach(inject(function ($controller) {
        ctrl = $controller('ItemCtrl');
    }));
    it('should load mocked out times', function () {
        expect(ctrl.items).toEqual([{id:1, label: 'Mock'}]);
    })
});
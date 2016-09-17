(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.toBuyItems;

    toBuy.buyItemByIndex = function(itemIndex) {
      ShoppingListCheckOffService.buyItemByIndex(itemIndex);
    }
  }

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var alreadyBought = this;

    alreadyBought.items = ShoppingListCheckOffService.boughtItems;
  }

  function ShoppingListCheckOffService() {
    var service = this;

    service.toBuyItems = [{
      name: 'bags of cookies',
      quantity: 5,
    }, {
      name: 'cases of root beer',
      quantity: 4,
    }, {
      name: 'disco ball',
      quantity: 1,
    }, {
      name: 'sweet vinyl records',
      quantity: 6,
    }, {
      name: 'frozen pizzas',
      quantity: 20,
    }];

    service.boughtItems = [];

    service.buyItemByIndex = function(itemIndex) {
      var purchasedItems = service.toBuyItems.splice(itemIndex, 1);

      service.boughtItems.push(purchasedItems[0]);
    };
  }
})();

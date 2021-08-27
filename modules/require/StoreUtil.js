define(function () {
  return  {
    setItem : function(key, value) {
      kony.store.setItem(key, JSON.stringify(value));
    },

    getItem : function(key) {
      var o = kony.store.getItem(key);
      if (o) {
        return JSON.parse(o);
      }else {
        return null;
      }
    },
    setRawItem : function(key, value) {
      kony.store.setItem(key,value);
    },
    getRawItem : function(key){
      return kony.store.getItem(key);
    },
    removeItem : function(key) {
      kony.store.removeItem(key);
    },
    setVariable : function(key,value){
      if(typeof collectionStore == "undefined"){
        collectionStore = {};
      }
      collectionStore[key] = JSON.stringify(value);
    },
    getVariable : function(key) {
      if(typeof collectionStore == "undefined"){
        collectionStore = {};
      }
      var o = collectionStore[key];
      if (o) {
        return JSON.parse(o);
      }else {
        return null;
      }
    },
    removeVariable : function(key) {
      if(typeof collectionStore == "undefined"){
        collectionStore = {};
      }
      delete collectionStore[key];
    },
  };
});
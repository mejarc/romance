// https://github.com/velesin/jasmine-jquery
// describe("selectElements", function(){
//   beforeEach(function(){
//     elms = selectElements();
//   });

//   it("finds the element that toggles visibility", function(){
//     expect(elms.toggler).toBeDefined();
//   });
  
//   it("finds the element that holds the pseudonym", function(){
//     expect(elms.nameHolder).toBeDefined();
//   });
// });
describe("App", function(){
  beforeEach(function(){
    RomanceApp.init();
  });

  describe("bindActions", function(){
    it("hides the #toggler element on loading #wrapper", function(){
      expect(items.toggler).not.toBeVisible();
    });
    it("adds an onclick event to #generator", function(){
      var generator = items.generator;
      expect(generator.on('click')).toBeDefined();
    })
  });

  describe("toggleElement", function(){
    var wrapper = items.wrapper;
    RomanceApp.toggleElement(wrapper);
    it("toggles the visibility of a given element", function(){
      expect(wrapper).not.toBeVisible();
    });
  });

  describe("handleName", function(){
    var reporter = items.reporter,
      generator = items.generator,
      pseudonym = RomanceApp.fetchName('click');
    RomanceApp.handleName();

    it("removes the placeholder", function(){
      expect(reporter.attr('placeholder')).not.toBeDefined();
    });
    it("sets the value of #reporter to the pseudonym", function(){
      var val = reporter.val();
      expect(val).toEqual(pseudonym);
    })
  });

  describe("fetchName", function(){
    it("intercepts a post request to /names")
    it("calls handleName() onsuccess")
  });
    
});

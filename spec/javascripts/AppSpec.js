describe("App", function(){
  beforeEach(function(){
    RomanceApp.init();
  });

 sharedSetup = function(){
  
    return reporter, generator, pseudonym;
  }

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
        e = jasmine.createSpyObj('evt', ['preventDefault']),
        pseudonym = RomanceApp.fetchName(e);
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

  describe("postName", function(){
    var reporter = items.reporter,
          generator = items.generator,
          e = jasmine.createSpyObj('evt', ['preventDefault']),
          pseudonym = RomanceApp.fetchName(e);
      RomanceApp.handleName();

    it("returns the current value of the #reporter input", function(){
      var val = items.reporter.val();
      expect(RomanceApp.postName()).toEqual(val);
    })
  });
    
});

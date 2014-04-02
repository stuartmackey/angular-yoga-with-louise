'use strict';

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /home when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });

  describe('home', function() {
    beforeEach(function() {
      browser.get('index.html#/home');
    });

    it('should render home when user navigates to /home', function() {
      expect(element.all(by.css('[ng-view] h2')).first().getText()).
        toMatch(/Welcome to Yoga With Louise./);
    });
  });

  describe('classes', function() {
    beforeEach(function() {
      browser.get('index.html#/classes');
    });

    it('should render classes when user navigates to /classes', function() {
      expect(element.all(by.css('[ng-view] h2')).first().getText()).
        toMatch(/Classes/);
    });
  });

  describe('timetable', function() {
    beforeEach(function() {
      browser.get('index.html#/timetable');
    });

    it('should render classes when user navigates to /timetable', function() {
      expect(element.all(by.css('[ng-view] h2')).first().getText()).
        toMatch(/Timetable/);
    });
  });

  describe('about', function() {
    beforeEach(function() {
      browser.get('index.html#/about');
    });

    it('should render classes when user navigates to /about', function() {
      expect(element.all(by.css('[ng-view] h2')).first().getText()).
        toMatch(/About Me/);
    });
  });

  describe('contact', function() {
    beforeEach(function() {
      browser.get('index.html#/contact');
    });

    it('should render classes when user navigates to /contact', function() {
      expect(element.all(by.css('[ng-view] h2')).first().getText()).
        toMatch(/Contact Information/);
    });
  });

  describe('other therapies', function() {
    beforeEach(function() {
      browser.get('index.html#/other_therapies');
    });

    it('should render classes when user navigates to /other_therapies', function() {
      expect(element.all(by.css('[ng-view] h2')).first().getText()).
        toMatch(/Other Therapies/);
    });
  });
});

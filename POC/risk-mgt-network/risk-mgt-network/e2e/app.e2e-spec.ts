import { AngularTestPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('Starting tests for risk-mgt-network', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be risk-mgt-network', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('risk-mgt-network');
    })
  });

  it('navbar-brand should be risk-mgt-network@0.0.1',() => {
    var navbarBrand = element(by.css('.navbar-brand')).getWebElement();
    expect(navbarBrand.getText()).toBe('risk-mgt-network@0.0.1');
  });

  
    it('Coins component should be loadable',() => {
      page.navigateTo('/Coins');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Coins');
    });

    it('Coins table should have 5 columns',() => {
      page.navigateTo('/Coins');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });

  
    it('Energy component should be loadable',() => {
      page.navigateTo('/Energy');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Energy');
    });

    it('Energy table should have 6 columns',() => {
      page.navigateTo('/Energy');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(6); // Addition of 1 for 'Action' column
      });
    });

  
    it('Cash component should be loadable',() => {
      page.navigateTo('/Cash');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Cash');
    });

    it('Cash table should have 6 columns',() => {
      page.navigateTo('/Cash');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(6); // Addition of 1 for 'Action' column
      });
    });

  

});

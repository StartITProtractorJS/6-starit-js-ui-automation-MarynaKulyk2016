import { expect } from "chai";

describe('Customer', function () {
    it("Opens customer service page", function() {
        const defaultMenu = $('#default-menu');
        const customerServiceLink = defaultMenu.$('.customer-service a');
        customerServiceLink.click();
        expect($('#box-customer-service').isVisible()).to.be.true;
    });

    const informationLinks = $('#box-information-links');

    it("Opens cookie policy page", function() {
        const cookiePolicy = informationLinks.$('.nav-pills a[href*="cookie-policy"]');
        cookiePolicy.click();
        browser.pause(1000);
        const cookieTitle = browser.getTitle();
        const mainTitle = $('h1').getText();
        expect(cookieTitle).includes('Cookie Policy');
        expect(mainTitle).includes('Cookie Policy');
    });

    it("Opens delivery info page", function() {
        const deliveryInfo = informationLinks.$('.nav-pills a[href*="delivery-information"]');
        deliveryInfo.click();
        browser.pause(1000);
        const deliveryTitle = browser.getTitle();
        expect(deliveryTitle).includes('Delivery Information');
    });

    it("Opens newsletter page", function() {
        const newsletterPage = informationLinks.$('.nav-pills a[href*="newsletter"]');
        newsletterPage.click();
        browser.pause(1000);
        const newsletterTitle = browser.getTitle();
        expect(newsletterTitle).includes('Newsletter');
    });

    it("Opens privacy page", function() {
        const privacyPage = informationLinks.$('.nav-pills a[href*="privacy-policy"]');
        privacyPage.click();
        browser.pause(1000);
        const privacyPolicy = browser.getTitle();
        expect(privacyPolicy).includes('Privacy Policy');
    });

    it("Opens terms page", function() {
        const termsPage = informationLinks.$('.nav-pills a[href*="terms-conditions"]');
        termsPage.click();
        browser.pause(1000);
        const termsTitle = browser.getTitle();
        expect(termsTitle).includes('Terms & Conditions');
    });
});
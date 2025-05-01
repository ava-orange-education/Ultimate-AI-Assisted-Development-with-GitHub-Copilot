// GitHub Copilot Prompt:
// Write an Appium test script for a ride booking scenario on a mobile app.
// Automate entering pickup & drop locations and confirming the ride.

const wd = require('wd');
const assert = require('assert');

const driver = wd.promiseChainRemote('http://localhost:4723/wd/hub');

const desiredCaps = {
    platformName: 'Android',
    deviceName: 'Android Emulator',
    appPackage: 'com.rideshare.booking',
    appActivity: 'com.rideshare.booking.MainActivity',
    automationName: 'UiAutomator2',
};

async function runTest() {
    try {
        await driver.init(desiredCaps);

        // Enter pickup location
        const pickupInput = await driver.elementById('com.rideshare.booking:id/pickup_input');
        await pickupInput.sendKeys('Central Park');

        // Enter drop location
        const dropInput = await driver.elementById('com.rideshare.booking:id/drop_input');
        await dropInput.sendKeys('Times Square');

        // Confirm ride
        const confirmButton = await driver.elementById('com.rideshare.booking:id/confirm_button');
        await confirmButton.click();

        // Assert confirmation
        const confirmation = await driver.elementById('com.rideshare.booking:id/confirmation_message');
        const message = await confirmation.text();
        assert.strictEqual(message, 'Your ride has been booked!');

        console.log('✅ Ride booking test passed.');

    } catch (err) {
        console.error('❌ Ride booking test failed:', err);
    } finally {
        await driver.quit();
    }
}

runTest();

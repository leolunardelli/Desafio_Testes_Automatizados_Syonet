import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin';
import 'cypress-iframe';

addMatchImageSnapshotPlugin();

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`;
    cy.screenshot(screenshotFileName, { capture: 'runner' });
  }
});

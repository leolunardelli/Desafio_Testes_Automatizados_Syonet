const { create } = require('mochawesome-screenshots');
const merge = require('mochawesome-merge');
const generator = require('mochawesome-report-generator');

module.exports = (on, config) => {
  on('after:run', async (results) => {
    // Gera os screenshots e salva na pasta cypress/screenshots
    await create(config);
    
    // Junta todos os arquivos de relatórios
    const report = await merge({ files: ['cypress/results/*.json'] });

    // Gera o relatório HTML e salva na pasta cypress/reports
    await generator.create(report, { reportDir: 'cypress/reports' });
  });
};

import 'cypress-file-upload'

describe('File Operations', () => {
    it('file rename upload',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile({filePath:'ex.txt',fileName:'firstFile.txt'})
        cy.get('#file-submit').click()
        cy.get('#content > div > h3').should('have.text','File Uploaded!')

    })
    it.skip(' file upload',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile('ex.txt')
        cy.get('#file-submit').click()
        cy.get('#content > div > h3').should('have.text','File Uploaded!')

    })
    it.skip(' multiple files upload',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
        cy.get('#filesToUpload').attachFile(['ex.txt','ex2.txt'])
        cy.wait(2000)
        cy.get('p>strong').contains('Files You Selected:')

    })
    it.skip(' file upload by drag and drop',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#drag-drop-upload').attachFile('ex.txt',{subjectType:'drag-n-drop'})
        cy.get('.dz-filename>span:nth-child(1)').contains('ex.txt')

    })
    it.only('files upload by shadow DOM',()=>{
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm');
        cy.get('smart-file-upload:nth-child(1) > div:nth-child(1) > div:nth-child(1) > smart-button:nth-child(1) > button:nth-child(1)',{includeShadowDom:true}).attachFile('ex.txt')
       cy.wait(2000)
    //cy.get('.smart-selected-files',{includeShadowDom:true}).contains('ex.txt')

    })
});
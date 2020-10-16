describe('Open Site', () => {
    it('test', () => {
        //   cy.visit()
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Layouts').click()

    })
    it('inline Form', () => {
        cy.get('[placeholder="Jane Doe"]').type('Farid Aziz Wicaksono')
        cy.get('[type="text"][placeholder="Email"]')
            .type('faridazizw@gmail.com')
        cy.contains('Remember me').first().click()
        // cy.contains('Inline form').get('[class="custom-checkbox"]').should('be.checked')
    });

    it('using the Grid', () => {
        cy.get('[data-cy="imputEmail1"]').type('faridazizw@gmail.com')
        cy.get('#inputPassword2').type('qaz123')
        cy.contains('Option 1').click()
        // cy.contains('Option 2').click()

    });
    
    it('Basic Form', () => {
        cy.get('#exampleInputEmail1').type('faridazizw@gmail.com')
        cy.get('#exampleInputPassword1').type('qaz123')
        cy.contains('Check me out').click()
    });

    it('Form without labels', () => {
        cy.get('[placeholder="Recipients"]').type('Farid')
        cy.get('[placeholder="Subject"]').type('Aziz')
        cy.get('[placeholder="Message"]').type('Wicaksono')
    });

    it('Block Form', () => {
        cy.get('#inputFirstName').type('Farid')
        cy.get('#inputLastName').type('Aziz')
        cy.get('#inputEmail').type('faridaziz@gmail.com')
        cy.contains('Website').type('hndr91.github.io/demo-ui/')
    });

    it('Horizontal Form', () => {
        cy.get('#inputEmail3').type('faridaziz@gmail.com')
        cy.get('#inputPassword3').type('qaz123')
        cy.get('.custom-checkbox').last().click()
    });
})
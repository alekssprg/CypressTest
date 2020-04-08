context('Actions', () => {
  it('Authorization is passed', () => {
	
	cy.visit('http://localhost:60000/')
	//debugger;
    cy.get('#login').type('admin').should('have.value', 'admin');
	cy.get('#password').type('1234567');
    
	cy.get('[class=btn-login]').click();

	cy.get('[id=DOCTOR]').click();
	
	cy.get('[id=panelTree]').should('have.css', 'width', '225px');
	//доступ к окну браузера
	cy.window().then( win => {
		//debugger;
		return win.App['panelTree'].el.dom;
		win.SpargoJS.UtilsJs
	}).should('have.css', 'width', '225px');

  })
  
  it('Service Find recipe check', () => {
	 //TODO: тело запроса нужно запихнуть в параметры - fixture
	cy.request({
		url: 'http://localhost:60003/RecipeService.asmx',
		method: 'POST',
		body: `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <RecipeFind xmlns="http://tempuri.org/">
      <clientId>147</clientId>
      <seria>4716</seria>
      <number>8000012</number>
      <saleDate>2016-11-23</saleDate>
    </RecipeFind>
  </soap:Body>
</soap:Envelope>`,
		headers: { 'Content-Type':'text/xml', 'charset': 'utf-8'}
	}).as('recipes');
	
	cy.get('@recipes').should((response) => {
		debugger;
		expect(response.status).to.eq(200)
		expect(response).to.have.property('allRequestResponses')
		expect(response.allRequestResponses).to.have.property('0')
		expect(response.allRequestResponses[0]).to.have.property("Response Body")
		expect(response.allRequestResponses[0]["Response Body"]).to.have.length.above(300)
	});
  })
//});

})
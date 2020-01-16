/// <reference types="cypress" />
/**
 * fortune.spec.ts
 * 占いAPIのテスト
 * 
 * @package Hoge
 * @since XXXX/XX/XX
 * @copyright hogehoge.jp
 */
/**
 * 占いAPIのテスト
 * 
 * @author Hoge(hoge@hogehoge.jp)
 */
describe("占いAPIのテスト", () => {

    const uri = Cypress.env("graphqlEndpoint");

    /**
     * 正常系
     */
    context("[正常系]", () => {

        it(`fortuneInfo にアクセスしてhogehoge`, () => {
            cy.request("POST", uri, {
                query: `{
                    fortuneInfo(astroCode: 3) {
                        astroCode,
                        astroName,
                        rank
                    }
                }`
            })./*debug()*/then((response: Cypress.Response) => {
                cy.log(response.body);
                expect(response.status).equals(200);

                const actual = response.body.data.fortuneInfo;
                
                expect(actual).to.have.property("astroCode", 3);
                expect(actual).to.have.property("astroName", "ふたご座");
                expect(actual).to.have.property("rank");
            });
        });
    });

    /**
     * 準正常系
     */
    context("[準正常系]", () => {
        it(`fortuneInfo.astroCode に 13 を渡すと fugafuga`, () => {
            cy.request("POST", uri, {
                query: `{
                    fortuneInfo(astroCode: 13) {
                        astroName,
                        rank
                    }
                }`
            }).then((response: Cypress.Response) => {
                cy.log(response.body);
                expect(response.status).equals(200);

                const actual = response.body.data.fortuneInfo;

                expect(actual).to.be.null;
            });
        });
    });
});

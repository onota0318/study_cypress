/// <reference types="cypress" />
/**
 * weather.spec.ts
 * 天気APIのテスト
 * 
 * @package Hoge
 * @since XXXX/XX/XX
 * @copyright hogehoge.jp
 */

/**
 * 天気APIのテスト
 * 
 * @author Hoge(hoge@hogehoge.jp)
 */
describe("天気APIのテスト", () => {

    const uri = Cypress.env("graphqlEndpoint");

    /**
     * 正常系
     */
    context("[正常系]", () => {
        it("weatherInfo にアクセスしてhogehoge", () => {
            cy.request("POST", uri, {
                query: `{
                    weatherInfo(areaCode: "13103") {
                        code,
                        name,
                        shortName,
                        image,
                        maxtemp,
                        mintemp,
                        text,
                        badgeFlg
                    }
                }`
            }).then((response: Cypress.Response) => {
                cy.log(response.body);
                expect(response.status).equals(200);

                const actual = response.body.data.weatherInfo;
                
                expect(actual).to.have.property("code", "13103");
                expect(actual).to.have.property("name", "港区");
                expect(actual).to.have.property("shortName", "港区");
            });
        });        
    });
});

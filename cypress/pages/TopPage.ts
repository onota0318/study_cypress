/**
 * TopPage
 * 
 * @package Page
 * @since XXXX.XX.XX
 */

/**
 * TopPage
 */
export class TopPage {

    /**
     * constructor  
     */
    public constructor() {
        // cy.visit("https://auone.jp/");
        const res = cy.request(
            "POST",
            "https://api.portal.auone.jp/graphql",
            {query :`{
                seconds:seconds(
                    categoryId:1,
                    cacheBlock:2,
                    limit:22,
                    offset:0
                ){
                    categoryId,
                    categoryName,
                    articles{
                        id,
                        code,
                        cpId,
                        cpName,
                        genreId,
                        genreName,
                        subGenreId,
                        title,
                        shortTitle,
                        hashTimestamp,
                        articleType,
                        postStartDate,
                        postEndDate,
                        updatedDate
                    }
                }
            }`}
        ).debug();
    }
}
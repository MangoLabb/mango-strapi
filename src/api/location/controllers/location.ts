/**
 * location controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::location.location', ({ strapi }) => ({
    async findByUser(ctx) {
        // some logic here
        const userId = Number(ctx.params.id);
        const user =  await strapi.documents('api::telegram-user.telegram-user').findFirst(
            {filters: {userId: userId}, populate: "favoriteLocations"});
// user — это объект, который вы получили из базы (например, результат запроса)
        const documentIds = user.favoriteLocations.map(location => location.documentId);

        console.log(documentIds);
// Результат: ["hieak84mcncj6s5a49k9i8sn", "bm76q02mrauh3pqapk77d2bx", "ulogz9y1ki6evoa6ctv9bdf8"]
    }
}));

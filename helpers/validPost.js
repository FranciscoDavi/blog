function validPost(post) {

    const err = [];

    if (post.title == undefined || post.title == '' || post.title.length <= 3) {
        err.push({ 'err-msg': 'Titulo inválido' });
    } else if (post.category == undefined || post.title == '' || post.title.length <= 3) {
        err.push({ 'err-msg': 'Categoria' });

    } else if (post.body == undefined || post.body == '' || post.title.length <= 3) {
        err.push({ 'err-msg': 'Corpo do post inválido' });
    } else if (post.id_user == undefined || post.id_user == '') {
        err.push({ 'err-msg': 'Usuário não encontrado' });
    }
    if (err.length > 0) {
        return err;
    } else {
        return [];
    }
}

module.exports = validPost;
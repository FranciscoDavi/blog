function validUser(user, confirmPassword) {

    const err = [];

    if (user.firstname == undefined || user.firstname == '' || user.firstname.length <= 3) {
        err.push({ 'err-msg': 'Nome inválido' });
    } else if (user.lastname == undefined || user.lastname == '' || user.firstname.length <= 3) {
        err.push({ 'err-msg': 'Sobrenome inválido' });

    } else if (user.username == undefined || user.username == '' || user.username.length <= 3) {
        err.push({ 'err-msg': 'Nome de usuário inválido' });

    } else if (user.email == undefined || user.email == '' || user.email.length <= 5) {
        err.push({ 'err-msg': 'Email inválido' });

    } else if (user.dat == undefined || user.dat == '' || user.dat.length <= 5) {
        err.push({ 'err-msg': 'Data de nascimento inválida' });

    } else if (user.password == undefined || user.password == '' || user.password.length <= 7 || user.password != confirmPassword) {
        err.push({ 'err-msg': 'Senha inválida ou não coincidem' });
    }

    if (err.length > 0) {
        return err;
    } else {
        return false;
    }
}


module.exports = validUser;
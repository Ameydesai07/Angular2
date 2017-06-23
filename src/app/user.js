"use strict";
/**
 * Created by lt-117 on 21/6/17.
 */
var User = (function () {
    function User(firstName, email, country // optional field
        ) {
        this.firstName = firstName;
        this.email = email;
        this.country = country;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map
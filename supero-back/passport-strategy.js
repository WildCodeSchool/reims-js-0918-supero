const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password"
    },
    function(username, password, cb) {
    
      //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT

      if (password !== "supero") {
        return cb(null, false, { message: "Incorrect username or password." });
      } else {
        return cb(
          null,
          { id: 1, username },
          { message: "Logged In Successfully" }
        );
      }
    }
  )
);

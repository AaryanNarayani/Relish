const GoogleStrategy = require("passport-google-oauth20").Strategy;
import passport from 'passport';
import { Profile } from 'passport-google-oauth20';

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
			callbackURL: "/api/v1/auth/google/callback",
			scope: ["profile", "email"],
		},
		function (_accessToken: string, _refreshToken: string, profile: Profile, callback: (error: any, user?: any) => void) {
			callback(null, profile);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user: Express.User, done) => {
	done(null, user);
});
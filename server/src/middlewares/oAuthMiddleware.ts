const GoogleStrategy = require("passport-google-oauth20").Strategy;
import jwt from 'jsonwebtoken'
import passport from 'passport';
import { Profile } from 'passport-google-oauth20';
import { JWT_SECRET } from '../utils';

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
			callbackURL: "/api/v1/auth/google/callback",
			scope: ["profile", "email"],
		},
		function (_accessToken: string, _refreshToken: string, profile: Profile, callback: (error: any, user?: any) => void) {
			const token = jwt.sign({ id: profile.id }, JWT_SECRET as string, {
                expiresIn: "3h",
              });
			callback(null, {profile , token});
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user: Express.User, done) => {
	done(null, user);
});
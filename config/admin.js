module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8ecad06573e7f35f5e7bf7e8f45f7fce'),
  },
});

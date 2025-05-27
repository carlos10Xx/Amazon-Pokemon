/** @type {import('next').NextConfig} */
const nextConfig = {
   async rewrites() {
       return [
           {
               source: '/api/pokemon',
               destination: 'https://puvqnfngw3.execute-api.eu-west-2.amazonaws.com/Prod/pokemon',
           },
           {
               source: '/api/pokemon/:id',
               destination: 'https://puvqnfngw3.execute-api.eu-west-2.amazonaws.com/Prod/pokemon',
           },
       ];
   }
};


export default nextConfig;

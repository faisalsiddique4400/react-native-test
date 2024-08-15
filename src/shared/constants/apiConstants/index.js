const BASE_URL = 'https://reactnativetest.free.beeceptor.com';
const END_POINT = {
    AUTH: '/api/login',
};
const SOCIAL_GOOGLE = {
    scopes: ['email'],
    webClientId: "374792307532-jjehmevj9kvoot374ll80vqf33usp8b3.apps.googleusercontent.com", // for android
    offlineAccess: true,
    hostedDomain: '',
    forceCodeForRefreshToken: true,
    accountName: '',
    googleServicePlistPath: '',
    openIdRealm: '',
    profileImageSize: 120,

};
export {
    BASE_URL,
    SOCIAL_GOOGLE,
    END_POINT,
};

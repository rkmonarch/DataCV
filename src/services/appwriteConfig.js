
import { Appwrite } from "appwrite";

const sdk = new Appwrite();

sdk
    .setEndpoint('') // Your API Endpoint
    .setProject('') // Your project ID
    ;

 const account = sdk.account;
 export {account,sdk}
 
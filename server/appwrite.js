import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('670b57000000298051d3'); 

export const account = new Account(client);
export { ID } from 'appwrite';






// import { Client, Account, Databases, Query } from "appwrite";

// export const client = new Client();

// client
//   .setEndpoint("https://cloud.appwrite.io/v1")
//   .setProject("670b57000000298051d3"); // Replace with your project ID

// export const account = new Account(client);
// export { ID } from "appwrite";
// export const databases = new Databases(client);

// const client = new Client();
// client.setProject('670b57000000298051d3');

// let promise = databases.listDocuments(
//   "670b6ab200374fa2f0cf",
//   "670b6abf0004447ed7a6",
//   [Query.equal("Name", "Md Danish")]
// );

// promise.then(
//   function (response) {
//     console.log(response);
//   },
//   function (error) {
//     console.log(error);
//   }
// );

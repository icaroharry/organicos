// Load the custom app ES6 modules

import UsersDataService from 'src/map/services/UsersDataService';

import UsersList from 'src/map/components/list/UsersList';
import UserDetails from 'src/map/components/details/UserDetails';

// Define the Angular 'users' module

export default angular
  .module("users", ['ngMaterial'])

  .component(UsersList.name, UsersList.config)
  .component(UserDetails.name, UserDetails.config)

  .service("UsersDataService", UsersDataService);

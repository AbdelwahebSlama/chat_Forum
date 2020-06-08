const API_LOGIN = 'http://localhost:3005/posts/users/login/';
const API_REGISTRE = 'http://localhost:3005/posts/users/registre/';
const API_AJOUTGRP=  'http://localhost:3005/posts/group/registre/';
const Api_getGrp = 'http://localhost:3005/posts/group/get/';
const Api_getStatu = 'http://localhost:3005/posts/messages/';
const Apis_postStatus = 'http://localhost:3005/posts/messages/new/';
const Api_postSComment = 'http://localhost:3005/posts/messages/newMsgFils/:messageId/';
const Api_getgrpById = 'http://localhost:3005/posts/group/getById/';
const Api_getUserById = 'http://localhost:3005/posts/users/me/';

export default {
  api_Login: API_LOGIN,
  api_registre: API_REGISTRE,
  api_ajoutgrp: API_AJOUTGRP,
  api_getgrp: Api_getGrp,
  api_getStatu : Api_getStatu,
  api_postSatus : Apis_postStatus,
  api_postSComment : Api_postSComment,
  api_getgrpById: Api_getgrpById,
  api_getUserpById: Api_getUserById

}

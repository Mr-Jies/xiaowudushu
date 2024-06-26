import * as os from 'os';
import * as path from 'path';
import * as fs from 'fs';

export function getMysqlUsernameAndPassword() {
  const homedir = '/Users/codegrace/code/fronProject/xiaowudushu/muke-du-admin';
  const usernamePath = path.resolve(homedir, '.vben', 'username');
  const passwordPath = path.resolve(homedir, '.vben', 'password');
  const username = fs.readFileSync(usernamePath).toString();
  const password = fs.readFileSync(passwordPath).toString();
  return {
    username,
    password,
  };
}

export function success(data, msg) {
  return {
    code: 0,
    data,
    msg,
  };
}

export function error(msg) {
  return {
    code: 1,
    msg,
  };
}

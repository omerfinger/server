import * as createError from 'http-errors';
import AuthService from './auth.srv';

import logger from '../utils/logger';

exports.auth = async (req, res, next) => {
  const { idToken } = req.cookies;
  const isAuth = await AuthService.auth(idToken);
  if (isAuth) {
    logger.info(`idToken:${idToken} idToken`);
    next();
  } else {
    logger.info(`Token is not authed: ${idToken}`);
    next(createError(403, 'Forbidden'));
  }
};

exports.login = async (req, res) => {
  const { idToken } = req.body;
  const auth = await AuthService.login(idToken);
  if (auth) {
    res.cookie('idToken', idToken);
    res.sendStatus(200);
  } else {
    res.sendStatus(500);
  }
};

exports.register = async (req, res) => {
  const { auth } = req.body;
  const { userData } = req.body;
  const regData = await AuthService.register(auth, userData);
  if (regData) {
    res.sendStatus(200);
  } else {
    res.sendStatus(500);
  }
};

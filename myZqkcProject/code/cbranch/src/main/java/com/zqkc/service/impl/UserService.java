package com.zqkc.service.impl;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zqkc.dao.IUserDao;
import com.zqkc.model.User;
import com.zqkc.service.IUserService;
import com.zqkc.util.StringUtil;
@Service
public class UserService implements IUserService {
	private Logger log = Logger.getLogger(Logger.class);
	@Autowired
	private IUserDao userDao;	

	public void setUserDao(IUserDao userDao) {
		this.userDao = userDao;
	}

	@Override
	public boolean doChangePwd(User user) {
		boolean flag = false;//定义标志变量
		try {
			flag = userDao.changePwd(user);
		} catch (Exception e) {
			log.debug("修改用户密码出现异常:"+e);
		}
		return flag;
	}

	@Override
	public List<User> doList() {		
		return userDao.list();
	}

	@Override
	public User doLogin(User user) {
		User loginUser = new User();
		try {
			user.setPassword(StringUtil.entry(user.getPassword()));//密码加密
			loginUser = userDao.login(user);
		} catch (Exception e) {
			log.debug("用户登录异常:"+e);
		}
		return loginUser;
	}

	@Override
	public boolean doLogout(User user) {
		boolean flag = false;
		try {
			flag = userDao.update(user);
		} catch (Exception e) {
			log.debug("用户退出异常:"+e);
		}
		return flag;
	}

	@Override
	public int doSave(User user) {
		int n = -1;
		try {
			n = userDao.save(user);
		} catch (Exception e) {
			log.debug("保存用户信息异常:"+e);
		}
		return n;
	}

	@Override
	public boolean doUpdate(User user) {
		boolean flag = false;
		try {
			flag = userDao.update(user);
		} catch (Exception e) {
			log.debug("更新用户信息异常:"+e);
		}
		return flag;
	}

	@Override
	public int countUser() {		
		return userDao.getUsers();
	}

}

package com.zqkc.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zqkc.dao.IUserDao;
import com.zqkc.model.User;
import com.zqkc.model.UserInformation;
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
		boolean flag = false;// 定义标志变量
		try {
			flag = userDao.changePwd(user);
		} catch (Exception e) {
			log.debug("修改用户密码出现异常:" + e);
		}
		return flag;
	}

	@Override
	public List<User> doList() {
		return userDao.list();
	}

	@Override
	public User doLogin(User user) {
		System.out.println("doLogin--------==========starts");
		User loginUser = new User();
		try {
			// user.setPassword(StringUtil.entry(user.getPassword()));//密码加密
			System.out.println("user=========" + user.getAccount() + "======11d====" + user.getPassword());
			System.out.println("user=========" + user.getIsdel() + "======22====" + user.getIslock() + "====33=="
					+ user.getStatus());
			loginUser = userDao.login(user);
			System.out.println(
					"loginUser========" + loginUser.getAccount() + "=====11111111====" + loginUser.getPassword());
		} catch (Exception e) {
			log.debug("用户登录异常:" + e);
		}
		return loginUser;
	}

	@Override
	public boolean doLogout(User user) {
		System.out.println("doLogout--------==========starts");
		boolean flag = false;
		try {
			flag = userDao.update(user);
		} catch (Exception e) {
			log.debug("用户退出异常:" + e);
		}
		System.out.println("doLogout--------==========end");
		return flag;
	}

	@Override
	public int doSave(User user) {
		System.out.println("doSave---------======starts");
		int n = -1;
		try {
			// user.setPassword(StringUtil.entry(user.getPassword()));//密码加密
			System.out.println("=====doSave======");
			n = userDao.save(user);
			System.out.println("n==========" + n);
		} catch (Exception e) {
			log.debug("保存用户信息异常:" + e);
		}
		System.out.println("doSave-------------======end");
		return n;
	}

	@Override
	public boolean doUpdate(User user) {
		System.out.println("doUpdate---------======starts");
		boolean flag = false;
		try {
			flag = userDao.update(user);
		} catch (Exception e) {
			log.debug("更新用户信息异常:" + e);
		}
		System.out.println("doUpdate---------======end");
		return flag;
	}

	@Override
	public int countUser() {
		return userDao.getUsers();
	}

	@Override
	public boolean doDelete(User user) {
		System.out.println("doDelete---------======starts");
		boolean flag = false;
		flag = userDao.delete(user) > 0 ? true : false;
		System.out.println("doDelete---------======end");
		return false;
	}

	@Override
	public List<UserInformation> dolistUserInformation(User user) {
		System.out.println("dolistUserInformation---------======starts");
		List<UserInformation> list=new ArrayList<UserInformation>();
		try {
			list=userDao.listUserInformation(user);
		} catch (Exception e) {
		e.printStackTrace();
		}
		System.out.println("dolistUserInformation---------======end");
		return list;
	}

	@Override
	public boolean doSaveUserInformation(UserInformation userInformation) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean doDeleteUserInformation(User user) {
		// TODO Auto-generated method stub
		return false;
	}



}

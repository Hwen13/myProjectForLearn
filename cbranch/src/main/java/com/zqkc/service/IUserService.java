package com.zqkc.service;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.springframework.stereotype.Service;

import com.zqkc.model.User;
import com.zqkc.model.UserInformation;

@Service
public interface IUserService {
	/**
	 * 执行保存用户数据
	 * 
	 * @param user
	 * @return
	 */
	public int doSave(User user);

	/**
	 * 用户登录
	 * 
	 * @param user
	 * @return
	 */
	public User doLogin(User user);

	/**
	 * 更新用户信息
	 * 
	 * @param user
	 * @return
	 */
	public boolean doUpdate(User user);

	/**
	 * 删除用户信息
	 * 
	 * @param user
	 * @return
	 */
	public boolean doDelete(User user);

	/**
	 * 执行用户退出
	 * 
	 * @param user
	 * @return
	 */
	public boolean doLogout(User user);

	/**
	 * 执行用户修改密码
	 * 
	 * @param user
	 * @return
	 */
	public boolean doChangePwd(User user);

	/**
	 * 查询用户列表
	 * 
	 * @return
	 */
	public List<User> doList();

	/**
	 * 统计用户数
	 * 
	 * @return
	 */
	public int countUser();
	
	/**
	 * 查询用户列表
	 * 
	 * @return
	 */
	public List<UserInformation> dolistUserInformation(User user);
	/**
	 * 查询所有用户信息
	 * 
	 * @return
	 */
	public boolean doSaveUserInformation(UserInformation userInformation);
	/**
	 * 删除所有用户信息
	 * 
	 * @return
	 */
	public boolean doDeleteUserInformation(User user);
	
	
	}

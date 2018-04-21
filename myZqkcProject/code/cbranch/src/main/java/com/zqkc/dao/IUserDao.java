package com.zqkc.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.zqkc.model.User;

/**
 * 用户持久层接口
 * @author 折翼天蝎
 *
 */
@Repository
public interface IUserDao {
	/**
	 * 用户登录
	 * @return
	 */
	public User login(User user);
	/**
	 * 配套用户登录，更改用户某些数据的
	 * @param user
	 * @return
	 */
	public boolean update(User user);	
	/**
	 * 修改密码
	 * @return
	 */
	public boolean changePwd(User user);	
	/**
	 * 保存用户信息
	 * @param user
	 * @return
	 */
	public int save(User user);
	/**
	 * 查询所有用户信息
	 * @return
	 */
	public List<User> list();
	/**
	 * 获取用户数
	 * @return
	 */
	public int getUsers();
}

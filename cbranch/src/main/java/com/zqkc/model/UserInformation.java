package com.zqkc.model;

import java.util.List;

/**
 * 
 * @author Administrator Model层 用户 封装对象
 * 
 */
public class UserInformation {

	/**
	 * 用户编号
	 */
	private int id;
	/**
	 * 用户姓名
	 */
	private String name;
	/**
	 * 用户性别
	 */
	private String sex;
	/**
	 * 用户简介
	 */
	private String resume;
	/**
	 * 用户修改内容
	 */
	private String changeContent;
	/**
	 * 用户账号
	 */
	private String u_account;
	/**
	 * 用户密码
	 */
	private String u_password;
	/**
	 * 是否删除 0为true删除 1为false 删除
	 */
	private byte isdel = 1;
	/**
	 */
	/**
	 * 排序
	 */
	private byte power = 1;
	/**
	 * 用户列表
	 */
	private List<User> userList;
	/**
	 * 用户
	 */
	private User users;
	public User getUsers() {
		return users;
	}
	public void setUsers(User users) {
		this.users = users;
	}
	/**
	 * 是否删除 0为true删除 1为false 删除
	 */
	private byte islock = 1;
	
	
	public List<User> getUserList() {
		return userList;
	}
	public void setUserList(List<User> userList) {
		this.userList = userList;
	}
	public byte getIslock() {
		return islock;
	}
	public void setIslock(byte islock) {
		this.islock = islock;
	}
	
	public List<User> getUser() {
		return userList;
	}
	public void setUser(List<User> userList) {
		this.userList = userList;
	}	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public String getResume() {
		return resume;
	}
	public void setResume(String resume) {
		this.resume = resume;
	}
	public String getChangeContent() {
		return changeContent;
	}
	public void setChangeContent(String changeContent) {
		this.changeContent = changeContent;
	}
	public String getU_account() {
		return u_account;
	}
	public void setU_account(String u_account) {
		this.u_account = u_account;
	}
	public String getU_password() {
		return u_password;
	}
	public void setU_password(String u_password) {
		this.u_password = u_password;
	}
	public byte getPower() {
		return power;
	}
	public void setPower(byte power) {
		this.power = power;
	}
	public byte getIsdel() {
		return isdel;
	}
	public void setIsdel(byte isdel) {
		this.isdel = isdel;
	}
	
}

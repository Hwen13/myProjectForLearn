package com.zqkc.model;

import com.sun.xml.internal.bind.v2.schemagen.xmlschema.List;

/**
 * 
 * @author Administrator Model层 用户 封装对象
 * 
 */
public class User {

	/**
	 * 用户编号
	 */
	private int id;
	/**
	 * 用户账号
	 */
	private String account;
	/**
	 * 用户密码
	 */
	private String password;
	/**
	 * 登录IP
	 */
	private String loginip;
	/**
	 * 登录时间
	 */
	private String logintime;
	/**
	 * 是否锁定 0为true锁定 1为false 未锁定
	 */
	private byte islock = 1;
	/**
	 * 是否删除 0为true删除 1为false 删除
	 */
	private byte isdel = 1;
	/**
	 * 状态:0 在线 1离线
	 */
	private byte status = 1;
	
	public User() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getAccount() {
		return account;
	}

	public void setAccount(String account) {
		this.account = account;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getLoginip() {
		return loginip;
	}

	public void setLoginip(String loginip) {
		this.loginip = loginip;
	}

	public String getLogintime() {
		return logintime;
	}

	public void setLogintime(String logintime) {
		this.logintime = logintime;
	}

	public byte getIslock() {
		return islock;
	}

	public void setIslock(byte islock) {
		this.islock = islock;
	}

	public byte getIsdel() {
		return isdel;
	}

	public void setIsdel(byte isdel) {
		this.isdel = isdel;
	}

	public byte getStatus() {
		return status;
	}

	public void setStatus(byte status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "User [account=" + account + ", id=" + id + ", isdel=" + isdel + ", islock=" + islock + ", loginip="
				+ loginip + ", logintime=" + logintime + ", status=" + status + "]";
	}

}

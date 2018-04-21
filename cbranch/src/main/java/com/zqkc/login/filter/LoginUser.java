package com.zqkc.login.filter;

/**
 * 已登录用户
 * 
 * @author 折翼天蝎
 *
 */
public class LoginUser {

	private String sessionId;// 登录session ID

	private String account;// 登录帐号

	private String loginIp;// 登录IP
	// 定义空构造

	public LoginUser() {
	}

	// 定义有参构造
	public LoginUser(String sessionId, String account, String loginIp) {
		this.sessionId = sessionId;
		this.account = account;
		this.loginIp = loginIp;
	}

	public String getSessionId() {
		return sessionId;
	}

	public void setSessionId(String sessionId) {
		this.sessionId = sessionId;
	}

	public String getAccount() {
		return account;
	}

	public void setAccount(String account) {
		this.account = account;
	}

	public String getLoginIp() {
		return loginIp;
	}

	public void setLoginIp(String loginIp) {
		this.loginIp = loginIp;
	}

	/**
	 * 复写object类的equals方法比较两个对象是否相等
	 */
	public boolean equals(Object obj) {
		if (obj == null) {
			return false;
		}
		if (this == obj) {
			return true;
		}
		if (obj instanceof LoginUser) {// 判断obj是否是LoginUser的一个实例
			LoginUser user = (LoginUser) obj;
			if (user.sessionId.equals(this.sessionId)) {
				return true;
			} else {
				if (user.account.equals(this.account) && user.loginIp.equals(this.loginIp)) {
					return false;
				} else {
					return true;
				}
			}
		}
		return false;
	}

}
